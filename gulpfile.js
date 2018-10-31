var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  mustache = require("gulp-mustache"),
  data = require('gulp-data'),
  imagemin = require('gulp-imagemin'),
  uglifycss = require('gulp-uglifycss'),
  rev = require('gulp-rev'),
  exec = require('child_process').exec,
  fs = require('fs');


gulp.task('test', function() {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha());
});


gulp.task('render-readme', function () {
  return gulp.src('templates/README.md')
    .pipe(data(function(file) {
      return {
        contributors: JSON.parse(fs.readFileSync('contributors.json')).map(function (contributor) {
          var len = contributor.contributions.length;
          contributor.contributions.forEach(function(v) { v.comma = true; v.and = false; });
          contributor.contributions[len-1].comma = false;
          if(len > 1) {
            contributor.contributions[len-1].and = true;
            contributor.contributions[len-2].comma = false;
          }
          return contributor;
        })
      };
    }))
    .pipe(mustache())
    .pipe(gulp.dest("."));
});

gulp.task('render-humans', function () {
  var d = new Date();

  function pad(s) {
    if (s.toString().length == 1) {
      return "0" + s;
    }
    return s;
  }

  return gulp.src('templates/humans.txt')
    .pipe(data(function(file) {
      return {
        contributors: JSON.parse(fs.readFileSync('contributors.json')),
        last_update: d.getFullYear() + "/" + pad(d.getMonth()) + "/" + pad(d.getDay())
      };
    }))
    .pipe(mustache())
    .pipe(gulp.dest("dist/"));
});

function ParrotObjectAddSlackName (parrot) {
  parrot.slack_name = (parrot.gif || parrot.hd).replace(/\.gif$/, '').toLowerCase().replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-').replace(/^hd-/,'');
  return parrot;
}

gulp.task('css', function () {
  return gulp.src('src/parrot.css')
    .pipe(uglifycss())
    .pipe(rev())
    .pipe(gulp.dest('dist/assets/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/assets/'));
});

gulp.task('compress', gulp.series('test', function (cb) {
  exec('rm -f ./parrots.zip', function (err, stdout, stderr) {
    console.log(stderr);
    if(err != null) { cb(err); }
    exec("echo \"      ~= Party or Die =~\n~= cultofthepartyparrot.com =~\" | zip -o -r -z  ./parrots.zip ./parrots/*", function(err, stdout, stderr) {
      console.log(stderr);
      cb(err);
    });
  });
}));

gulp.task('guests-compress', gulp.series('test', function (cb) {
  exec('rm -f ./guests.zip', function (err, stdout, stderr) {
    console.log(stderr);
    if(err != null) { cb(err); }
    exec("echo \"      ~= Party or Die =~\n~= cultofthepartyparrot.com =~\" | zip -o -r -z  ./guests.zip ./guests/*", function(err, stdout, stderr) {
      console.log(stderr);
      cb(err);
    });
  });
}));

gulp.task('zip', gulp.series('compress', 'guests-compress', function () {
  return gulp.src('*.zip')
    .pipe(rev())
    .pipe(gulp.dest('dist/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/'));
}));

// Depends on zip and css for the asset manifest
gulp.task('render', gulp.series('test', 'zip', 'css', function () {
  return gulp.src(['templates/index.html', 'templates/parrotparty.yaml'])
    .pipe(data(function(file) {
      // Mustache doesn't handle dots in keys...
      var assets = {};
      var json = JSON.parse(fs.readFileSync('dist/assets/rev-manifest.json'));
      for(var key in json) {
        assets[key.replace('.', '_')] = json[key];
      }
      return {
        parrots: JSON.parse(fs.readFileSync('parrots.json')).map(ParrotObjectAddSlackName),
        guests: JSON.parse(fs.readFileSync('guests.json')).map(ParrotObjectAddSlackName),
        assets: assets,
        zip: JSON.parse(fs.readFileSync('dist/rev-manifest.json'))['parrots.zip'],
        guests_zip: JSON.parse(fs.readFileSync('dist/rev-manifest.json'))['guests.zip']
      };
    }))
    .pipe(mustache())
    .pipe(gulp.dest("dist/"));
}));

gulp.task('images', function () {
  gulp.src('src/favicon.ico')
    .pipe(gulp.dest('dist/'));
  gulp.src('parrots/**/*')
    .pipe(gulp.dest('dist/parrots/'));
  gulp.src('guests/**/*')
    .pipe(gulp.dest('dist/guests/'));
  return gulp.src('src/*.{svg,png,jpg,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/'));
});

gulp.task('clean', function (cb) {
  exec('rm -rf dist/*', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('build', gulp.series('test', 'css', 'images', 'render', 'render-humans', 'zip'));

gulp.task('default', gulp.parallel('test'));

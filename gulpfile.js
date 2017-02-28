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

function ParrotObjectAddSlackName (parrot) {
  parrot.slack_name = (parrot.gif || parrot.hd).replace(/\.gif$/, '').toLowerCase().replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-');
  return parrot;
}

// Depends on zip and css for the asset manifest
gulp.task('render', ['test', 'zip', 'css'], function () {
  return gulp.src('templates/*')
    .pipe(data(function(file) {
      // Mustache doesn't handle dots in keys...
      var assets = {};
      var json = JSON.parse(fs.readFileSync('dist/assets/rev-manifest.json'));
      for(var key in json) {
        assets[key.replace('.', '_')] = json[key];
      }
      return {
        parrots: JSON.parse(fs.readFileSync('parrots.json')).map(ParrotObjectAddSlackName),
        assets: assets,
        zip: JSON.parse(fs.readFileSync('dist/rev-manifest.json'))['parrots.zip']
      };
    }))
    .pipe(mustache())
    .pipe(gulp.dest("dist/"));
});

gulp.task('zip', ['compress'], function () {
  return gulp.src('parrots.zip')
    .pipe(rev())
    .pipe(gulp.dest('dist/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/'));
});

gulp.task('compress', ['test'], function (cb) {
  exec('rm -f ./parrots.zip', function (err, stdout, stderr) {
    console.log(stderr);
    if(err != null) { cb(err); }
    exec("echo \"      ~= Party or Die =~\n~= cultofthepartyparrot.com =~\" | zip -o -r -z  ./parrots.zip ./parrots/*", function(err, stdout, stderr) {
      console.log(stderr);
      cb(err);
    });
  });
});

gulp.task('images', function () {
  gulp.src('src/favicon.ico')
    .pipe(gulp.dest('dist/'));
  gulp.src('parrots/**/*')
    .pipe(gulp.dest('dist/parrots/'));
  return gulp.src('src/*.{svg,png,jpg,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/'));
});

gulp.task('css', function () {
  return gulp.src('src/parrot.css')
    .pipe(uglifycss())
    .pipe(rev())
    .pipe(gulp.dest('dist/assets/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/assets/'));
});

gulp.task('clean', function (cb) {
  exec('rm -rf dist/*', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('build', ['test', 'css', 'images', 'render', 'zip']);

gulp.task('default', ['test']);

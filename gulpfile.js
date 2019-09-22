var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  mustache = require("gulp-mustache"),
  data = require('gulp-data'),
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

function ModifiedParrotObject (parrot) {
  parrot.slack_name = (parrot.gif || parrot.hd).replace(/\.gif$/, '').toLowerCase().replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-').replace(/^hd-/,'');
  parrot.still = (parrot.gif || parrot.hd).replace(/\.gif$/, '.png').replace('hd/','')
  return parrot;
}

gulp.task('render-web', function () {
  // Mustache doesn't handle dots in keys...
  var assets = {};
  var json = JSON.parse(fs.readFileSync('dist/manifest.json'));
  for(var key in json) {
    assets[key.replace('.', '_').replace('/', '__')] = json[key];
  }
  var renderData = {
    parrots: JSON.parse(fs.readFileSync('parrots.json')).map(ModifiedParrotObject),
    guests: JSON.parse(fs.readFileSync('guests.json')).map(ModifiedParrotObject),
    flags: JSON.parse(fs.readFileSync('flags.json')).map(ModifiedParrotObject),
    files: assets
  };
  return gulp.src(['templates/index.html', 'templates/flags.html', 'templates/parrotparty.yaml'])
    .pipe(data(renderData))
    .pipe(mustache())
    .pipe(gulp.dest("dist/"));
});

gulp.task('default', gulp.parallel('test'));

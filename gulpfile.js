let gulp = require('gulp'), // Gulp
    concat = require('gulp-concat'), // Concat multiple files
    gulpif = require('gulp-if'), // If statements
    clean = require('gulp-clean'), // Remove files and folders
    sourcemaps = require('gulp-sourcemaps'), // Inline sourcemaps in dev mode
    sass = require('gulp-sass'), // SCSS compiler
    autoprefixer = require('gulp-autoprefixer'), // Add browser prefixes
    uglify = require('gulp-uglify-es').default, // JS minify (ES6 Supported)
    babel = require('gulp-babel'),
    browserSync = require('browser-sync').create(); // Synchronised browser testing

// File Paths
const jsPaths = 'src/assets/js/',
    scssPath = 'src/assets/scss/',
    cssPath = 'src/assets/css/',
    htmlPath = 'src/**/*.html',
    mapsPath = 'src/assets/**/*/*.map';

// JS Paths
const paths = {
  scripts: [jsPaths + 'core.js'],
  scssHome: [scssPath + 'homepage.scss'],
  scssSubpage: [scssPath + 'subpage.scss'],
  scssPrint: [scssPath + 'print.scss']
};

// Set env value
var env = process.env.NODE_ENV || 'dev';

//------------------------------------------------------------
// = TASKS
//------------------------------------------------------------
// BrowserSync
function browserSyncInit(done) {
  browserSync.init({
    server: {
      baseDir: './src/'
    },
    port: 3000,
    open: false
  });
  done();
}

// BrowserSync Reload
function browserSyncReload() {
  browserSync.reload();
}

// Clean
function cleanMap(done) {
  gulp
      .src(mapsPath, {
        read: false
      })
      .pipe(clean());
  done();
}

// Scripts
function scripts(done) {
  gulp
      .src(paths.scripts)
      .pipe(gulpif(env === 'dev', sourcemaps.init({ largeFile: true })))
      .pipe(babel({presets: ['@babel/preset-env']}))
      .pipe(gulpif(env === 'prod', uglify()))
      .pipe(concat('core.min.js'))
      .pipe(gulpif(env === 'dev', sourcemaps.write('/')))
      .pipe(gulp.dest(jsPaths))
      .pipe(browserSync.stream());
  done();
}

// SCSS
function scss(done) {
  // Homepage
  gulp
      .src(paths.scssHome)
      .pipe(gulpif(env === 'dev', sourcemaps.init({ largeFile: true })))
      .pipe(
          gulpif(
              env === 'prod',
              sass({ outputStyle: 'compressed' }).on('error', sass.logError)
          )
      )
      .pipe(gulpif(env === 'dev', sass().on('error', sass.logError)))
      .pipe(autoprefixer())
      .pipe(gulpif(env === 'dev', sourcemaps.write('/')))
      .pipe(gulp.dest(cssPath))
      .pipe(browserSync.stream());

  // Subpage
  gulp
    .src(paths.scssSubpage)
    .pipe(gulpif(env === 'dev', sourcemaps.init({ largeFile: true })))
    .pipe(
      gulpif(
        env === 'prod',
        sass({ outputStyle: 'compressed' }).on('error', sass.logError)
      )
    )
    .pipe(gulpif(env === 'dev', sass().on('error', sass.logError)))
    .pipe(autoprefixer())
    .pipe(gulpif(env === 'dev', sourcemaps.write('/')))
    .pipe(gulp.dest(cssPath))
    .pipe(browserSync.stream());

  // Print
  gulp
    .src(paths.scssPrint)
    .pipe(gulpif(env === 'dev', sourcemaps.init({ largeFile: true })))
    .pipe(
      gulpif(
        env === 'prod',
        sass({ outputStyle: 'compressed' }).on('error', sass.logError)
      )
    )
    .pipe(gulpif(env === 'dev', sass().on('error', sass.logError)))
    .pipe(autoprefixer())
    .pipe(gulpif(env === 'dev', sourcemaps.write('/')))
    .pipe(gulp.dest(cssPath))
    .pipe(browserSync.stream());


  done();
}

//------------------------------------------------------------
// = RUN TASKS
//------------------------------------------------------------

function watchFiles(done) {
  gulp.watch(paths.scripts, gulp.series(scripts));
  gulp.watch(scssPath + '**/*.scss', gulp.series(scss));
  gulp.watch(htmlPath).on('change', browserSyncReload);
  done();
}

const watch = gulp.series(browserSyncInit, watchFiles);
const build = gulp.series(gulp.parallel(scripts, scss), cleanMap);
const develop = gulp.series(gulp.parallel(scripts, scss), watch);

exports.cleanmap = cleanMap;
exports.watch = watch;
exports.build = build;
exports.default = develop;

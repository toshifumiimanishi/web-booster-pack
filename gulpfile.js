const gulp = require('gulp');
const ejs = require('gulp-ejs');
const data = require('gulp-data');
const sass = require("gulp-sass");
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const postcssScss = require('postcss-scss');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const csswring = require('csswring');
const cssDeclarationSorter = require('css-declaration-sorter');
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').create();
const fs = require('fs');
const paths = {
  markup: {
    src: ['src/_ejs/**/*.ejs', '!' + 'src/_ejs/**/_*.ejs'],
    dest: 'htdocs/'
  },
  styles: {
    src: 'src/_sass/**/*.scss',
    dest: 'htdocs/'
  },
  scripts: {
    src: ['src/_js/**/*.js', '!' + 'src/_js/js/entry.js'],
    dest: 'htdocs/'
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function markup() {
  const meta = JSON.parse(fs.readFileSync('src/_ejs/_data/_meta.json'));
  const config = JSON.parse(fs.readFileSync('src/_ejs/_data/_config.json'));
  const sitedata = {...meta, ...config};
  const onError = function (err) {
    console.log(err.message);
    this.emit('end');
  };

  return gulp.src(paths.markup.src)
    .pipe(data(function(file) {
      const filename = file.path;
      const absolutePath = filename.split('_ejs/')[filename.split('_ejs/').length -1].replace('.ejs','.html');
      const relativePath = '../'.repeat([absolutePath.split('/').length -1]);

      sitedata.path.relative = relativePath;
      return sitedata;
    }))
    .pipe(ejs({
      'sitedata': sitedata
    }, {}, {
      ext: '.html'
    }).on('error', onError))
    .pipe(gulp.dest(paths.markup.dest));
}

function styles() {
  const isSourcemaps = process.env.NODE_ENV === 'development' ? true : false;
  const plugins = {
    sass: [
      stylelint(),
      reporter(),
    ],
    css: [
      autoprefixer({
        grid: 'autoplace'
      }),
      flexbugsFixes,
      cssDeclarationSorter({order: 'smacss'}),
    ]
  };
  if (process.env.NODE_ENV === 'production') {
    plugins['css'] = [...plugins['css'], csswring()];
  }

  return gulp.src(paths.styles.src, { sourcemaps: isSourcemaps })
    .pipe(postcss(plugins['sass'], { syntax: postcssScss }))
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules/'],
      precision: 7
    }).on('error', sass.logError))
    .pipe(postcss(plugins['css']))
    .pipe(gulp.dest(paths.styles.dest, { sourcemaps: isSourcemaps }))
    .pipe(browserSync.stream());
}

function scripts() {
  const isSourcemaps = process.env.NODE_ENV === 'development' ? true : false;

  return gulp.src(paths.scripts.src, { sourcemaps: isSourcemaps })
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest(paths.scripts.dest,  { sourcemaps: isSourcemaps }))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch('src/_ejs/**/*.{ejs, json}', markup);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch('htdocs/**/*.html').on('change', browserSync.reload);
}

function serve() {
  browserSync.init({
    ghostMode: false,
    server: {
      baseDir: "htdocs"
    },
    open: 'external'
  });
}

exports.markup = markup;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.serve = serve;
exports.dev = gulp.series(gulp.parallel(markup, styles, scripts), gulp.parallel(watch, serve));
if (process.env.NODE_ENV === 'production') {
  exports.default = gulp.parallel(markup, styles, scripts);
} else {
  exports.default = gulp.series(gulp.parallel(markup, styles, scripts), watch);
}

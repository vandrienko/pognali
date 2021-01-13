"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso"); //Минифицируем CSS
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin"); // Оптимизируем изображения
var webp = require("gulp-webp"); //Создаём WebP-изображение
var svgstore = require("gulp-svgstore"); //Соберём SVG-спрайт
var posthtml = require("gulp-posthtml");  //Для добавления svg в разметку
var include = require("posthtml-include");
var del = require("del"); //Для удаления папки

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

// Оптимизация изображений
gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
});


//Создаём WebP-изображения
gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
  });

//Соберём SVG-спрайт
gulp.task("sprite", function () {
  return gulp.src("source/img/sprite/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

//Для добавления svg в разметку
gulp.task("html", function () {
  return gulp.src("source/*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("build"));
});

// Копируем файлы в папку build
gulp.task("copy", function () {
  return gulp.src([
  "source/fonts/**/*.{woff,woff2}",
  "source/img/**",
  "source/js/**",
  "source/*.ico"
  ], {
  base: "source"
  })
  .pipe(gulp.dest("build"));
});

// Очищаем папку build перед копированием
gulp.task("clean", function () {
  return del("build");
});

// запуск билда
gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "sprite",
  "html"
  ));

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("server", function () {
  server.init({
    server: "build/"
    // notify: false,
    // open: true,
    // cors: true,
    // ui: false
});

gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("start", gulp.series("build", "server"));

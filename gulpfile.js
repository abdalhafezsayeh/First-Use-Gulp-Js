 const {src , dest } = require("gulp");

 // Html 
const htmlmine = require('gulp-htmlmin');
function f_htmlMin() {
    return src('src/*.html')
    .pipe(htmlmine({collapseWhitespace:true,removeComments:true}))
    .pipe(dest("Build"))
}

exports.html = f_htmlMin;


// css
const cleanCSS = require('gulp-clean-css');
function f_cssMin() {
    return src('src/Css/*.css').pipe(cleanCSS()).pipe(dest("Build/Css"))
}

exports.css = f_cssMin;


// Js
const terser = require('gulp-terser-js')
function f_JsMin() {
    return src('src/Js/*.js').pipe(terser()).pipe(dest("Build/Js"))
}

exports.js = f_JsMin;


// Images Min And Cover To Webp 
const imgMin = require("gulp-imagemin");
const webp = require('gulp-webp');
function f_imagemin() {
     return src("src/Images/*.png").pipe(imgMin()).pipe(webp())
.pipe(dest("build/Images"))    
}

exports.images = f_imagemin;


// Images Conver To webp
// const webp = require('gulp-webp');
// function f_imageminConvert() {
//      return src("src/Images/*.png").pipe(webp())
// .pipe(dest("build/Images"))    
// }

// exports.imagesConvert = f_imageminConvert;
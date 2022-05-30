const { task, watch, src, dest, parallel, series } = require('gulp')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync').create()
const htmlMin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const hash = require('gulp-hash')
const references = require('gulp-hash-references')
const path = require('path')

const manifestFile = 'asset-manifest.json'
const buildDir = './build'

function serve() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    watch("./*.html").on('change', browserSync.reload)
    watch("./css/**/*.css").on('change', browserSync.reload)
    watch("./**/*.js").on('change', browserSync.reload)
}

function buildHTML() {
    return src('index.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(dest(buildDir))
        .pipe(references(manifestFile)) // replace file paths in index.html according to the manifest
        .pipe(dest(buildDir))
}

function buildCSS() {
    return src('./css/**/*.css')
        .pipe(cleanCSS())
        .pipe(hash())
        .pipe(dest(path.join(buildDir, 'css')))
        .pipe(hash.manifest(manifestFile)) // generate a manifest file
        .pipe(dest('.'))
}


function buildJS() {
    return src(['./**/*.js', '!./node_modules/**', '!./gulpfile.js'])
        .pipe(uglify())
        .pipe(hash())
        .pipe(dest('build/'))
        .pipe(hash.manifest('asset-manifest.json')) // generate a manifest file
        .pipe(dest('.'))
}

function buildImages(cb) {
    src('./img/**/*.png')
        .pipe(imagemin([
            imagemin.optipng({ optimizationLevel: 7 })
        ]))
        .pipe(dest(path.join(buildDir, 'img')))
    cb()
}

exports.build = series(parallel(buildCSS, buildJS), buildHTML)
exports.default = serve
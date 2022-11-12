import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';



// передаем в аргумент компилятор
const sass = gulpSass(dartSass);

export const scss = () => {
    return app. gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%=error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@scss\//g, '../scss/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss(
        {
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }
    ))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowsersList: ["last 3 versions"],
        cascade: true
    }))
    // Раскоментировать, если нужен несжатый файл стилей
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}
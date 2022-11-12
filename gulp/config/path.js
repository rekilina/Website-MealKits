import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        // js: `${buildFolder}/js/`,
        js: `${buildFolder}/js/`,
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        // js: `${srcFolder}/js/app.js`,
        js: `${srcFolder}/js/`,
        images: `${srcFolder}/img/**/*`,
        svg: `${srcFolder}/img/**/*.svg`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
        css: `${srcFolder}/scss/**/*.css`,
    },
    watch: {
        js: `${srcFolder}/**/*js`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/img/**/*.{png, jpeg, jpg, gif, webp, svg, ico, gif}`,
        css: `${srcFolder}/scss/**/*.css`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}
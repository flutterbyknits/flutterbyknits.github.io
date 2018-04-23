module.exports = function (gulp, plugins, config, errorHandler) {

 // Set our desired configuration values.
var svgConfig = {
    mode: {
        // Make sure we're combining icons
        // using the <symbol> method.
        symbol: true
    },
    // Some more settings to keep
    // the SVG's code clean:
    svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        // By default the module wants to namespace
        // all our IDs and classes. We're grownups
        // so we want to preserve our settings.
        namespaceIDs: false,
        namespaceClassnames: false
    }
};

// Define our task.
gulp.task( 'svg', function() {
    // Set the source folder.
    gulp.src(config.paths.input.spriteSrc)
    // Include our options.
    .pipe( plugins.svgSprite(svgConfig))
    // Set the destination folder.
    .pipe( gulp.dest(config.paths.output.images));
});


gulp.task('sprite', function() {
	//main site sprites
    gulp.src(config.paths.input.spriteSrc)
        .pipe(plugins.svgSprite({
            shape: {
                spacing: {
                    padding: 5
                }
            },
            svg: {
                namespaceIDs: true, // Add namespace token to all IDs in SVG shapes
                namespaceClassnames: true, // Add namespace token to all CSS class names in SVG shapes
            },
            cssFile: "src/scss/shared/_sprite.scss",
            selector: "icon-%f",
        }))
        .pipe(gulp.dest("."));
      });
};

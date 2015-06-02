module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: {
                    'server/public/scripts/directives.min.js':'client/scripts/directives.js',
                    'server/public/scripts/app.min.js': 'client/scripts/app.js'
                }
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css"
                ],
                "dest": "server/public/vendor/"
            },
            masonry: {
                expand: true,
                cwd: "bower_components/masonry/dist/",
                src: [
                    "masonry.pkgd.min.js"
                ],
                "dest": "server/public/vendor/masonry"
            },
            angular_masonry: {
                expand: true,
                cwd: "bower_components/angular-masonry/",
                src: [
                    "angular-masonry.js"
                ],
                "dest": "server/public/vendor/masonry"
            },
            imagesloaded: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "imagesloaded/imagesloaded.pkgd.js",
                    "imagesloaded/imagesloaded.pkgd.min.js"
                ],
                "dest": "server/public/vendor/"
            },
            jquery: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"
                ],
                "dest": "server/public/vendor/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "bootstrap/dist/css/bootstrap.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
                    "bootstrap/dist/js/bootstrap.min.js"
                ],
                "dest": "server/public/vendor/"
            },
            styles: {
                expand: true,
                cwd: "client",
                src: [
                    "stylesheets/style.css"
                ],
                "dest": "server/public/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};

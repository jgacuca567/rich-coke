/*jslint node: true */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    /** Only use include_paths if extracting elements from Node_Modules */
                    includePaths: ['node_modules/susy/sass'],
                    outputStyle: 'expanded',
                    sourceMap: false,
                    require: 'susy'
                },
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        }, // sass

        watch: {
            options: {
                livereload: true,
                dateFormat: function(time) {
                        grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
                        grunt.log.writeln('Waiting for more changes...');
                    } //date format function
            }, //options
            scripts: {
                files: ['*.js', 'js/*.js']
            }, // scripts
            //Live Reload of SASS
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            }, //sass,
            css: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                }
            }, //css
            html: {
                files: ['*.html']
            }, //html
            all: {
                files: '{,**/}*.js',
                tasks: ['jshint']
            } //all
        }, //watch

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 2 versions'
                    })
                ]
            }
        }, //post css

        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            target: ['*.js', 'js/*.js'],
            all: ['*.js', 'js/*.js']
        } //jshint
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['autoupdate', 'sass', 'openport:watch.options.livereload:35729', 'watch', 'jshint']);
};

// Carregar Arquivo Grunt
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tarefas
    sass: {
      // Onde o plugin scss irá começar
      dist: {
        options: {
          sourcemap: 'none',
        },
        files: [
          {
            expand: true,
            cwd: 'sass',
            src: ['**/*.scss'],
            dest: 'css',
            ext: '.css',
          },
        ],
      },
    },
    postcss: {
      // Onde o Plugin Post CSS irá começar
      options: {
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions'],
          }),
        ],
      },
      dist: {
        src: 'css/style.css',
      },
    },
    cssmin: {
      // Onde o plugin css minify irá começar
      target: {
        files: [
          {
            expand: true,
            cwd: 'css',
            src: ['*.css', '!*.min.css'],
            dest: 'css',
            ext: '.min.css',
          },
        ],
      },
    },
    uglify: {
      // Onde o Plugin Uglify irá começar
      build: {
        src: ['src/*.js'],
        dest: 'js/script.min.js',
      },
    },
    watch: {
      // Compilar tudo em uma só tarefa 
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'cssmin'],
      },
      js: {
        files: '**/*.js',
        tasks: ['uglify'],
      },
    },
  })
  // Carregar plugins Grunt
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-postcss')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // Registrar a Tarefa Grunt
  grunt.registerTask('default', ['watch'])
}
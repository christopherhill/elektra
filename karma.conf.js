var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var options = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './config/karma.test.js', watched: false }
    ],
    preprocessors: {
      './config/karma.test.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    // Istanbul is 'coverage'
    reporters: ['coverage', 'progress'],
    coverageReporter: {
      type : 'html',
      dir : 'tests/coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(options);
};

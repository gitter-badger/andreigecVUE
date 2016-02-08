var webpackConf = require('./webpack.base.conf')
delete webpackConf.entry

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage'],
    files: ['../test/unit/index.js'],
    preprocessors: {
      '../test/unit/index.js': ['webpack', 'coverage']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      noInfo: true
    },
     coverageReporter: {
      // specify a common output directory
      dir: 'reports',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' }
      ]
    }
})
}

var fs = require("fs")
var browserify = require('browserify')
var vueify = require('vueify')

//one bundle for app
browserify('./js/container/app/app.js').transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream("dist/bundle.js"))
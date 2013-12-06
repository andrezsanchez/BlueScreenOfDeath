module.exports = createApp

var express = require('express')
var PORT = process.env.port || 80

function createApp() {
  var app = express()
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade')
  app.use(express.static('app'))

  app.get('/', function (req, res) {
    res.render('index.jade')
  })

  return app
}

function startApp() {
  var app = createApp()
  app.listen(PORT)
}

if (module === require.main) {
  startApp()
  console.log('listening on port ' + PORT)
}

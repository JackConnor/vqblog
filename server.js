var express        = require('express');
var http           = require('http');
var mongoose       = require('mongoose');
var logger         = require('morgan');
var path           = require('path');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Begin Middleware
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
console.log('4');

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

////route that goes straight to our public/ angular file
app.get('*', function(req, res){

  res.sendFile( __dirname + '/public/index.html')
})

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

mongoose.connect('mongodb://jackconnor:Skateboard1@ds059654.mongolab.com:59654/vqblog');

app.listen( process.env.PORT || '5555');

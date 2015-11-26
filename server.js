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

app.listen('5555');

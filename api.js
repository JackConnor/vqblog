var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var route          = express.Router();

//////bring in models////////
var Blogpost = require('models/blogpost.js');

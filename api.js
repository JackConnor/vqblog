var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var route          = express.Router();

//////bring in models////////
/////////////////////////////
var Blogpost = require('./models/blogpost.js');
var Comment  = require('./models/comment.js');
///////finish bringing models////
/////////////////////////////////

module.exports = function(app){

  app.get('/api/articles', function(req, res){
    Blogpost.find({}, function(err, blogposts){
      if(err){console.log(err)}
      else{
        res.json(blogposts)
      }
    });
  });

  app.get('/api/articles/:id', function(req, res){
    console.log(req.params.id);
    Blogpost.findOne({"_id": req.params.id}, function(err, article){
      if(err){console.log(err)}
      else{
        console.log(article);
        res.json(article);
      }
    })
  })

  app.get('/api/comments', function(req, res){
    Comment.find({}, function(err, comments){
      res.json(comments)
    })
  })

  app.get('/api/comments/:blogpost', function(req, res){
    console.log(req.params.blogpost);
    Comment.find({}, function(err, comments){
      if(err){console.log(err)}
      var postId = "565d1fe0992ec4f5622f1dc7"
      var commentsArray = [];
      for (var i = 0; i < comments.length; i++) {
        console.log(req.params.blogpost);
        console.log(comments[i].blogpost);
        if(comments[i].blogpost == req.params.blogpost){
          commentsArray.push(comments[i]);
        }
      }
      res.json(commentsArray)
    })
  })

  app.post('/api/comments', function(req, res){
    console.log(req.body);
    Comment.create(req.body, function(err, comment){
      if(err){console.log(err)}
      res.json(comment)
    })
  })
}


mongoose.connect('mongodb://jackconnor:Skateboard1@ds059654.mongolab.com:59654/vqblog')

var app = angular.module('articleController', [])

  .controller('articleCtrl', articleCtrl)

  articleCtrl.$inject = ['$http']
  function articleCtrl($http){
    var self = this;

    ///////////get all articles/////
    var currentArticle = function(){
      var articleId = window.location.hash.split('/')[2];
      $http({
        method: "GET"
        ,url: "api/articles/"+articleId
      })
      .then(function(article){
        console.log(article);
        self.currentArticle = article.data;
      })
    }
    ///get all comments
    var currentComments = function(){
      var articleId = window.location.hash.split('/')[2];
      $http({
        method: "GET"
        ,url: "api/comments/"+articleId
      })
      .then(function(comments){
        console.log(comments);
        self.currentArticleComments = comments.data;
      })
    }
    if(window.location.hash.split('/')[1] == "articles"){
      currentArticle();
      currentComments();
    }

    //////////logic to open and close the create-comment box
    ////////////////////////////////////////////////////////

    var commentCounter = false;
    function toggleCommentBox(){
      $('.singleNewComment').on('click', function(){
        if(!commentCounter){
          $('.singleCreateComment').append(
            "<div class='newCommentContainer'>"+
              "<input class='newCommentAuthor' placeholder='Your Name'></input>"+
              "<textarea class='newCommentContent' placeholder='Your Comment'></textarea>"+
              "<button class='submitComment'>Submit Comment</button>"+
            "<div>"
          )
        }
        else{
          $('.newCommentContainer').remove();
        }

        commentCounter = !commentCounter;
      })
    }
    toggleCommentBox();

    ///////////end logic for open-close comment box ///////
    ///////////////////////////////////////////////////////

  ////////end article controller//////
  ////////////////////////////////////
  ////////////////////////////////////
  }

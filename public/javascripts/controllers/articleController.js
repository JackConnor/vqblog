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

    //////////logic to open and close and create new the create-comment box
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
          $('.submitComment').on('click', function(){
            console.log('yoyoyoyo');
            addComment();
          })
        }
        else{
          $('.newCommentContainer').remove();
        }

        commentCounter = !commentCounter;
      })
    }
    toggleCommentBox();

    /////submit new comment logic
    /////////////////////////////
    function addComment(){
      var content = $('.newCommentContent').val();
      var author = $('.newCommentAuthor').val();
      var blogpost = window.location.hash.split('/')[2];
      $http({
        method:"POST"
        ,url:"/api/comments"
        ,data:{content:content, author:author, blogpost:blogpost}
      })
      .then(function(commentData){
        console.log(commentData);
        addCommentDOM(commentData.data.content, commentData.data.author)
        //////now we add the comment to our blogpost through and updat request
        $http({
          method:"POST"
          ,url:"/api/articles/newcomment"
          ,data: {id:window.location.hash.split('/')[2], data:commentData.data}
        })
        .then(function(newBlogData){
          console.log(newBlogData);
          $('.newCommentContainer').remove();
          commentCounter = !commentCounter;
        })
      })
    }

    ////function to add a new comment (just made) to the DOM
    function addCommentDOM(content, author){
      $(".singleCommentListContainer").prepend(
        "<div class='singleCommentList'>"+
          "<div class='singleCommentContent'>"+
            content +
          "</div>"+
          "<div class='singleCommentAuthor'>--"+
            author +
          "</div>"+
        "</div>"
      )
    }

    /////end submit new comment
    ///////////////////////////

    ///////////end logic for open-close and create new comment box ///////
    ///////////////////////////////////////////////////////

  ////////end article controller//////
  ////////////////////////////////////
  ////////////////////////////////////
  }

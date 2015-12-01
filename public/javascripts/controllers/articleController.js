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
    if(window.location.hash.split('/')[1] == "articles"){
      currentArticle();
    }

  ////////end article controller//////
  ////////////////////////////////////
  ////////////////////////////////////
  }

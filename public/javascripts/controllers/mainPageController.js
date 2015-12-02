var app = angular.module('mainPageController', [])

  .controller('mainPageCtrl', mainPageCtrl);

  mainPageCtrl.$inject = ['$http'];

  function mainPageCtrl($http){
    var self = this;
    // 
    // navigator.geolocation.getCurrentPosition(function(data){
    //   console.log(data);
    // })
    // get all articles
    $http({
      method: "GET"
      ,url: "/api/articles"
    })
    .then(function(articles){
      console.log(articles);
      self.allArticles = articles.data
    })

    /////make logo reroute us to the homepage
    $('.navbarContainerP').on('click', function(){
      console.log('oh yea');
      window.location.hash = "#/"
    })

    /////////angular events to do the hover effect
    //////////////////////////////////////////////
    /////////////////////////////////////////////
    var hoverCounterArray = [];

    self.hoverArticle = function(ind, id){
      console.log(id);
      if(!hoverCounterArray[ind]){
        $('#homeArticle'+ind).prepend(
          "<div class='linkHolderContainer' id='linkHolderContainer"+ind+"'>"+
          "</div>"
        )
        $('#linkHolderContainer'+ind).prepend(
          "<div class='linkHolder "+id+"' id='linkHolder"+ind+"'>"+
            "<h2>Read Full Article</h2>"+
          "</div>"
        )
        $('#linkHolder'+ind).on('mouseenter', function(){
          $('#linkHolder'+ind).css({
            backgroundColor: "#730E5F"
          })
        })
        $('#linkHolder'+ind).on('mouseleave', function(){
          $('#linkHolder'+ind).css({
            backgroundColor: "#4B1240"
          })
        })
        $('#linkHolder'+ind).on('click', function(){
          window.location.hash = "#/articles/"+id;
        })
        hoverCounterArray[ind] = !hoverCounterArray[ind];
      } else {
        $('#linkHolder'+ind).remove();
        $('#linkHolderContainer'+ind).remove();
        hoverCounterArray[ind] = !hoverCounterArray[ind];
      }
    }
    /////////end angular events to do the hover effect
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    ///////////controlling the width of the content box
    function contentWidthFunc(){
      var contentWidth = $(".homeListHolder").width();
      $('.homeListContent').width(contentWidth - 255);
      console.log(contentWidth);
    }
    setTimeout(contentWidthFunc, 100);
    setTimeout(contentWidthFunc, 500);
    setTimeout(contentWidthFunc, 1000);
    setTimeout(contentWidthFunc, 1500);
    setTimeout(contentWidthFunc, 2000);
    setTimeout(contentWidthFunc, 3000);
    setTimeout(contentWidthFunc, 4000);
    setTimeout(contentWidthFunc, 5000);
    setTimeout(contentWidthFunc, 6000);
    setTimeout(contentWidthFunc, 7000);
    setTimeout(contentWidthFunc, 8000);
    setTimeout(contentWidthFunc, 9000);
    setTimeout(contentWidthFunc, 10000);
    $(window).resize(function(){
      contentWidthFunc();
    })

    ///add in seed file, file swap out later for database
    self.seed = [
    {
      title: 'Some Title'
      ,id: 000000001
      ,content: "blah blah blha blah blah blah blha"
      ,author: "Jack"
      ,imgSmall: "http://orig12.deviantart.net/6eee/f/2012/299/b/a/150509_4727155___jpeg__48_kb__400x400__by_bentelshe3r-d5j1z44.jpg"
    },
    {
      title: 'Some Title'
      ,id: 000000002
      ,content: "blah blah blha blah blah blah blha"
      ,author: "Jack"
      ,imgSmall: "http://orig12.deviantart.net/6eee/f/2012/299/b/a/150509_4727155___jpeg__48_kb__400x400__by_bentelshe3r-d5j1z44.jpg"
    },
    {
      title: 'Some Title'
      ,id: 000000003
      ,content: "blah blah blha blah blah blah blha"
      ,author: "Jack"
      ,imgSmall: "http://orig12.deviantart.net/6eee/f/2012/299/b/a/150509_4727155___jpeg__48_kb__400x400__by_bentelshe3r-d5j1z44.jpg"
    },
    {
      title: 'Some Title'
      ,id: 000000004
      ,content: "blah blah blha blah blah blah blha"
      ,author: "Jack"
      ,imgSmall: "http://orig12.deviantart.net/6eee/f/2012/299/b/a/150509_4727155___jpeg__48_kb__400x400__by_bentelshe3r-d5j1z44.jpg"
    }
  ]
  ////////////End of the controller///
  ////////////////////////////////////
  ////////////////////////////////////
  }

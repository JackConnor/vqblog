var app = angular.module('mainPageController', [])

  .controller('mainPageCtrl', mainPageCtrl);

  mainPageCtrl.$inject = ['$http'];

  function mainPageCtrl($http){
    var self = this;

    /////////angular events to do the hover effect
    //////////////////////////////////////////////
    /////////////////////////////////////////////
    var hoverCounterArray = [];

    self.hoverArticle = function(ind){
      if(!hoverCounterArray[ind]){
        $('#homeArticle'+ind).prepend(
          "<div class='linkHolderContainer' id='linkHolderContainer"+ind+"'>"+
          "</div>"
        )
        $('#linkHolderContainer'+ind).prepend(
          "<div class='linkHolder' id='linkHolder"+ind+"'>"+
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
    setTimeout(contentWidthFunc, 10);
    $(window).resize(function(){
      contentWidthFunc();
    })

    ///add in seed file, file swap out later for database
    self.seed = [
    {
      title: 'Some Title'
      ,content: "blah blah blha blah blah blah blha"
      ,author: "Jack"
      ,imgSmall: "http://orig12.deviantart.net/6eee/f/2012/299/b/a/150509_4727155___jpeg__48_kb__400x400__by_bentelshe3r-d5j1z44.jpg"
    },
    {
      title: 'Some Title'
      ,content: "blah blah blha blah blah blah blha"
      ,author: "Jack"
    },
    {
      title: 'Some Title'
      ,content: "blah blah blha blah blah blah blha"
      ,author: "Jack"
    },
    {
      title: 'Some Title'
      ,content: "blah blah blha blah blah blah blha"
      ,author: "Jack"
    }
  ]
  ////////////End of the controller///
  ////////////////////////////////////
  ////////////////////////////////////
  }

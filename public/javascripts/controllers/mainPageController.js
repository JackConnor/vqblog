var app = angular.module('mainPageController', [])

  .controller('mainPageCtrl', mainPageCtrl);

  mainPageCtrl.$inject = ['$http'];

  function mainPageCtrl($http){
    var self = this;
    

    ///add in seed file, file swap out later for database
    self.seed = [
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

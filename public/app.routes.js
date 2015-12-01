angular.module('app.routes', ['ngRoute'])

  .config(appRoutes);

  appRoutes.$inject = ['$routeProvider'];

  function appRoutes($routeProvider){

    $routeProvider

    .when('/', {
      templateUrl: 'templates/_home.html'
      ,controller: 'mainPageCtrl'
      ,controllerAs: 'main'
    })

    .when('/articles/:id', {
      templateUrl: 'templates/_singleArticle.html'
      ,controller: 'articleCtrl'
      ,controllerAs: 'article'
    })

    /////////default to home
    .otherwise('/');

  ////////and of api routes///////
  ////////////////////////////////
  ////////////////////////////////
  }

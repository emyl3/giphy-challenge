angular.module('giphyApp')
       .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
          templateUrl: 'views/random.html',
        }).when('/random', {
          templateUrl: 'views/random.html',
        }).when('/search', {
          templateUrl: 'views/search.html',
        }).when('/favorites', {
          templateUrl: 'views/favorites.html',
        });

        $locationProvider.html5Mode(true);
      });

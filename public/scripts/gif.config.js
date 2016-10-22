angular.module('giphyApp')
       .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
          templateUrl: 'views/random.html',
          controller: 'MainController as ctrl',
        }).when('/home', {
          templateUrl: 'views/random.html',
          controller: 'MainController as ctrl',
        }).when('/random', {
          templateUrl: 'views/random.html',
          controller: 'MainController as ctrl',
        }).when('/search', {
          templateUrl: 'views/search.html',
          controller: 'MainController as ctrl',
        }).when('/favorites', {
          templateUrl: 'views/favorites.html',
          controller: 'FavoritesController as ctrl',
        });

        $locationProvider.html5Mode(true);
      });

'use strict';

angular.module('ngBao', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps'])
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://www.nubs.org/bao/wp-json');
  })
  .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          // key: 'AIzaSyDCm38sMKet1hIkDAx5eGLMMoTweZAy3Bk',
          v: '3.17',
          libraries: 'weather,geometry,visualization'
      });
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;

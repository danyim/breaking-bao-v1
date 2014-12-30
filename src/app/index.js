'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';
import NavbarDir from './shared/directives/navbar.directive';
import AnchorSmoothScrollSvc from './shared/services/anchorSmoothScroll.service';
import WordpressAPISvc from './shared/services/wordpressAPI.service';

var app = angular.module('ngBao', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .directive('ScrollNavbar', NavbarDir)
  .service('AnchorSmoothScrollSvc', AnchorSmoothScrollSvc)
  .service('WordpressAPISvc', WordpressAPISvc)

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

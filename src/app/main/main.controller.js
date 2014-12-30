'use strict';

angular.module('ngBao')
  .controller('MainCtrl', function ($scope, Restangular, uiGmapGoogleMapApi, AnchorSmoothScrollSvc) {
    $scope.posts = Restangular.all('posts').getList();

    // "Agency" Template taken from:
    // http://ironsummitmedia.github.io/startbootstrap-agency/


    // Good example: https://github.com/angular-ui/angular-google-maps/blob/master/example/assets/scripts/controllers/example.js
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 29.8, longitude: -95.4 }, zoom: 10 };
    });

    $scope.gotoElement = function (e) {
      AnchorSmoothScrollSvc.scrollTo(e);
    };
  });

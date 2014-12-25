'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, Restangular, GoogleMapApi) {
    $scope.rest = Restangular.all('posts').get(1);
    $scope.posts = Restangular.all('posts').getList();


    // Good example: https://github.com/angular-ui/angular-google-maps/blob/master/example/assets/scripts/controllers/example.js
    GoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 29.8, longitude: -95.4 }, zoom: 10 };
    });
  }
}

MainCtrl.$inject = ['$scope', 'Restangular', 'uiGmapGoogleMapApi'];

export default MainCtrl;

'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, Restangular) {
    $scope.rest = Restangular.all('posts').get(1);
    $scope.posts = Restangular.all('posts').getList();
  }
}

MainCtrl.$inject = ['$scope', 'Restangular'];

export default MainCtrl;

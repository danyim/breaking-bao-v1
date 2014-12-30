'use strict';
/*jshint esnext: true */

class NavbarCtrl {
  constructor ($scope, $location, AnchorSmoothScrollSvc) {
    $scope.gotoElement = function (e) {
      AnchorSmoothScrollSvc.scrollTo(e);
    };
  }
}

NavbarCtrl.$inject = ['$scope', '$location', 'AnchorSmoothScrollSvc'];

export default NavbarCtrl;

'use strict';

angular.module('ngBao')
  .controller('MainCtrl', function ($scope, Restangular, uiGmapGoogleMapApi, AnchorSmoothScrollSvc, WordpressAPISvc) {
    // $scope.posts = Restangular.all('posts').getList();
    $scope.posts = WordpressAPISvc.getPosts();
    $scope.post = WordpressAPISvc.getPosts(1);

    $scope.menuItems = WordpressAPISvc.getMenuItems().$object;
    $scope.teamMembers = WordpressAPISvc.getTeamMembers().$object;

    $scope.pages = WordpressAPISvc.getPages();
    $scope.page = {
      menu: WordpressAPISvc.getPages(WordpressAPISvc.wpPageIdEnum.menu),
      team: WordpressAPISvc.getPages(WordpressAPISvc.wpPageIdEnum.team),
      locations: WordpressAPISvc.getPages(WordpressAPISvc.wpPageIdEnum.locations),
      about: WordpressAPISvc.getPages(WordpressAPISvc.wpPageIdEnum.about),
      title: WordpressAPISvc.getPages(WordpressAPISvc.wpPageIdEnum.title)
    };

    console.log($scope.pages.$object);
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

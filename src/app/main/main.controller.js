'use strict';

angular.module('ngBao')
  .controller('MainCtrl', function ($scope, Restangular, uiGmapGoogleMapApi, AnchorSmoothScrollSvc, WordpressAPISvc) {
    $scope.page = {
      menu: null,
      team: null,
      locations: null,
      about: null,
      title: null
    };

    // "Agency" Template taken from:
    // http://ironsummitmedia.github.io/startbootstrap-agency/

    WordpressAPISvc.getMenuItems().then(function(menuItems) {
      $scope.menuItems = menuItems;
    });
    WordpressAPISvc.getTeamMembers().then(function(teamMembers) {
      $scope.teamMembers = teamMembers;
    });

    WordpressAPISvc.getPages().then(function(pages) {
      for(var i = 0; i < pages.length; i++) {
        // console.log(pages[i]);
        pages[i].content = $scope.removeParagraphTags(pages[i].content);

        switch(pages[i].ID) {
          case WordpressAPISvc.wpPageIdEnum.title:
            $scope.page.title = pages[i];
            break;
          case WordpressAPISvc.wpPageIdEnum.about:
            $scope.page.about = pages[i];
            break;
          case WordpressAPISvc.wpPageIdEnum.locations:
            $scope.page.locations = pages[i];
            break;
          case WordpressAPISvc.wpPageIdEnum.team:
            $scope.page.team = pages[i];
            break;
          case WordpressAPISvc.wpPageIdEnum.menu:
            $scope.page.menu = pages[i];
            break;
        }
      }
    });

    // Wordpress' post content comes wrapped in a <p> tag by default. This
    // breaks some of the styling (<p> inside <h3> is a smaller font size).
    // This function will remove the start and closing <p> tag from a string.
    $scope.removeParagraphTags = function(str) {
      return str.replace(/^<p>/g, "").replace(/<\/p>(\n)?$/g, "");
    }

    // Good example: https://github.com/angular-ui/angular-google-maps/blob/master/example/assets/scripts/controllers/example.js
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 29.8, longitude: -95.4 }, zoom: 10 };
    });

    $scope.gotoElement = function (e) {
      AnchorSmoothScrollSvc.scrollTo(e);
    };
  });

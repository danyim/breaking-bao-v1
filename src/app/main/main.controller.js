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
      $scope.map = {
        center: { latitude: 29.76, longitude: -95.33 },
        zoom: 12,
        options: {
          // https://developers.google.com/maps/documentation/javascript/reference#MapOptions
          scrollwheel: false,
          streetViewControl: false,
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]}]
        }
      };
    });

    $scope.markerUH = {
      id: 0,
      coords: {
        latitude: 29.7238835,
        longitude: -95.3379349
      },
      options: {
        title: "University of Houston"
      }
    };
    $scope.markerMenil = {
      id: 1,
      coords: {
        latitude: 29.737185,
        longitude: -95.397685
      },
      options: {
        title: "Menil Collection"
      }
    };
    $scope.gotoElement = function (e) {
      AnchorSmoothScrollSvc.scrollTo(e);
    };
  });

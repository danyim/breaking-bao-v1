'use strict';

angular.module('ngBao')
  .service('WordpressAPISvc', function (Restangular) {
    this.wpPageIdEnum = {
      menu: 30,
      team: 32,
      locations: 34,
      about: 41,
      title: 55
    };

    this.getPosts = function(id) {
      if(id) {
        return Restangular.one('posts', id).get();
      }
      else {
        return Restangular.all('posts').getList();
      }
    };

    this.getPages = function(id) {
      if(id) {
        return Restangular.one('pages', id).get();
      }
      else {
        return Restangular.all('pages').getList();
      }
    };

    this.getMenuItems = function() {
      // Menu items are distinguished by the "menu" category. The item's photo is set by
      // adding a feature photo to the post
      return Restangular.all('posts').getList({ 'filter[category_name]': 'menu' });
    };

    this.getTeamMembers = function() {
      // Menu items are distinguished by the "menu" category. The item's photo is set by
      // adding a feature photo to the post
      return Restangular.all('posts').getList({ 'filter[category_name]': 'team-members' });
    };

  });

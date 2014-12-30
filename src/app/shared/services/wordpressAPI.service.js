'use strict';

angular.module('ngBao')
  .service('WordpressAPISvc', function (Restangular) {

    // Totally gonna break
    var getPosts = function() {
      return Restangular.all('posts').getList();
    };
  });

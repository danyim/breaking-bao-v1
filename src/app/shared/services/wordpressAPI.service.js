'use strict';
/*jshint esnext: true */

class WordpressAPISvc {
  constructor (Restangular) {

  }

  getPosts() {
    return Restangular.all('posts').getList();
  }
}

WordpressAPISvc.$inject = ['Restangular'];

export default WordpressAPISvc;

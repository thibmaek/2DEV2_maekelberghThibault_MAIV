'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      file: 'index.html'
    }
  },
  {
    method: 'GET',
    path: '/css/{param*}',
    handler: {
      directory: {
        path: './css'
      }
    }
  },
  {
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
        path: './js'
      }
    }
  },
  {
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: './assets'
      }
    }
  },
  {
    method: 'GET',
    path: '/font/{param*}',
    handler: {
      directory: {
        path: './font'
      }
    }
  },
  {
    method: 'GET',
    path: '/img/{param*}',
    handler: {
      directory: {
        path: './img'
      }
    }
  }
];

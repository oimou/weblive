require.config({
  baseUrl: '',

  paths: {
    'jquery': 'lib/jquery/dist/jquery.min',
    'underscore': 'lib/underscore/underscore',
    'backbone': 'lib/backbone/backbone',
    'mmd': 'lib/MMD.js/MMD',
    'gl-matrix': 'lib/MMD.js/libs/gl-matrix',
    'glMatrixUtils': 'lib/MMD.js/libs/glMatrixUtils',
    'sjis': 'lib/MMD.js/libs/sjis',
    'backbone.iobind': 'lib/backbone.iobind/dist/backbone.iobind.min',
    'backbone.iosync': 'lib/backbone.iobind/dist/backbone.iosync.min',
    'socket.io': '/socket.io/socket.io',
    'uuid': 'lib/node-uuid/uuid'
  },

  shim: {
    'backbone': {
      exports: 'Backbone'
    },

    'mmd': {
      deps: [
        'gl-matrix',
        'glMatrixUtils',
        'sjis'
      ]
    },

    'glMatrixUtils': {
      deps: ['gl-matrix']
    },

    'backbone.iobind': {
      deps: ['backbone', 'backbone.iosync']
    },

    'backbone.iosync': {
      deps: ['backbone']
    }
  },

  include: ['js/main']
})

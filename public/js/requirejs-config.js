require.config({
  baseUrl: '',

  paths: {
    'jquery': 'lib/jquery/dist/jquery.min',
    'underscore': 'lib/underscore/underscore',
    'backbone': 'lib/backbone/backbone',
    'mmd': 'lib/MMD.js/MMD',
    'gl-matrix': 'lib/MMD.js/libs/gl-matrix',
    'glMatrixUtils': 'lib/MMD.js/libs/glMatrixUtils',
    'sjis': 'lib/MMD.js/libs/sjis'
  },

  shim: {
    'mmd': {
      deps: [
        'gl-matrix',
        'glMatrixUtils',
        'sjis'
      ]
    },

    'glMatrixUtils': {
      deps: ['gl-matrix']
    }
  },

  deps: ['backbone'],

  include: ['js/main']
})

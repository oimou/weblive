define(function (require) {
  'use strict';

  require('mmd');

  return Backbone.Model.extend({
    initialize: function () {
      this.ioBind('update', App.socket, this.onUpdateSocket, this);
      this.initMMD();
    },

    initMMD: function () {
      var size = 512
      var canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      canvas.style.border = 'solid black 1px';

      document.body.appendChild(canvas);

      var mmd = new MMD(canvas, canvas.width, canvas.height);
      mmd.initShaders();
      mmd.initParameters();
      mmd.registerKeyListener(document);
      mmd.registerMouseListener(document);

      var miku = new MMD.Model('mmd/LatMiku', 'LatMiku.pmd');
      miku.load(function() {
        mmd.addModel(miku);
        mmd.initBuffers();
        mmd.start();

        var dance = new MMD.Motion('lib/MMD.js/motion/kishimen.vmd');
        dance.load(function() {
          mmd.addModelMotion(miku, dance, true);

          mmd.play()

          setInterval(function() {
            console.log('fps = ' + mmd.realFps);
          }, 1000);
        });
      });
    },

    onUpdateSocket: function (data) {
      console.log(data);
    }
  });
});

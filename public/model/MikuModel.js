define(function (require) {
  'use strict';

  require('mmd');
  require('backbone.iobind');

  return Backbone.Model.extend({
    urlRoot: 'miku',

    initialize: function (attr, param) {
      this.canvas = param.canvas;
      this.initEvent();

      this.ioBind('create', App.socket, this.onCreate, this);
      this.ioBind('update', App.socket, this.onUpdate, this);
      this.initMMD();

      this.onAdd();
    },

    initEvent: function () {
      this.on('change', _(this.onChange).bind(this));
    },

    initMMD: function () {
      var canvas = this.canvas;
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
        });
      });
    },

    onAdd: function () {
      App.socket.emit('miku:create', this.toJSON());
    },

    onChange: function () {
      App.socket.emit('miku:update', this.toJSON());
    },

    onCreate: function (data) {
      console.log(data);
    },

    onUpdate: function (data) {
      console.log(data);
    }
  });
});

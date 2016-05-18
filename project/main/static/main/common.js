var $ = require('jquery');
var mainCommon21 = require('main/common-2');
var baseCommon = require('base/common');

var common = {
  x: 42,

  init: function() {
    this.doTogether();
  },

  doTogether: function() {
    console.log(
      "`main/common` doing calculation together with `base/common`:",
      baseCommon.x + this.x
    );
  }
};

$(function() {
  common.init();
});

module.exports = common;

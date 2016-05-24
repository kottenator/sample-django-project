var $ = require('jquery');
var base = require('base/common');

require('main/common-2');

var common = {
  x: 42,

  init: function() {
    this.doTogether();
  },

  doTogether: function() {
    console.log(
      "`main/common` doing calculation together with `base/common`:",
      base.x + this.x
    );
  }
};

$(function() {
  common.init();
});

module.exports = common;

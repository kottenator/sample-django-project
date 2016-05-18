var $ = require('jquery');

var common = {
  x: 42,
  
  init: function() {
    console.log("`base/common` inited");
  }
};

$(function() {
  common.init();
});

module.exports = common;

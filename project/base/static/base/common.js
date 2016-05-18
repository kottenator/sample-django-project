var $ = require('jquery');

var common = {
  x: 42,
  
  init: function() {
    console.log("`base/common` initialized!");
  }
};

$(function() {
  common.init();
});

module.exports = common;

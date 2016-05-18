project = window.project || {};
project.base = project.base || {};

project.base.plain = {
  x: 42,
  init: function() {
    console.log("`project.base.plain` inited");
  }
};

$(function() {
  project.base.plain.init();
});

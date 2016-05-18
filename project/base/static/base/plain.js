project = window.project || {};
project.base = project.base || {};

project.base.plain = {
  x: 42,
  init: function() {}
};

$(function() {
  project.base.plain.init();
});

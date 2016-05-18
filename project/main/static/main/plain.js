project = window.project || {};
project.main = project.main || {};

project.main.plain = {
  x: 42,

  init: function() {
    this.doTogether();
  },

  doTogether: function() {
    console.log(
      "`project.main.plain` doing calculation together with `project.base.plain`:",
      project.base.plain.x + this.x
    );
  }
};

$(function() {
  project.main.plain.init();
});

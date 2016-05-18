define(['jquery', 'base/amd', 'main/amd-2'], function ($, baseAMD) {
  var amd = {
    x: 42,

    init: function() {
      this.doTogether();
    },

    doTogether: function() {
      console.log(
        "`main/amd` doing calculation together with `base/amd`:",
        baseAMD.x + this.x
      );
    }
  };

  $(function() {
    amd.init();
  });
  
  return amd;
});

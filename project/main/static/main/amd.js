define(['jquery', 'base/amd', 'main/amd-2'], function ($, base) {
  var amd = {
    x: 42,

    init: function() {
      this.doTogether();
    },

    doTogether: function() {
      console.log(
        "`main/amd` doing calculation together with `base/amd`:",
        base.x + this.x
      );
    }
  };

  $(function() {
    amd.init();
  });
  
  return amd;
});

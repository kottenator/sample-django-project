define(['jquery'], function($) {
  var amd = {
    x: 42,
    
    init: function() {
      console.log("`base/amd` inited");
    }
  };
  
  $(function() {
    amd.init();
  });
  
  return amd;
});

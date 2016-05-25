import $ from 'jquery';
import base from 'base/es6';
import 'main/es6-2';

var es6 = {
  x: 42,

  init() {
    this.doTogether();
  },

  doTogether() {
    console.log(
      "`main/es6` doing calculation together with `base/es6`:",
      base.x + this.x
    );
  }
};

$(() => es6.init());

export default es6;

import $ from 'jquery';
import base from 'base/es6';
import 'main/es6-2';

var common = {
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

$(() => common.init());

export default common;

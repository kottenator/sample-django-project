import $ from 'jquery';

var es6 = {
  x: 42,

  init() {
    console.log("`base/es6` initialized!");
  }
};

$(() => es6.init());

export default es6;

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var es6 = {
  x: 42,

  init: function init() {
    console.log("`base/es6` initialized!");
  }
};

(0, _jquery2.default)(function () {
  return es6.init();
});

exports.default = es6;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
'use strict';

var _es = require('base/es6');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_es2.default.x = 43;
console.log('`main/es6-2` has updated `base/es6`.x = 43');

},{"base/es6":1}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _es = require('base/es6');

var _es2 = _interopRequireDefault(_es);

require('main/es6-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var es6 = {
  x: 42,

  init: function init() {
    this.doTogether();
  },
  doTogether: function doTogether() {
    console.log("`main/es6` doing calculation together with `base/es6`:", _es2.default.x + this.x);
  }
};

(0, _jquery2.default)(function () {
  return es6.init();
});

exports.default = es6;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base/es6":1,"main/es6-2":2}]},{},[3]);

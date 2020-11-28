/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/4-animation-main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/4-animation-delay.js":
/*!**********************************!*\
  !*** ./src/4-animation-delay.js ***!
  \**********************************/
/*! exports provided: Timeline, Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _4_timingFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./4-timingFunction */ "./src/4-timingFunction.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // 外部無法 access
// Symbol 可理解為特殊的 string，不會重覆 (唯一性)

var TICK = Symbol("tick");
var TICK_HANDLER = Symbol("tick-handler");
var ANIMATIONS = Symbol("animations");
var START_TIME = Symbol("add-time");
var PAUSE_START = Symbol("pause-start");
var PAUSE_TIME = Symbol("pause-time");
var Timeline = /*#__PURE__*/function () {
  function Timeline() {
    _classCallCheck(this, Timeline);

    // 通常 constructor 做 varaible initial
    this[ANIMATIONS] = new Set();
    this[START_TIME] = new Map();
  }

  _createClass(Timeline, [{
    key: "start",
    value: function start() {
      var _this = this;

      var startTime = Date.now();
      this[PAUSE_TIME] = 0;

      this[TICK] = function () {
        var now = Date.now();

        var _iterator = _createForOfIteratorHelper(_this[ANIMATIONS]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var animation = _step.value;
            var t = void 0;

            if (_this[START_TIME].get(animation < startTime)) {
              t = now - startTime - _this[PAUSE_TIME] - animation.delay;
            } else {
              t = now - _this[START_TIME].get(animation) - _this[PAUSE_TIME] - animation.delay;
            }

            if (animation.duration < t) {
              _this[ANIMATIONS]["delete"](animation);

              t = animation.duration;
            }

            if (t > 0) animation.receive(t);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        _this[TICK_HANDLER] = requestAnimationFrame(_this[TICK]);
      };

      this[TICK](this[TICK_HANDLER]);
    } // set rate() {}
    // get rate() {}

  }, {
    key: "pause",
    value: function pause() {
      this[PAUSE_START] = Date.now();
      cancelAnimationFrame(this[TICK_HANDLER]);
    }
  }, {
    key: "resume",
    value: function resume() {
      this[PAUSE_TIME] += Date.now() - this[PAUSE_START];
      this[TICK]();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.pause();
      var startTime = Date.now();
      this[PAUSE_TIME] = 0;
      this[PAUSE_START] = Date.now();
      this[ANIMATIONS] = new Set();
      this[START_TIME] = new Map();
      this[TICK_HANDLER];
    }
  }, {
    key: "add",
    value: function add(animation, startTime) {
      if (arguments.length < 2) {
        startTime = Date.now();
      }

      this[ANIMATIONS].add(animation);
      this[START_TIME].set(animation, startTime);
    }
  }]);

  return Timeline;
}();
console.log(_4_timingFunction__WEBPACK_IMPORTED_MODULE_0__["linear"]); // 屬性 Animation vs frame animation
// optional: timingFunction

var Animation = /*#__PURE__*/function () {
  function Animation(object, property, startValue, endValue, duration, delay, timingFunction, template) {
    _classCallCheck(this, Animation);

    timingFunction = timingFunction || _4_timingFunction__WEBPACK_IMPORTED_MODULE_0__["linear"];
    template = template || _4_timingFunction__WEBPACK_IMPORTED_MODULE_0__["linear"];
    this.object = object;
    this.property = property;
    this.startValue = startValue;
    this.endValue = endValue;
    this.duration = duration;
    this.timingFunction = timingFunction;
    this.delay = delay;
    this.template = template;
  }

  _createClass(Animation, [{
    key: "receive",
    value: function receive(time) {
      var range = this.endValue - this.startValue; //Bezier curve 0 ~ 1

      var progress = this.timingFunction(time / this.duration);
      this.object[this.property] = this.template(this.startValue + range * progress);
    }
  }]);

  return Animation;
}();

/***/ }),

/***/ "./src/4-animation-main.js":
/*!*********************************!*\
  !*** ./src/4-animation-main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework */ "./src/framework.js");
/* harmony import */ var _7_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./7-carousel */ "./src/7-carousel.js");
/* harmony import */ var _4_animation_delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./4-animation-delay */ "./src/4-animation-delay.js");
/* harmony import */ var _4_timingFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./4-timingFunction */ "./src/4-timingFunction.js");




var data = ["https://picsum.photos/id/100/500/250", "https://picsum.photos/id/200/500/250", "https://picsum.photos/id/300/500/250"];
var a = Object(_framework__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_7_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
  src: data
});
a.mountTo(document.body);
var tl = new _4_animation_delay__WEBPACK_IMPORTED_MODULE_2__["Timeline"]();
tl.add(new _4_animation_delay__WEBPACK_IMPORTED_MODULE_2__["Animation"](document.querySelector("#el").style, "transform", 0, 500, 3000, 0, _4_timingFunction__WEBPACK_IMPORTED_MODULE_3__["easeOut"], function (v) {
  return "translateX(".concat(v, "px)");
}));
document.querySelector("#pause").addEventListener("click", function () {
  return tl.pause();
});
document.querySelector("#resume").addEventListener("click", function () {
  return tl.resume();
});
tl.start();

/***/ }),

/***/ "./src/4-cubicBezier.js":
/*!******************************!*\
  !*** ./src/4-cubicBezier.js ***!
  \******************************/
/*! exports provided: cubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
// source
// 1.
// https://github.com/arian/cubic-bezier/blob/master/index.js
var cubicBezier = function cubicBezier(x1, y1, x2, y2) {
  var ZERO_LIMIT = 1e-6;
  var ax = 3 * x1 - 3 * x2 + 1;
  var bx = 3 * x2 - 6 * x1;
  var cx = 3 * x1;
  var ay = 3 * y1 - 3 * y2 + 1;
  var by = 3 * y2 - 6 * y1;
  var cy = 3 * y1;

  function sampleCurveDerivativeX(t) {
    return (3 * ax * t + 2 * bx) * t + cx;
  }

  function sampleCurveX(t) {
    return ((ax * t + bx) * t + cx) * t;
  }

  function sampleCurveY(t) {
    return ((ay * t + by) * t + cy) * t;
  }

  function solveCurveX(x) {
    var t2 = x;
    var derivative;
    var x2;

    for (var index = 0; index < 8; index++) {
      x2 = sampleCurveX(t2) - x;

      if (Math.abs(x2) < ZERO_LIMIT) {
        return t2;
      }

      derivative = sampleCurveDerivativeX(t2);

      if (Math.abs(derivative) < ZERO_LIMIT) {
        break;
      }

      t2 -= x2 / derivative;
    }

    t1 = 1;
    t0 = 0;
    t2 = x;

    while (t1 > t0) {
      x2 = sampleCurveX(t2) - x;

      if (Math.abs(x2) < ZERO_LIMIT) {
        return t2;
      }

      if (x2 > 0) {
        t1 = t2;
      } else {
        t0 = t2;
      }

      t2 = (t1 + t0) / 2;
    }

    return t2;
  }

  function solve(x) {
    return sampleCurveY(solveCurveX(x));
  }

  return solve;
}; // 2.
// http://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/animation

/***/ }),

/***/ "./src/4-timingFunction.js":
/*!*********************************!*\
  !*** ./src/4-timingFunction.js ***!
  \*********************************/
/*! exports provided: linear, ease, easeIn, easeOut, easeInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ease", function() { return ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony import */ var _4_cubicBezier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./4-cubicBezier */ "./src/4-cubicBezier.js");

var linear = function linear(v) {
  return v;
};
var ease = Object(_4_cubicBezier__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(.25, .1, .25, .1);
var easeIn = Object(_4_cubicBezier__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(.42, .0, 1, 1);
var easeOut = Object(_4_cubicBezier__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(0, 0, .58, 1);
var easeInOut = Object(_4_cubicBezier__WEBPACK_IMPORTED_MODULE_0__["cubicBezier"])(.42, 0, .58, 1);

/***/ }),

/***/ "./src/7-carousel.js":
/*!***************************!*\
  !*** ./src/7-carousel.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework */ "./src/framework.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Carousel = /*#__PURE__*/function (_Component) {
  _inherits(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this);
    _this.attributes = Object.create(null);
    return _this;
  }

  _createClass(Carousel, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.attributes[name] = value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.root = document.createElement("div");
      this.root.classList.add("carousel");

      var _iterator = _createForOfIteratorHelper(this.attributes.src),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var record = _step.value;
          var child = document.createElement('div');
          child.style.backgroundImage = "url('".concat(record, "')");
          this.root.appendChild(child);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var position = 0; // 還需 children 的 getClientRect

      var carouselWidth = 500; // 三個 event 一組

      this.root.addEventListener('mousedown', function (e) {
        var children = _this2.root.children;
        var startX = e.clientX;

        var move = function move(e) {
          var x = e.clientX - startX;
          var current = position - (x - x % carouselWidth) / carouselWidth;

          for (var _i = 0, _arr = [-1, 0, -1]; _i < _arr.length; _i++) {
            var offset = _arr[_i];
            var pos = current + offset; // 避免 negative num (-1 → 3)

            pos = (pos + children.length) % children.length;
            children[pos].style.transition = 'none';
            children[pos].style.transform = "\n                        translateX(".concat(-pos * carouselWidth + offset * carouselWidth + (carouselWidth + x % carouselWidth), "px)\n                    ");
          }
        };

        var up = function up(e) {
          var x = e.clientX - startX; // drag 超過一半，到下一張

          position = position - Math.round(x / carouselWidth);
          console.log(position);

          for (var _i2 = 0, _arr2 = [0, -Math.sign(Math.round(x / carouselWidth) - x + carouselWidth / 2 * Math.sign(x))]; _i2 < _arr2.length; _i2++) {
            var offset = _arr2[_i2];
            var pos = position + offset;
            console.log('offset', offset); // 避免 negative num (-1 → 3)

            pos = (pos + children.length) % children.length;
            children[pos].style.transition = '';
            children[pos].style.transform = "translateX(".concat(-pos * carouselWidth + offset * carouselWidth, "px)");
          } // mouseup 時將 mouseup/mousemove disable


          document.removeEventListener('mousemove', move);
          document.removeEventListener('mouseup', up);
        };

        document.addEventListener('mouseup', up);
        document.addEventListener('mousemove', move);
      });
      return this.root;
    }
  }, {
    key: "mountTo",
    value: function mountTo(parent) {
      parent.appendChild(this.render());
    }
  }]);

  return Carousel;
}(_framework__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./src/framework.js":
/*!**************************!*\
  !*** ./src/framework.js ***!
  \**************************/
/*! exports provided: createElement, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function createElement(type, attributes) {
  var el;

  if (typeof type === 'string') {
    el = new ElementWrapper(type);
  } else {
    el = new type();
  } // obj


  for (var name in attributes) {
    el.setAttribute(name, attributes[name]);
  } // array


  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  for (var _i = 0, _children = children; _i < _children.length; _i++) {
    var child = _children[_i];

    if (typeof child === 'string') {
      // child = document.createTextNode(child)
      child = new TextWrapper(child);
    }

    el.appendChild(child);
  }

  return el;
}
var Component = /*#__PURE__*/function () {
  function Component(type) {// this.root = this.render();

    _classCallCheck(this, Component);
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.root.setAttribute(name, value);
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      child.mountTo(this.root);
    }
  }, {
    key: "mountTo",
    value: function mountTo(parent) {
      parent.appendChild(this.root);
    }
  }]);

  return Component;
}();

var ElementWrapper = /*#__PURE__*/function (_Component) {
  _inherits(ElementWrapper, _Component);

  var _super = _createSuper(ElementWrapper);

  function ElementWrapper(type) {
    var _this;

    _classCallCheck(this, ElementWrapper);

    _this.root = document.createElement(type);
    return _possibleConstructorReturn(_this);
  }

  return ElementWrapper;
}(Component);

var TextWrapper = /*#__PURE__*/function (_Component2) {
  _inherits(TextWrapper, _Component2);

  var _super2 = _createSuper(TextWrapper);

  function TextWrapper(content) {
    var _this2;

    _classCallCheck(this, TextWrapper);

    _this2.root = document.createTextNode(content);
    return _possibleConstructorReturn(_this2);
  }

  return TextWrapper;
}(Component);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
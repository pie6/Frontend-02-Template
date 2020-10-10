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
/******/ 	return __webpack_require__(__webpack_require__.s = "./1/1-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./1/1-index.js":
/*!**********************!*\
  !*** ./1/1-index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework */ "./1/framework.js");
/* harmony import */ var _7_gesture_encapsulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./7-gesture-encapsulation */ "./1/7-gesture-encapsulation.js");
/* harmony import */ var _4_animation_delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./4-animation-delay */ "./1/4-animation-delay.js");
/* harmony import */ var _4_timingFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./4-timingFunction */ "./1/4-timingFunction.js");
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

      Object(_7_gesture_encapsulation__WEBPACK_IMPORTED_MODULE_1__["enableGesture"])(this.root);
      var children = this.root.children;
      var imgW = 500;
      var timeline = new _4_animation_delay__WEBPACK_IMPORTED_MODULE_2__["Timeline"]();
      timeline.start(); // 使用 local variable 做 state

      var t = 0;
      var position = 0;
      var handler = null; // Animation 產生的距離

      var ax = 0;
      this.root.addEventListener("start", function (e) {
        timeline.pause();
        clearInterval(handler);
        var progress = (Date.now() - t) / 1500;
        ax = Object(_4_timingFunction__WEBPACK_IMPORTED_MODULE_3__["ease"])(progress) * imgW - imgW;
      });
      this.root.addEventListener("pan", function (e) {
        var x = e.clientX - e.startX - ax;
        var current = position - (x - x % imgW) / imgW;

        for (var _i = 0, _arr = [-1, 0, -1]; _i < _arr.length; _i++) {
          var offset = _arr[_i];
          var pos = current + offset;
          pos = (pos % children.length + children.length) % children.length;
          children[pos].style.transition = 'none';
          children[pos].style.transform = "\n                    translateX(".concat(-pos * imgW + offset * imgW + x % imgW, "px)\n                ");
        }
      });
      this.root.addEventListener("end", function (e) {
        timeline.reset();
        timeline.start();
        handler = setInterval(nextPicture, 3000);
        var x = e.clientX - e.startX - ax;
        var current = position - (x - x % imgW) / imgW;
        var direction = Math.round(x % 500 / 500);

        if (e.isFlick) {
          if (e.velocity < 0) {
            direction = Math.ceil(x % 500 / 500);
          } else {
            direction = Math.floor(x % 500 / 500);
          }
        }

        for (var _i2 = 0, _arr2 = [-1, 0, -1]; _i2 < _arr2.length; _i2++) {
          var offset = _arr2[_i2];
          var pos = current + offset;
          pos = (pos % children.length + children.length) % children.length;
          timeline.add(new _4_animation_delay__WEBPACK_IMPORTED_MODULE_2__["Animation"](children[pos].style, "transform", -pos * imgW + offset * imgW + (imgW + x % imgW), -pos * imgW + offset * imgW + direction * imgW, 500, 0, _4_timingFunction__WEBPACK_IMPORTED_MODULE_3__["ease"], function (v) {
            return "translateX(".concat(v, "px)");
          }));
        }

        position = position - (x - x % 500) / 500 - direction;
        position = (position % children.length + children.length) % children.length;
      });

      var nextPicture = function nextPicture() {
        var children = _this2.root.children;
        var nextIndex = (position + 1) % children.length;
        var current = children[position];
        var next = children[nextIndex]; // Animation 產生的距離

        t = Date.now();
        timeline.add(new _4_animation_delay__WEBPACK_IMPORTED_MODULE_2__["Animation"](current.style, "transform", -position * 500, -500 - position * 500, 500, 0, _4_timingFunction__WEBPACK_IMPORTED_MODULE_3__["ease"], function (v) {
          return "translateX(".concat(v, "px)");
        }));
        timeline.add(new _4_animation_delay__WEBPACK_IMPORTED_MODULE_2__["Animation"](next.style, "transform", 500 - nextIndex * 500, -nextIndex * 500, 0, _4_timingFunction__WEBPACK_IMPORTED_MODULE_3__["ease"], function (v) {
          return "translateX(".concat(v, "px)");
        }));
        position = nextIndex;
      };

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

var data = ["https://fakeimg.pl/500x250/ff0000/?text=1", "https://fakeimg.pl/500x250/00ff00/?text=2", "https://fakeimg.pl/500x250/0000ff/?text=3"];
var a = Object(_framework__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Carousel, {
  src: data
});
a.mountTo(document.body);

/***/ }),

/***/ "./1/4-animation-delay.js":
/*!********************************!*\
  !*** ./1/4-animation-delay.js ***!
  \********************************/
/*! exports provided: Timeline, Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _4_timingFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./4-timingFunction */ "./1/4-timingFunction.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var TICK = Symbol("tick");
var TICK_HANDLER = Symbol("tick-handler");
var ANIMATIONS = Symbol("animations");
var START_TIME = Symbol("add-time");
var PAUSE_START = Symbol("pause-start");
var PAUSE_TIME = Symbol("pause-time");
var Timeline = /*#__PURE__*/function () {
  function Timeline() {
    _classCallCheck(this, Timeline);

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
    }
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
      var range = this.endValue - this.startValue;
      var progress = this.timingFunction(time / this.duration);
      this.object[this.property] = this.template(this.startValue + range * progress);
    }
  }]);

  return Animation;
}();

/***/ }),

/***/ "./1/4-timingFunction.js":
/*!*******************************!*\
  !*** ./1/4-timingFunction.js ***!
  \*******************************/
/*! exports provided: linear, ease, easeIn, easeOut, easeInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ease", function() { return ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
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
    var t1;
    var t0;

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
};

var linear = function linear(v) {
  return v;
};
var ease = cubicBezier(.25, .1, .25, .1);
var easeIn = cubicBezier(.42, .0, 1, 1);
var easeOut = cubicBezier(0, 0, .58, 1);
var easeInOut = cubicBezier(.42, 0, .58, 1);

/***/ }),

/***/ "./1/7-gesture-encapsulation.js":
/*!**************************************!*\
  !*** ./1/7-gesture-encapsulation.js ***!
  \**************************************/
/*! exports provided: Listener, Recognizer, Dispatcher, enableGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listener", function() { return Listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recognizer", function() { return Recognizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableGesture", function() { return enableGesture; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// new Listener(new Recognizer(dispatch))
var Listener = function Listener(el, recognizer) {
  _classCallCheck(this, Listener);

  var contexts = new Map();
  var isListeningMouse = false;
  el.addEventListener('mousedown', function (e) {
    var context = Object.create(null);
    contexts.set('mouse' + (1 << e.button), context);
    recognizer.start(e, context);

    var mouseMove = function mouseMove(e) {
      var button = 1;

      while (button <= e.buttons) {
        // mouse center/ right 相反
        if (button & e.buttons) {
          var key = void 0;

          if (button === 2) {
            key = 4;
          } else if (button === 4) {
            key = 2;
          } else {
            key = button;
          }

          var _context = contexts.get('mouse' + key); // console.log('move', (button))


          recognizer.move(e, _context);
        }

        button = button << 1;
      }
    };

    var mouseUp = function mouseUp(e) {
      var context = contexts.get('mouse' + (1 << e.button));
      recognizer.end(e, context);
      contexts["delete"]();

      if (e.buttons === 0) {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
        isListeningMouse = false;
      }
    };

    if (!isListeningMouse) {
      document.addEventListener('mousemove', mouseMove);
      document.addEventListener('mouseup', mouseUp);
      isListeningMouse = true;
    }
  });
  el.addEventListener('touchstart', function (e) {
    var _iterator = _createForOfIteratorHelper(e.changedTouches),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var touch = _step.value;
        var context = Object.create(null);
        contexts.set(touch.identifier, context);
        recognizer.start(touch, context);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  el.addEventListener('touchmove', function (e) {
    var _iterator2 = _createForOfIteratorHelper(e.changedTouches),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var touch = _step2.value;
        var context = contexts.get(touch.identifier);
        recognizer.move(touch, context);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  el.addEventListener('touchend', function (e) {
    var _iterator3 = _createForOfIteratorHelper(e.changedTouches),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var touch = _step3.value;
        var context = contexts.get(touch.identifier);
        recognizer.end(touch, context);
        contexts["delete"](touch.identifier);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  el.addEventListener('touchcancel', function (e) {
    var _iterator4 = _createForOfIteratorHelper(e.changedTouches),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var touch = _step4.value;
        recognizer.cancel(touch);
        contexts["delete"](touch.identifier);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
};
var Recognizer = /*#__PURE__*/function () {
  function Recognizer(dispatcher) {
    _classCallCheck(this, Recognizer);

    this.dispatcher = dispatcher;
  }

  _createClass(Recognizer, [{
    key: "start",
    value: function start(point, context) {
      var _this = this;

      context.startX = point.clientX;
      context.startY = point.clientY;
      this.dispatcher.dispatch('start', {
        clientX: point.clientX,
        clientY: point.clientY
      });
      context.points = [{
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
      }];
      context.isTap = true;
      context.isPress = false;
      context.isPan = false;
      context.handler = setTimeout(function () {
        context.isTap = false;
        context.isPress = true;
        context.isPan = false;
        context.handler = null;

        _this.dispatcher.dispatch('press', {});
      }, 500);
    }
  }, {
    key: "move",
    value: function move(point, context) {
      var dx = point.clientX - context.startX;
      var dy = point.clientY - context.startY;

      if (!context.isPan && Math.pow(dx, 2) + Math.pow(dy, 2) > 100) {
        context.isTap = false;
        context.isPan = true;
        context.isPress = false;
        context.isPan = true;
        context.isVertical = Math.abs(dx) < Math.abs(dy);
        this.dispatcher.dispatch('panstart', {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical
        });
        clearTimeout(context.handler);
      }

      if (context.isPan) {
        this.dispatcher.dispatch('pan', {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical
        });
      }

      context.points = context.points.filter(function (point) {
        return Date.now() - point.t < 500;
      });
      context.points.push({
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
      });
    }
  }, {
    key: "end",
    value: function end(point, context) {
      if (context.isTap) {
        clearTimeout(context.handler);
        this.dispatcher.dispatch('tap');
      }

      if (context.isPress) {
        this.dispatcher.dispatch('pressend', {});
      }

      context.points = context.points.filter(function (item) {
        return Date.now() - item.t < 500;
      });
      var distance, velocity;

      if (!context.points.length > 0) {
        velocity = 0;
      } else {
        distance = Math.sqrt(Math.pow(point.clientX - context.points[0].x, 2) + Math.pow(point.clientY - context.points[0].y, 2));
        velocity = distance / (Date.now() - context.points[0].t); // console.log('velocity', velocity)
      } // velocity unit: pixel/ms


      if (velocity > 1.5) {
        this.dispatcher.dispatch('flick', {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical,
          velocity: velocity
        });
        context.isFlick = true;
      } else {
        context.isFlick = false;
      }

      if (context.isPan) {
        this.dispatcher.dispatch('panend', {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical,
          isFlick: context.isFlick,
          velocity: velocity
        });
      }

      this.dispatcher.dispatch('end', {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        isVertical: context.isVertical,
        isFlick: context.isFlick,
        velocity: velocity
      });
    }
  }, {
    key: "cancel",
    value: function cancel(point, context) {
      clearTimeout(context.handler);
      this.dispatcher.dispatch('cancel', {});
    }
  }]);

  return Recognizer;
}();
var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher(el) {
    _classCallCheck(this, Dispatcher);

    this.el = el;
  }

  _createClass(Dispatcher, [{
    key: "dispatch",
    value: function dispatch(type, properties) {
      var event = new Event(type);

      for (var name in properties) {
        event[name] = properties[name];
      }

      this.el.dispatchEvent(event);
    }
  }]);

  return Dispatcher;
}();
function enableGesture(el) {
  new Listener(el, new Recognizer(new Dispatcher(el)));
}

/***/ }),

/***/ "./1/framework.js":
/*!************************!*\
  !*** ./1/framework.js ***!
  \************************/
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
//# sourceMappingURL=1-index.js.map
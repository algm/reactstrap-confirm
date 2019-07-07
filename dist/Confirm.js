"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash.defaults"));

var _reactDom = require("react-dom");

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("./components/Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Confirm =
/*#__PURE__*/
function () {
  function Confirm(options) {
    _classCallCheck(this, Confirm);

    this.options = (0, _lodash["default"])(options, {
      message: 'Are you sure?',
      title: 'Warning!',
      confirmText: 'Ok',
      cancelText: 'Cancel',
      confirmColor: 'primary',
      cancelColor: ''
    });
    this.el = document.createElement('div');
  }

  _createClass(Confirm, [{
    key: "open",
    value: function open() {
      var _this = this;

      var confirmPromise = new Promise(function (resolve) {
        (0, _reactDom.render)(_react["default"].createElement(_Modal["default"], _extends({}, _this.options, {
          onClose: function onClose(result) {
            resolve(result);
          }
        })), _this.el);
      });
      return confirmPromise;
    }
  }]);

  return Confirm;
}();

exports["default"] = Confirm;
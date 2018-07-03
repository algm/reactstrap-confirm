"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confirm;

var _Confirm = require("./Confirm");

var _Confirm2 = _interopRequireDefault(_Confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function confirm() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var instance = new _Confirm2.default(options);

  return instance.open();
}
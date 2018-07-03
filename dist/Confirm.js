'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash.defaults');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Confirm = function () {
    function Confirm(options) {
        _classCallCheck(this, Confirm);

        this.options = (0, _lodash2.default)(options, {
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
        key: 'open',
        value: function open() {
            var _this = this;

            var confirmPromise = new Promise(function (resolve) {
                (0, _reactDom.render)(_react2.default.createElement(_Modal2.default, _extends({}, _this.options, {
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

exports.default = Confirm;
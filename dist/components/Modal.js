"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ConfirmModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ConfirmModal, _Component);

  function ConfirmModal(props) {
    var _this;

    _classCallCheck(this, ConfirmModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfirmModal).call(this, props));
    _this.state = {
      modalOpen: true
    };
    _this.confirm = _this.confirm.bind(_assertThisInitialized(_this));
    _this.cancel = _this.cancel.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ConfirmModal, [{
    key: "toggle",
    value: function toggle() {
      var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.setState({
        modalOpen: !this.state.modalOpen
      });

      if (typeof this.props.onClose === 'function') {
        this.props.onClose(result);
      }
    }
  }, {
    key: "confirm",
    value: function confirm() {
      this.toggle(true);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.toggle(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          message = _this$props.message,
          title = _this$props.title,
          confirmText = _this$props.confirmText,
          cancelText = _this$props.cancelText,
          confirmColor = _this$props.confirmColor,
          cancelColor = _this$props.cancelColor,
          className = _this$props.className;
      var modalHeader = null;
      var cancelButton = null;

      if (title) {
        modalHeader = _react["default"].createElement(_reactstrap.ModalHeader, {
          toggle: function toggle() {
            _this2.toggle(false);
          }
        }, title);
      }

      if (cancelText) {
        cancelButton = _react["default"].createElement(_reactstrap.Button, {
          color: cancelColor,
          onClick: this.cancel
        }, cancelText);
      }

      return _react["default"].createElement(_reactstrap.Modal, {
        isOpen: this.state.modalOpen,
        toggle: function toggle() {
          _this2.toggle(false);
        },
        className: className
      }, modalHeader, _react["default"].createElement(_reactstrap.ModalBody, null, message), _react["default"].createElement(_reactstrap.ModalFooter, null, cancelButton, ' ', _react["default"].createElement(_reactstrap.Button, {
        color: confirmColor,
        onClick: this.confirm
      }, confirmText)));
    }
  }]);

  return ConfirmModal;
}(_react.Component);

exports["default"] = ConfirmModal;
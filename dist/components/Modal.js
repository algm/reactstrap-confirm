'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmModal = function (_Component) {
    _inherits(ConfirmModal, _Component);

    function ConfirmModal(props) {
        _classCallCheck(this, ConfirmModal);

        var _this = _possibleConstructorReturn(this, (ConfirmModal.__proto__ || Object.getPrototypeOf(ConfirmModal)).call(this, props));

        _this.state = {
            modalOpen: true
        };

        _this.confirm = _this.confirm.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        return _this;
    }

    _createClass(ConfirmModal, [{
        key: 'toggle',
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
        key: 'confirm',
        value: function confirm() {
            this.toggle(true);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.toggle(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                message = _props.message,
                title = _props.title,
                confirmText = _props.confirmText,
                cancelText = _props.cancelText,
                confirmColor = _props.confirmColor,
                cancelColor = _props.cancelColor,
                className = _props.className;


            var modalHeader = null;
            var cancelButton = null;

            if (title) {
                modalHeader = _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    { toggle: this.toggle },
                    title
                );
            }

            if (cancelText) {
                cancelButton = _react2.default.createElement(
                    _reactstrap.Button,
                    { color: cancelColor, onClick: this.cancel },
                    cancelText
                );
            }

            return _react2.default.createElement(
                _reactstrap.Modal,
                { isOpen: this.state.modalOpen, className: className },
                modalHeader,
                _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    message
                ),
                _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    cancelButton,
                    ' ',
                    _react2.default.createElement(
                        _reactstrap.Button,
                        { color: confirmColor, onClick: this.confirm },
                        confirmText
                    )
                )
            );
        }
    }]);

    return ConfirmModal;
}(_react.Component);

exports.default = ConfirmModal;
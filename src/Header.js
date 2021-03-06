'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import classnames from 'classnames';

var e = React.createElement;

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            page: 'info'
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var galleryClasses = classnames('nav_button', this.state.page == 'gallery' && 'current');
            var orderClasses = classnames('nav_button', this.state.page == 'order' && 'current');
            var infoClasses = classnames('nav_button', this.state.page == 'info' && 'current');
            return React.createElement(
                'nav',
                null,
                React.createElement(
                    'a',
                    { className: 'nav_button', href: 'index.html' },
                    'Forside'
                ),
                React.createElement(
                    'a',
                    { className: galleryClasses, href: 'gallery.html' },
                    'Galleri'
                ),
                React.createElement(
                    'a',
                    { className: orderClasses, href: 'order.html' },
                    'Bestilling'
                ),
                React.createElement(
                    'a',
                    { className: infoClasses, href: 'info.html' },
                    'Info'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var domContainer = document.querySelector('#main_header');
ReactDOM.render(e(Header), domContainer);
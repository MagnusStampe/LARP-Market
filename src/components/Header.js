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
            page: '',
            expanded: false
        }, _this.navClasses = function (navPage) {
            var page = _this.state.page;
            return classnames('nav_button', page === navPage && 'current');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Header, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var pageName = document.querySelector("body").id;
            this.setState({ page: pageName });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var expanded = this.state.expanded,
                navClasses = this.navClasses;


            var expandedClass = classnames(expanded && 'expanded');

            return React.createElement(
                'div',
                {
                    className: expandedClass },
                React.createElement(
                    'button',
                    {
                        id: 'burger_menu_button',
                        onClick: function onClick() {
                            return _this2.setState({ expanded: !_this2.state.expanded });
                        } },
                    React.createElement('span', null),
                    React.createElement('span', null),
                    React.createElement('span', null)
                ),
                React.createElement('div', { 'class': 'close_menu',
                    onClick: function onClick() {
                        return _this2.setState({ expanded: false });
                    } }),
                React.createElement(
                    'nav',
                    null,
                    React.createElement(
                        'a',
                        { className: navClasses('index'), href: 'index.html' },
                        'Forside'
                    ),
                    React.createElement(
                        'a',
                        { className: navClasses('gallery'), href: 'gallery.html' },
                        'Portfolio'
                    ),
                    React.createElement(
                        'a',
                        { className: navClasses('order'), href: 'order.html' },
                        'Bestilling'
                    ),
                    React.createElement(
                        'a',
                        { className: navClasses('prices'), href: 'prices.html' },
                        'Priser'
                    ),
                    React.createElement(
                        'a',
                        { className: navClasses('info'), href: 'info.html' },
                        'Info'
                    )
                ),
                React.createElement('div', { className: 'header_logo' })
            );
        }
    }]);

    return Header;
}(React.Component);

var domContainer = document.querySelector('#main_header');
ReactDOM.render(e(Header), domContainer);
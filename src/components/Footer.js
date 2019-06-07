'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "wrapper" },
                React.createElement("div", { className: "footer_logo" }),
                React.createElement(
                    "nav",
                    { className: "nav_pages" },
                    React.createElement(
                        "a",
                        { href: "index.html" },
                        "Forside"
                    ),
                    React.createElement(
                        "a",
                        { href: "gallery.html" },
                        "Portfolio"
                    ),
                    React.createElement(
                        "a",
                        { href: "order.html" },
                        "Bestilling"
                    ),
                    React.createElement(
                        "a",
                        { href: "prices.html" },
                        "Priser"
                    ),
                    React.createElement(
                        "a",
                        { href: "info.html" },
                        "Info"
                    )
                ),
                React.createElement(
                    "nav",
                    { className: "nav_some" },
                    React.createElement(
                        "a",
                        { href: "https://www.facebook.com/larpmarketdk" },
                        React.createElement("div", { className: "logo facebook" }),
                        React.createElement(
                            "p",
                            null,
                            "www.facebook.com/larpmarketdk"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "mailto:kontakt@larp-market.dk" },
                        React.createElement("div", { className: "logo mail" }),
                        React.createElement(
                            "p",
                            null,
                            "kontakt@larp-market.dk"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "tel:+4523660530" },
                        React.createElement("div", { className: "logo tele" }),
                        React.createElement(
                            "p",
                            null,
                            "+45 23 66 05 30"
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var domContainer = document.querySelector('#main_footer');
ReactDOM.render(e(Footer), domContainer);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var InfoBox = function (_React$Component) {
    _inherits(InfoBox, _React$Component);

    function InfoBox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InfoBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfoBox.__proto__ || Object.getPrototypeOf(InfoBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            json: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InfoBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch('https://larp-market.dk/wordpress/wp-json/acf/v3/info').then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this2.setState({ json: data });
            });
        }
    }, {
        key: 'htmlDecode',
        value: function htmlDecode(input) {
            var e = document.createElement('div');
            e.innerHTML = input;
            console.log(e);
            return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (!Array.isArray(this.state.json)) {
                return null;
            }

            return React.createElement(
                'div',
                null,
                this.state.json.map(function (post) {
                    return React.createElement(
                        'div',
                        { key: post.id, id: 'subjects_container' },
                        console.log(_this3.htmlDecode(post.acf.text)),
                        React.createElement(
                            'h2',
                            { className: 'sub_header' },
                            post.acf.headline
                        ),
                        React.createElement(
                            'div',
                            { className: 'sub_description' },
                            unescape(post.acf.text)
                        )
                    );
                })
            );
        }
    }]);

    return InfoBox;
}(React.Component);

var domContainer = document.querySelector('#info_box');
ReactDOM.render(e(InfoBox), domContainer);
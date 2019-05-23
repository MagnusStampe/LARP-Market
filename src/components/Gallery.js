var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Components
import GalleryItem from './GalleryItem';
import LoadSymbol from './LoadSymbol';

'use strict';

var e = React.createElement;

var Gallery = function (_React$Component) {
    _inherits(Gallery, _React$Component);

    function Gallery() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Gallery);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            json: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Gallery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch('https://larp-market.dk/wordpress/wp-json/acf/v3/gallery').then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this2.setState({ json: data });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.state.json);
            return React.createElement(
                'div',
                { 'class': 'items_container' },
                Array.isArray(this.state.json) ? this.state.json.map(function (item) {
                    return React.createElement(GalleryItem, { key: item.id, data: item.acf });
                }) : React.createElement(LoadSymbol, null)
            );
        }
    }]);

    return Gallery;
}(React.Component);

var domContainer = document.querySelector('#gallery_items');
ReactDOM.render(e(Gallery), domContainer);
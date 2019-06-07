var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import classnames from 'classnames';

'use strict';

var e = React.createElement;

var Showcase = function (_React$Component) {
    _inherits(Showcase, _React$Component);

    function Showcase() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Showcase);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Showcase.__proto__ || Object.getPrototypeOf(Showcase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentShowcase: 'latex'
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Showcase, [{
        key: 'render',
        value: function render() {
            var showcaseButtons = this.showcaseButtons,
                showcaseText = this.showcaseText,
                showcaseGallery = this.showcaseGallery;


            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'Hvad tilbyder vi?'
                ),
                showcaseButtons,
                React.createElement(
                    'div',
                    { className: 'content' },
                    showcaseText,
                    showcaseGallery
                )
            );
        }
    }, {
        key: 'showcaseButtons',
        get: function get() {
            var _this2 = this;

            var currentShowcase = this.state.currentShowcase;

            return React.createElement(
                'nav',
                { className: 'showcase_nav' },
                React.createElement(
                    'button',
                    {
                        className: currentShowcase == 'latex' && 'current',
                        onClick: function onClick() {
                            _this2.setState({ currentShowcase: 'latex' });
                        } },
                    'Latexv\xE5ben'
                ),
                React.createElement(
                    'button',
                    {
                        className: currentShowcase == 'leather' && 'current',
                        onClick: function onClick() {
                            _this2.setState({ currentShowcase: 'leather' });
                        } },
                    'L\xE6derudstyr'
                ),
                React.createElement(
                    'button',
                    {
                        className: currentShowcase == 'wood' && 'current',
                        onClick: function onClick() {
                            _this2.setState({ currentShowcase: 'wood' });
                        } },
                    'Tr\xE6 arbejde'
                ),
                React.createElement(
                    'button',
                    {
                        className: currentShowcase == 'other' && 'current',
                        onClick: function onClick() {
                            _this2.setState({ currentShowcase: 'other' });
                        } },
                    'Kulisser og gyffer'
                )
            );
        }
    }, {
        key: 'showcaseText',
        get: function get() {
            var currentShowcase = this.state.currentShowcase;


            switch (currentShowcase) {
                default:
                case 'latex':
                    return React.createElement(
                        'div',
                        { className: 'description' },
                        React.createElement(
                            'p',
                            null,
                            'Vi fremstiller alle vores latex v\xE5ben fra bunden. Vi bruger den bedste skum til hver enkelt produkt.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Kernen best\xE5r af glasfiber s\xE5 vores v\xE5ben er flexible og st\xE6rke.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Mulighederne er mange, vi fremstiller produktet lige som du \xF8nsker.',
                            React.createElement('br', null),
                            'Vi finder frem til den bedste l\xF8sning i t\xE6t samarbejde med dig.'
                        )
                    );
                case 'leather':
                    return React.createElement(
                        'div',
                        { className: 'description' },
                        React.createElement(
                            'p',
                            null,
                            'Vi fremstiller gerne l\xE6derudstyr efter dine \xF8nsker.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Eksempler:'
                        ),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                'li',
                                null,
                                'Rustninger.'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Skulder panser.'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Arm/benskinner.'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Fuldskeder/halvskeder.'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'B\xE6lter/tasker.'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Med mere.'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Kun din fantasi s\xE6tter gr\xE6nser for hvad vi kan fremstille.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Vi tilbyder ogs\xE5 at reparer brugt l\xE6der udstyr eller ombygge det s\xE5 det passer perfekt til din karakter.'
                        )
                    );
                case 'wood':
                    return React.createElement(
                        'div',
                        { className: 'description' },
                        React.createElement(
                            'p',
                            null,
                            'Vi kan fremstille forskellige ting i tr\xE6.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Kom med forslag og vi er klar til at tage udfordringen op.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Eksempler:'
                        ),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                'li',
                                null,
                                'V\xE5ben holder.'
                            ),
                            React.createElement(
                                'li',
                                null,
                                'Skr\xE5 2delt stol.'
                            )
                        )
                    );
                case 'other':
                    return React.createElement(
                        'div',
                        { className: 'description' },
                        React.createElement(
                            'p',
                            null,
                            'Vi fremstiller gerne special ting:'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Kom med din ide og lad os tage udfordringen op.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Eksempler:'
                        ),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                'li',
                                null,
                                'Rune sten.'
                            )
                        )
                    );
            }
        }
    }, {
        key: 'showcaseGallery',
        get: function get() {
            var currentShowcase = this.state.currentShowcase;


            var galleryClasses = classnames("gallery", currentShowcase);

            return React.createElement('div', { className: galleryClasses });
        }
    }]);

    return Showcase;
}(React.Component);

var domContainer = document.querySelector('#order_showcase');
ReactDOM.render(e(Showcase), domContainer);
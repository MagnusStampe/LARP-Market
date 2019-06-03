var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import react, { Component } from 'react';
import PropTypes from 'prop-types';

'use strict';

var GalleryMenu = function (_Component) {
    _inherits(GalleryMenu, _Component);

    function GalleryMenu() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GalleryMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GalleryMenu.__proto__ || Object.getPrototypeOf(GalleryMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            searchSortForNew: true,
            latexChecked: false,
            leatherChecked: false,
            woodChecked: false,
            divChecked: false
        }, _this.newFilters = function (type) {
            var _this$state = _this.state,
                latexChecked = _this$state.latexChecked,
                leatherChecked = _this$state.leatherChecked,
                woodChecked = _this$state.woodChecked,
                divChecked = _this$state.divChecked;


            var allFilters = void 0;

            switch (type) {
                default:
                case 'latex':
                    allFilters = [latexChecked === false && 'latex', leatherChecked === true && 'leather', woodChecked === true && 'wood', divChecked === true && 'div'];
                    return allFilters.filter(Boolean);
                case 'leather':
                    allFilters = [latexChecked === true && 'latex', leatherChecked === false && 'leather', woodChecked === true && 'wood', divChecked === true && 'div'];
                    return allFilters.filter(Boolean);
                case 'wood':
                    allFilters = [latexChecked === true && 'latex', leatherChecked === true && 'leather', woodChecked === false && 'wood', divChecked === true && 'div'];
                    return allFilters.filter(Boolean);
                case 'div':
                    allFilters = [latexChecked === true && 'latex', leatherChecked === true && 'leather', woodChecked === true && 'wood', divChecked === false && 'div'];
                    return allFilters.filter(Boolean);
            }
        }, _this.handleCheck = function (type) {
            var _this2 = _this,
                state = _this2.state,
                filtersCallback = _this2.props.filtersCallback,
                newFilters = _this2.newFilters;

            _this.setState(_defineProperty({}, type + "Checked", !state[type + "Checked"]));

            filtersCallback(newFilters(type));
        }, _this.checkbox = function (type) {
            return React.createElement('input', {
                type: 'checkbox',
                className: 'filter_checkbox',
                value: type,
                onChange: function onChange() {
                    return _this.handleCheck(type);
                },
                id: "cb_" + type });
        }, _this.checkboxLabel = function (type, danish) {
            return React.createElement(
                'label',
                {
                    htmlFor: "cb_" + type },
                danish,
                React.createElement(
                    'div',
                    { className: 'checkbox' },
                    React.createElement('div', { className: 'check' })
                )
            );
        }, _this.handleRadioButtonChange = function () {
            var _this3 = _this,
                searchSortForNew = _this3.state.searchSortForNew,
                sortCallback = _this3.props.sortCallback;


            _this.setState({ searchSortForNew: !searchSortForNew });
            console.log(searchSortForNew);
            sortCallback(!searchSortForNew);
        }, _this.radioButton = function (type) {
            return React.createElement('input', {
                type: 'radio',
                name: 'radio_added',
                value: type,
                id: "rb_" + type,
                onChange: function onChange() {
                    return _this.handleRadioButtonChange();
                } });
        }, _this.radioButtonLabel = function (type) {
            return React.createElement(
                'label',
                { htmlFor: "rb_" + type },
                type === 'old' ? "Sidst" : "Først",
                ' tilf\xF8jet'
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GalleryMenu, [{
        key: 'render',
        value: function render() {
            var radioButton = this.radioButton,
                radioButtonLabel = this.radioButtonLabel,
                checkbox = this.checkbox,
                checkboxLabel = this.checkboxLabel;

            return React.createElement(
                'section',
                { id: 'gallery_menu' },
                React.createElement(
                    'h2',
                    null,
                    'Sort\xE9r'
                ),
                React.createElement(
                    'div',
                    { className: 'sorting_wrapper' },
                    radioButton('old'),
                    radioButtonLabel('old'),
                    radioButton('new'),
                    radioButtonLabel('new'),
                    React.createElement('div', { className: 'marker' })
                ),
                React.createElement(
                    'h2',
                    null,
                    'Filtre'
                ),
                React.createElement(
                    'form',
                    { id: 'filters' },
                    checkbox("latex"),
                    checkboxLabel("latex", "Latexvåben"),
                    checkbox("leather"),
                    checkboxLabel("leather", "Læder udstyr"),
                    checkbox("wood"),
                    checkboxLabel("wood", "Træ arbejde"),
                    checkbox("div"),
                    checkboxLabel("div", "Diverse")
                )
            );
        }
    }]);

    return GalleryMenu;
}(Component);

GalleryMenu.propTypes = {
    sortCallback: PropTypes.func,
    filtersCallback: PropTypes.func
};
export default GalleryMenu;
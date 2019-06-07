var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Components

//###
//# EKSTRA KOMMENTARER
//# ALT MED //# FORAN SLETTES INDEN PRODUCTION
//###

//# Hent andre komponenter eller udvidelser
import GalleryItem from './GalleryItem';
import GalleryMenu from './GalleryMenu';
import LoadSymbol from './LoadSymbol';

'use strict';

var e = React.createElement;

//# Selve React komponentet

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
            json: null,
            jsonError: false,
            openID: null,
            sortForNew: true,
            filters: []

            //# Dette er en lifecycle method.
            //# componentDidMount() er et navn React kender.
            //# Denne her aktiverer selv når komponentet er loaded færdig
            //# Der er mange forskellige af disse.
            //# Den her er den eneste der bliver bruge gennem dette projekt.
        }, _this.searchResults = function () {
            var sortForNew = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var filters = arguments[1];

            //# Destructuring. En del af vanilla Javascript, men bruges
            //# ofte i React til at definere variabler der bruges sådan her.
            //# Sådan undgå man at skulle skrive "this.state.json". Istedet skriver man "json"
            var _this2 = _this,
                json = _this2.state.json,
                sortResultsForNew = _this2.sortResultsForNew,
                sortResultsForOld = _this2.sortResultsForOld,
                filteredResults = _this2.filteredResults;


            var filtered = filteredResults(json, filters);

            if (Array.isArray(filtered) === true) {
                if (sortForNew) {
                    return filtered.sort(sortResultsForNew);
                } else {
                    return filtered.sort(sortResultsForOld);
                }
            } else {
                return filtered;
            }
        }, _this.sortResultsForOld = function (a, b) {
            if (a.id < b.id) {
                return -1;
            }
            if (a.id > b.id) {
                return 1;
            }
            return 0;
        }, _this.sortResultsForNew = function (a, b) {
            if (a.id > b.id) {
                return -1;
            }
            if (a.id < b.id) {
                return 1;
            }
            return 0;
        }, _this.filteredResults = function (json, filters) {
            if (!filters[0]) {
                return json;
            }

            var filteredResults = json.filter(function (currentItem) {
                var matchedTags = false;
                currentItem.acf.tags.forEach(function (item) {
                    if (filters.includes(item)) {
                        matchedTags = true;
                    }
                });
                return matchedTags;
            });

            if (!filteredResults.length) {
                return 'no results';
            }

            return filteredResults;
        }, _this.handleClick = function (newID) {
            // Open || close => item
            if (newID === _this.state.openID) {
                _this.setState({ openID: null });
            } else {
                _this.setState({ openID: newID });
            }
        }, _this.searchSorting = function (sorting) {
            _this.setState({ sortForNew: sorting });
        }, _this.searchFilters = function (filters) {
            _this.setState({ filters: filters });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    //# State er en af det vigtigste værktøjer i React.
    //# State kan ændres i koden. Ændre state sig opdateres komponentet


    _createClass(Gallery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            fetch('https://larp-market.dk/wordpress/wp-json/acf/v3/gallery').then(function (response) {
                return response.json();
            }).then(function (data) {
                //# Her ændres state. Når .fetch() er færdig ændres state og komponentet opdateres
                _this3.setState({ json: data });
            })
            //# .catch() håndtere fejl hvis der sker en fejl i .fetch()
            .catch(function () {
                return _this3.setState({ jsonError: true });
            });
        }

        //# Bruges som en normal function


        //# Normal sorterings function

    }, {
        key: 'render',


        //# Her kan man lave variabler og teknisk set functioner selvom de bør være uden for render()
        //# return værdien er det som renderes på hjemmesiden.
        value: function render() {
            var _state = this.state,
                json = _state.json,
                jsonError = _state.jsonError,
                openID = _state.openID,
                sortForNew = _state.sortForNew,
                filters = _state.filters,
                handleClick = this.handleClick,
                searchResults = this.searchResults,
                searchSorting = this.searchSorting,
                searchFilters = this.searchFilters;


            return React.createElement(
                'div',
                { className: 'gallery_wrapper' },
                React.createElement(GalleryMenu, {
                    sortCallback: searchSorting,
                    filtersCallback: searchFilters }),
                React.createElement(
                    'div',
                    { 'class': 'items_wrapper' },
                    React.createElement(
                        'section',
                        { id: 'gallery_items' },
                        Array.isArray(searchResults(sortForNew, filters)) === true && searchResults(sortForNew, filters).map(function (item) {
                            return (
                                //# værdierne der gives vidre kan bruges i GalleryItem komponentet
                                //# De definere props.
                                //# Props fungere på samme måde som state, men man omdefinere ikke props.
                                React.createElement(GalleryItem, {
                                    key: item.id,
                                    data: item.acf,
                                    itemID: item.id,
                                    openID: openID,
                                    filters: filters,
                                    onClick: function onClick() {
                                        handleClick(item.id);
                                    } })
                            );
                        }),
                        searchResults(sortForNew, filters) === 'no results' && React.createElement(
                            'div',
                            { className: 'json_error' },
                            React.createElement(
                                'p',
                                null,
                                'Ingen s\xF8geresultater fundet'
                            )
                        ),
                        jsonError && React.createElement(
                            'div',
                            { className: 'json_error' },
                            React.createElement(
                                'p',
                                null,
                                'Kunne ikke oprette forbindelse til databasen'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Pr\xF8v venligst igen senere'
                            )
                        ),
                        !jsonError && !Array.isArray(json) === true && React.createElement(LoadSymbol, null)
                    )
                )
            );
        }
    }]);

    return Gallery;
}(React.Component);

//# Her indsættes komponentet.
//# Er komponentet inde i et andet komponent ville man skrive "export default" hvor class laves.
//# Der kan også være flere komponenter i et script. Dertil ville man kun skrive default ved ét komponent


var domContainer = document.querySelector('#gallery_wrapper');
ReactDOM.render(e(Gallery), domContainer);
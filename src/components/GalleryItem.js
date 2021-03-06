var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import react, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

'use strict';

var GalleryItem = function (_Component) {
    _inherits(GalleryItem, _Component);

    function GalleryItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GalleryItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GalleryItem.__proto__ || Object.getPrototypeOf(GalleryItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            images: null,
            currentImage: _this.props.data.img1.sizes.medium_large
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GalleryItem, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var data = this.props.data,
                images = this.state.images;


            if (!images) {
                var usedImages = [];

                for (var i = 1; i <= 10; i++) {
                    var currentImage = data['img' + i];
                    if (currentImage) {
                        usedImages.push(currentImage);
                    }
                }

                this.setState({
                    images: usedImages
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                images = _state.images,
                currentImage = _state.currentImage,
                _props = this.props,
                _onClick = _props.onClick,
                itemID = _props.itemID,
                openID = _props.openID,
                _props$data = _props.data,
                headline = _props$data.headline,
                description = _props$data.description,
                smallImageSrc = _props$data.img1.sizes.thumbnail;


            var galleryItemClasses = classnames('gallery_item', itemID === openID && 'open');

            return React.createElement(
                'div',
                { className: galleryItemClasses },
                React.createElement(
                    'div',
                    { className: 'gallery_preview', onClick: function onClick() {
                            _onClick();
                        } },
                    React.createElement('img', { src: smallImageSrc, alt: headline })
                ),
                itemID === openID ? React.createElement(
                    'div',
                    { className: 'gallery_modal' },
                    React.createElement(
                        'div',
                        { className: 'current_image' },
                        React.createElement('img', { src: currentImage, alt: headline })
                    ),
                    React.createElement(
                        'div',
                        { className: 'image_carousel' },
                        images ? images.map(function (image) {
                            return React.createElement(
                                'div',
                                {
                                    key: image.id,
                                    className: 'carousel_item',
                                    onClick: function onClick() {
                                        _this2.setState({ currentImage: image.sizes.medium_large });
                                    } },
                                currentImage === image.sizes.medium_large ? React.createElement('div', { className: 'overlay' }) : null,
                                React.createElement('img', { src: image.sizes.thumbnail, alt: headline })
                            );
                        }) : null
                    ),
                    React.createElement(
                        'h2',
                        { className: 'headline' },
                        headline
                    ),
                    React.createElement('div', { className: 'description', dangerouslySetInnerHTML: { __html: description } })
                ) : null
            );
        }
    }]);

    return GalleryItem;
}(Component);

GalleryItem.propTypes = {
    onClick: PropTypes.func,
    itemID: PropTypes.number,
    openID: PropTypes.number,
    data: PropTypes.shape({
        headline: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img1: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
        img2: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        img3: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        img4: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        img5: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        img6: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        img7: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        img8: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        img9: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        img10: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
    })
};
export default GalleryItem;
import react, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

'use strict';

export default class GalleryItem extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        itemID: PropTypes.number,
        openID: PropTypes.number,
        data: PropTypes.shape({
            headline: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            img1: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ]).isRequired,
            img2: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ]),
            img3: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ]),
            img4: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ]),
            img5: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ]),
            img6: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ]),
            img7: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ]),
            img8: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ]),
            img9: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ]),
            img10: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.bool
            ])
        })
    };
    state = {
        images: null,
        currentImage: this.props.data.img1.sizes.medium_large
    };

    componentWillMount() {
        const {
            props: {
                data
            },
            state: {
                images
            }
        } = this;

        if (!images) {
            const usedImages = [];

            for (let i = 1; i <= 10; i++) {
                const currentImage = data['img' + i];
                if (currentImage) {
                    usedImages.push(currentImage);
                }
            }

            this.setState({
                images: usedImages
            });
        }

    }

    render() {
        const {
            state: {
                images,
                currentImage
            },
            props: {
                onClick,
                itemID,
                openID,
                data: {
                    headline,
                    description,
                    img1: {
                        sizes: {
                            medium_large: largeImageSrc,
                            thumbnail: smallImageSrc
                        }
                    }
                }
            }
        } = this;

        const galleryItemClasses = classnames(
            'gallery_item',
            itemID === openID && 'open'
        )

        return (
            <div className={galleryItemClasses}>
                <div className="gallery_preview" onClick={() => { onClick() }}>
                    <img src={smallImageSrc} alt={headline} />
                </div>
                {itemID === openID ? (
                    <div className="gallery_modal">
                        <div className="current_image">
                            <img src={currentImage} alt={headline} />
                        </div>
                        <div className="image_carousel">
                            {images ? (
                                images.map(image => (
                                    <div
                                        key={image.id}
                                        className="carousel_item"
                                        onClick={() => {
                                            this.setState({ currentImage: image.sizes.medium_large })
                                        }}>
                                        {currentImage === image.sizes.medium_large ? (
                                            <div className="overlay" />
                                        ) : null}
                                        <img src={image.sizes.thumbnail} alt={headline} />
                                    </div>
                                ))
                            ) : null}
                        </div>
                        <h2 className="headline">{headline}</h2>
                        <div className="description">{description}</div>
                    </div>
                ) : null}
            </div>
        )
    };
}
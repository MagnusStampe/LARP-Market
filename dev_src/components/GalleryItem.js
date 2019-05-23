import react, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

'use strict';

export default class GalleryItem extends Component {
    static propTypes = {
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
        isOpen: false,
        images: null
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
                isOpen,
                images
            },
            props: {
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
            isOpen && 'open'
        )

        return (
            <div className={galleryItemClasses}>
                <div className="gallery_preview" onClick={() => { this.setState({ isOpen: !isOpen }) }}>
                    <img src={smallImageSrc} alt={headline} />
                </div>
                {isOpen ? (
                    <div className="gallery_modal">
                        <div className="current_image">
                            <img src={largeImageSrc} alt={headline} />
                        </div>
                        <h2 className="headline">{headline}</h2>
                        <div className="description">{description}</div>
                        <div className="image_carousel">
                            {images ? (
                                images.map(image => (
                                    <div key={image.id} className="carousel_item">
                                        <img src={image.sizes.thumbnail} alt={headline} />
                                    </div>
                                ))
                            ) : null}
                        </div>
                        <div className="underline" />
                    </div>
                ) : null}
            </div>
        )
    };
}
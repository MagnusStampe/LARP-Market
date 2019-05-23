'use strict';
import classnames from 'classnames';

const e = React.createElement;

class Header extends React.Component {
    state = {
        page: ''
    }

    componentWillMount() {
        const pageName = document.querySelector("body").id;
        this.setState({ page: pageName });
    }

    render() {
        const indexClasses = classnames(
            'nav_button',
            this.state.page == 'index' && 'current'
        )
        const galleryClasses = classnames(
            'nav_button',
            this.state.page == 'gallery' && 'current'
        )
        const orderClasses = classnames(
            'nav_button',
            this.state.page == 'order' && 'current'
        )
        const pricesClasses = classnames(
            'nav_button',
            this.state.page == 'prices' && 'current'
        )
        const infoClasses = classnames(
            'nav_button',
            this.state.page == 'info' && 'current'
        )
        return (
            <div>
                <nav>
                    <a className={indexClasses} href="index.html">Forside</a>
                    <a className={galleryClasses} href="gallery.html">Galleri</a>
                    <a className={orderClasses} href="order.html">Bestilling</a>
                    <a className={pricesClasses} href="prices.html">Priser</a>
                    <a className={infoClasses} href="info.html">Info</a>
                </nav>
                <div className="header_logo"></div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#main_header');
ReactDOM.render(e(Header), domContainer);
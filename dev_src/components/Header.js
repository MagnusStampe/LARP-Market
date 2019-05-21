'use strict';
import classnames from 'classnames';

const e = React.createElement;

class Header extends React.Component {
    state= {
        page: 'info'
    }
    
    render() {
        const galleryClasses = classnames(
            'nav_button',
            this.state.page == 'gallery' && 'current' 
        )
        const orderClasses = classnames(
            'nav_button',
            this.state.page == 'order' && 'current' 
        )
        const infoClasses = classnames(
            'nav_button',
            this.state.page == 'info' && 'current' 
        )
        return (
            <nav>
                <a className="nav_button" href="index.html">Forside</a>
                <a className={galleryClasses} href="gallery.html">Galleri</a>
                <a className={orderClasses} href="order.html">Bestilling</a>
                <a className={infoClasses} href="info.html">Info</a>
            </nav>
        );
    }
}

const domContainer = document.querySelector('#main_header');
ReactDOM.render(e(Header), domContainer);
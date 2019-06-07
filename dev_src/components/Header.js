'use strict';
import classnames from 'classnames';

const e = React.createElement;

class Header extends React.Component {
    state = {
        page: '',
        expanded: false
    }

    componentWillMount() {
        const pageName = document.querySelector("body").id;
        this.setState({ page: pageName });
    }

    navClasses = navPage => {
        const page = this.state.page;
        return classnames(
            'nav_button',
            page === navPage && 'current'
        )
    }

    render() {
        const {
            state: {
                expanded
            },
            navClasses
        } = this;

        const expandedClass = classnames(
            expanded && 'expanded'
        );

        return (
            <div
                className={expandedClass} >
                <button
                    id="burger_menu_button"
                    onClick={() => this.setState({ expanded: !this.state.expanded })} >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="close_menu"
                    onClick={() => this.setState({ expanded: false })} />
                <nav>
                    <a className={navClasses('index')} href="index.html">Forside</a>
                    <a className={navClasses('gallery')} href="gallery.html">Portfolio</a>
                    <a className={navClasses('order')} href="order.html">Bestilling</a>
                    <a className={navClasses('prices')} href="prices.html">Priser</a>
                    <a className={navClasses('info')} href="info.html">Info</a>
                </nav>
                <div className="header_logo"></div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#main_header');
ReactDOM.render(e(Header), domContainer);
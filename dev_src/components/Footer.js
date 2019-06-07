'use strict';
const e = React.createElement;

class Footer extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="footer_logo" />
                <nav className="nav_pages">
                    <a href="index.html">Forside</a>
                    <a href="gallery.html">Portfolio</a>
                    <a href="order.html">Bestilling</a>
                    <a href="prices.html">Priser</a>
                    <a href="info.html">Info</a>
                </nav>
                <nav className="nav_some">
                    <a href="https://www.facebook.com/larpmarketdk">
                        <div className="logo facebook" />
                        <p>www.facebook.com/larpmarketdk</p>
                    </a>
                    <a href="mailto:kontakt@larp-market.dk">
                        <div className="logo mail" />
                        <p>kontakt@larp-market.dk</p>
                    </a>
                    <a href="tel:+4523660530">
                        <div className="logo tele" />
                        <p>+45 23 66 05 30</p>
                    </a>
                </nav>
            </div>
        );
    }
}

const domContainer = document.querySelector('#main_footer');
ReactDOM.render(e(Footer), domContainer);
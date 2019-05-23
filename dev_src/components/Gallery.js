//Components
import GalleryItem from './GalleryItem';
import LoadSymbol from './LoadSymbol';

'use strict';

const e = React.createElement;

class Gallery extends React.Component {
    state = {
        json: ''
    }

    componentDidMount() {
        fetch('https://larp-market.dk/wordpress/wp-json/acf/v3/gallery')
            .then(response => response.json())
            .then(data => this.setState({ json: data }));
    }

    render() {
        console.log(this.state.json);
        return (
            <div class="items_container">
                {Array.isArray(this.state.json) ?
                    (
                        this.state.json.map(item => (
                            <GalleryItem key={item.id} data={item.acf} />
                        ))
                    ) : (
                        <LoadSymbol />
                    )
                }
            </div>
        )
    }
}

const domContainer = document.querySelector('#gallery_items');
ReactDOM.render(e(Gallery), domContainer);
'use strict';
const e = React.createElement;

class BackgroundImage extends React.Component {
    render() {
        return (
            <div className="image" />
        );
    }
}

const domContainer = document.querySelector('#background_image');
ReactDOM.render(e(BackgroundImage), domContainer);
'use strict';

const e = React.createElement;

class InfoBox extends React.Component {
    state = {
        json: null
    }

    componentDidMount() {
        fetch('https://larp-market.dk/wordpress/wp-json/acf/v3/info')
            .then(response => response.json())
            .then(data => this.setState({ json: data }));
    }

    htmlDecode(input) {
        const e = document.createElement('div');
        e.innerHTML = input;
        console.log(e);
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    render() {
        if (!Array.isArray(this.state.json)) {
            return null;
        }

        return (
            <div>
                {this.state.json.map(post => (
                    <div key={post.id} id="subjects_container">
                        {console.log(this.htmlDecode(post.acf.text))}
                        <h2 className="sub_header">{post.acf.headline}</h2>
                        <div className="sub_description">{unescape(post.acf.text)}</div>
                    </div>
                ))}
            </div>
        )
    }
}

const domContainer = document.querySelector('#info_box');
ReactDOM.render(e(InfoBox), domContainer);
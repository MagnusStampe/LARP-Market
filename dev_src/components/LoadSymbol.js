import react, { Component } from 'react';

'use strict';

export default class LoadSymbol extends Component {
    render() {
        return (
            <div className="loading_symbol">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        );
    }
}
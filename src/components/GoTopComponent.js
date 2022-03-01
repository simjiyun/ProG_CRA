import React, { Component } from 'react';

class GoTopComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <span id="goTop">
                    <a href="#" className="go-top">
                        <i className="material-icons">arrow_upward</i>
                    </a>
                </span>
            </React.Fragment>
        );
    }
}

export default GoTopComponent;
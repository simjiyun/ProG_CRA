import React, { Component } from 'react';

class FixComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <span id="theme-wrap" className="fixed-wrap theme">
                    <a href="#" className="theme-btn">
                        <i className="material-icons">add_shopping_cart</i>
                        <span>Buy Theme</span>
                    </a>
                </span>
                <span id="question-wrap" className="fixed-wrap question">
                    <a href="#" className="question-btn">
                        <i className="fa fa-send-o"></i>
                        <span>Quick Question?</span>
                    </a>
                </span>
            </React.Fragment>
        );
    }
}

export default FixComponent;
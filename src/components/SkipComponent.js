import React, { Component } from 'react';

class SkipComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <ul id="skip">
                <li><a href="#">헤더 바로가기</a></li>
                <li><a href="#">메인 바로가기</a></li>
                <li><a href="#">하단 바로가기</a></li>
                </ul>
            </React.Fragment>
        );
    }
}

export default SkipComponent;
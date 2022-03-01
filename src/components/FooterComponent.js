import React, { Component } from 'react';

class FooterComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <footer id="footer">
                    <div className="container">
                    <div className="wrap">
                        <ul>
                        <li>
                            <ul>
                            <li>
                                <div className="gap">
                                <h2>
                                    London Based<br/> 
                                    Creative Studio
                                </h2>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                <address>
                                    301 The Greenhouse,<br/>
                                    Custard Factory, London, E2 8DY.<br/>
                                <a href="#">sales@domain.com</a> | +44 (0) 123 456 7890
                                </address>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                <h1>
                                    <a href="#" title="logo">
                                    <img src="./images/white_logo.png" alt="logo"/>
                                    </a>
                                </h1>
                                <p>
                                    <span><a href="#">TWITTER</a></span>
                                    <span><a href="#">FACEBOOK</a></span>
                                    <span><a href="#">INSTAGRAM</a></span>
                                    <span><a href="#">DRIBBBLE</a></span>
                                </p>
                                </div>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <div className="gap">
                            <i></i>
                            </div>
                        </li>
                        <li>
                            <ul>
                            <li>
                                <div className="gap">
                                <h2>POFO - Portfolio Concept Theme</h2>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                <p>&copy; 2021 POFO is Proudly Powered by <a href="#">ThemeZaa</a></p>
                                </div>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default FooterComponent;
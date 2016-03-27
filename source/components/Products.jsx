import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Router, Link} from 'react-router';

export class Products extends React.Component{
    state = {};

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <section className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h3>Products</h3>
                            <div className="section-headline-text">A little bit about what we do. Go to each page to learn more.</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="row">
                                <div className="col-sm-4">
                                    <Link to="/hire" className="no-decoration">
                                        <img src="img/hire@2x.png" alt=""/>
                                        <h4>Hire</h4>
                                        <p>Book your favorite Creative for event videos, company animations, portraits, weddings and much more</p>
                                    </Link>
                                    <Link className="hidden-md-down" to="/hire">Get free quotes</Link>
                                </div>

                                <div className="col-sm-4">
                                    <Link to="/content" className="no-decoration">
                                        <img src="img/content@2x.png" alt=""/>
                                        <h4>Content</h4>
                                        <p>Subscribe to custom content for your social media activities, delivered by selected professionals every month</p>
                                    </Link>
                                    <Link className="hidden-md-down" to="/content">Receive custom content</Link>
                                </div>

                                <div className="col-sm-4">
                                    <Link to="/market" className="no-decoration">
                                        <img src="img/market@2x.png" alt=""/>
                                        <h4>Market</h4>
                                        <p>Buy unique visuals directly from Creatives’ portfolios</p>
                                    </Link>
                                    <Link className="hidden-md-down" to="/market">Purchase original imagery</Link>
                                </div>
                            </div>

                            <div className="row hidden-md-up">
                                <div className="col-sm-4">
                                    <Link to="/hire">Get free quotes</Link>
                                </div>
                                <div className="col-sm-4">
                                    <Link to="/content">Receive custom content</Link>
                                </div>
                                <div className="col-sm-4">
                                    <Link to="/market">Purchase original imagery</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );

    }
}

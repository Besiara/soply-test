import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class HowItWorksHire extends React.Component{
    state = {};

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="how-it-works">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1">
                            <h3>How It Works</h3>
                            <div className="section-headline-text">Hiring a Creative is incredibly easy.</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="how-it-works__image"><img src="img/how-it-works-1.png" alt=""/></div>
                            <div className="big-number">1</div>
                            <div className="how-it-works__text-1">Create</div>
                            <div className="how-it-works__text-2">a brief</div>
                        </div>
                        <div className="col-md-4">
                            <div className="how-it-works__image"><img src="img/how-it-works-2.png" alt=""/></div>
                            <div className="big-number">2</div>
                            <div className="how-it-works__text-1">Receive</div>
                            <div className="how-it-works__text-2">quotes from Creatives</div>
                        </div>
                        <div className="col-md-4">
                            <div className="how-it-works__image"><img src="img/how-it-works-3.png" alt=""/></div>
                            <div className="big-number">3</div>
                            <div className="how-it-works__text-1">Pick</div>
                            <div className="how-it-works__text-2">your favorite</div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}

export class HowItWorksContent extends React.Component{
    state = {};

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="how-it-works">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1">
                            <h3>How It Works</h3>
                            <div className="section-headline-text">Brief our visual storytellers with what content you
                                need for your marketing activities and get a custom library of content. Subscribe to a
                                content package and you’ll receive engaging and high-quality content, every month —
                                ready to share.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="how-it-works__image"><img src="img/how-it-works-1.png" alt=""/></div>
                            <div className="big-number">1</div>
                            <div className="how-it-works__text-1">Create</div>
                            <div className="how-it-works__text-2">a brief</div>
                        </div>
                        <div className="col-md-4">
                            <div className="how-it-works__image"><img src="img/how-it-works-3.png" alt=""/></div>
                            <div className="big-number">2</div>
                            <div className="how-it-works__text-1">Pick</div>
                            <div className="how-it-works__text-2">your favorite(s)</div>
                        </div>
                        <div className="col-md-4">
                            <div className="how-it-works__image"><img src="img/content@2x.png" alt=""/></div>
                            <div className="big-number">3</div>
                            <div className="how-it-works__text-1">Receive</div>
                            <div className="how-it-works__text-2">custom content library — every month</div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class WhyLoveIt extends React.Component{
    state = {};

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="why">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h3>Why Your Brand Will Love It</h3>
                            <div className="section-headline-text">Simple solutions for hiring creatives</div>
                        </div>
                    </div>

                    <ul className="row">
                        <li className="col-md-4 col-md-offset-2 col-sm-6">Access to more than 1500 content providers</li>
                        <li className="col-md-4 col-sm-6">Local content providers</li>
                        <li className="col-md-4 col-md-offset-2 col-sm-6">High quality content</li>
                        <li className="col-md-4 col-sm-6">Professional visual storytellers</li>
                        <li className="col-md-4 col-md-offset-2 col-sm-6">Competitive pricing</li>
                        <li className="col-md-4 col-sm-6">Minimize in house resources</li>
                        <li className="col-md-4 col-md-offset-2 col-sm-6">Full control of supply chain</li>
                        <li className="col-md-4 col-sm-6">Increase digital performance</li>
                    </ul>
                </div>
            </section>
        );

    }
}
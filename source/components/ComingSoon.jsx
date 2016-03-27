import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class ComingSoon extends React.Component{

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="get-started" id="start">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1">
                            <h3>Coming Soon</h3>
                            <div className="section-headline-text">We're not quite ready to launch Market yet, but
                                please let us know if you're interested.</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-xs-center">
                            <a className="soply-button" href="mailto:hello@soply.com?subject=Market">Get Notified</a>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}
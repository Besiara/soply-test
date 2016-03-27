import * as React from 'react';
import {Navigation} from '../Navigation';
import {Router, Link} from 'react-router';


export class Header extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">
                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <h2><Link to="/" ><img className="img-fluid" src="img/logo.png" alt=""/></Link></h2>
                            </div>
                            <div className="col-md-6">
                                <nav className="hidden-sm hidden-xs desktop-menu">
                                    <ul>
                                        <Navigation></Navigation>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <nav className="visible-xs visible-sm mobile-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </nav>
                </header>
            </div>
        );
    }
}

import * as React from 'react';

import {Header} from '../templates/Header';
import {Footer} from '../templates/Footer';

export class IndexPage extends React.Component {
    state = {};
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

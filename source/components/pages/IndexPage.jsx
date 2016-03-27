import * as React from 'react';

import {Header} from '../templates/Header';
import {Footer} from '../templates/Footer';
import {SignIn} from '../SignIn';

export class IndexPage extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <SignIn/>
                <Footer/>
            </div>
        );
    }
}

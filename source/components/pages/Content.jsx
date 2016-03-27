import * as React from 'react';

import {HowItWorksContent} from '../HowItWorks';
import {WhyLoveIt} from '../WhyLoveIt';

export class Content extends React.Component {
    state = {};
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <HowItWorksContent/>
                <WhyLoveIt/>
            </div>
        );
    }
}

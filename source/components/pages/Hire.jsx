import * as React from 'react';

import {FeaturedCreatives} from '../FeaturedCreatives';
import {HowItWorksHire} from '../HowItWorks';
import {Request} from '../Request';

export class Hire extends React.Component {
    state = {};
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Request/>
                <HowItWorksHire/>
                <FeaturedCreatives
                    creativesStartNum="4" creativesNum="8"
                    creativesHeader="Curated Creatives"
                    creativesSubHeader="A tiny selection of the best creative photographers, videographers, illustrators, animators and designers you can hire.">
                </FeaturedCreatives>
            </div>
        );
    }
}

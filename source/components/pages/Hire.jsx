import * as React from 'react';

import {FeaturedCreatives} from '../FeaturedCreatives';
import {HowItWorksHire} from '../HowItWorks';
import {Request} from '../Request';
import {Intro} from '../Intro';

export class Hire extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Intro introBackground="https://soply.com/assets-2015/frame.optimized.progressive.jpg"
                       introHeader="Hire Professional Creatives"
                       introSubHeader="Receive quotes and select your favorite"/>
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

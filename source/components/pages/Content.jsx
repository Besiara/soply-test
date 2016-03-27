import * as React from 'react';

import {HowItWorksContent} from '../HowItWorks';
import {WhyLoveIt} from '../WhyLoveIt';
import {Intro} from '../Intro';
import {ContentPackages} from '../ContentPackages';

export class Content extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Intro introBackground="https://soply.com/assets-2015/static/images/intro-content.compressed.optimized.jpg"
                       introHeader="Custom Content Library for Your Brand’s Social Media"
                       introSubHeader="From professional creatives directly to your inbox, every month"/>
                <HowItWorksContent/>
                <WhyLoveIt/>
                <ContentPackages/>
            </div>
        );
    }
}

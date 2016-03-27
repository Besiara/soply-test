import * as React from 'react';

import {Intro} from '../Intro';
import {ComingSoon} from '../ComingSoon';

export class Market extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Intro introBackground="https://soply.com/assets-2015/static/images/intro-market.compressed.optimized.jpg"
                       introHeader="Buy Unique Visuals Directly From Creatives"
                       introSubHeader="Browse, pay and download"/>
                <ComingSoon/>
            </div>
        );
    }
}
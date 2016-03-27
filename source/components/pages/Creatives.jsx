import * as React from 'react';

import {ProfilesShort} from '../ProfilesShort';
import {Intro} from '../Intro';

export class Creatives extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Intro introBackground="https://soply.com/assets-2015/static/images/intro-creatives.compressed.optimized.jpg"
                       introHeader="The Ultimate Platform for Creatives"
                       introSubHeader="Get hired, create social content for brands and sell visuals from your archive"/>
                <ProfilesShort/>
            </div>
        );
    }
}

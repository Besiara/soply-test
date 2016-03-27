import * as React from 'react';

import {CustomersPartners} from '../CustomersPartners';
import {FeaturedCreatives} from '../FeaturedCreatives';
import {Products} from '../Products';
import {Intro} from '../Intro';

export class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Intro introBackground="https://soply.com/assets-2015/frame.optimized.progressive.jpg"
                       introHeader="Connect With Professional Creatives"
                       introSubHeader="Hire talent, subscribe to custom Content for social media or buy stock from Market"/>
                <Products/>
                <FeaturedCreatives creativesStartNum="0" creativesNum="4"
                                   creativesHeader="Top Wedding Photographers in"
                                   creativesSubHeader="Hire the best creative photographers near your place."
                                   creativesLinkHeader="United Kingdom"/>
                <CustomersPartners/>
            </div>
        );
    }
}

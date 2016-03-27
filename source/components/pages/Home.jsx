import * as React from 'react';

import {CustomersPartners} from '../CustomersPartners';
import {FeaturedCreatives} from '../FeaturedCreatives';
import {Products} from '../Products';

export class Home extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Products/>
                <FeaturedCreatives creativesStartNum="0" creativesNum="4"
                                   creativesHeader="Top Wedding Photographers in"
                                   creativesSubHeader="Hire the best creative photographers near your place."
                                   creativesLinkHeader="United Kingdom">
                </FeaturedCreatives>
                <CustomersPartners/>
            </div>
        );
    }
}

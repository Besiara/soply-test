import * as React from 'react';

import {BlogPost} from '../BlogPost';

export class Blog extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BlogPost creativesStartNum="0" creativesNum="10"
                       creativesHeader="Soply"
                       creativesSubHeader="Supplying Tailored Content for Brands: Video, Animation, Photo & Illustration.
                                           Get a Custom Visual Archive for Your Business or Personal Use!">
            </BlogPost>
        );
    }
}

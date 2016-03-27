import * as React from 'react';

import {BlogPost} from '../BlogPost';
import {Intro} from '../Intro';

export class Blog extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Intro introBackground="http://1920x1080hdwallpapers.com/image/201510/movies/2659/missing-in-action-machine-gun-helicopter-chuck-norris-650x366.jpg"
                       introHeader="Blog"
                       introSubHeader="Let's read about Chuck Norris"/>
                <BlogPost creativesStartNum="0" creativesNum="10"
                          creativesHeader="Soply"
                          creativesSubHeader="Supplying Tailored Content for Brands: Video, Animation, Photo & Illustration.
                          Get a Custom Visual Archive for Your Business or Personal Use!"/>
            </div>
        );
    }
}

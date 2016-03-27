import * as React from 'react';
import {Navigation} from '../Navigation';

export class Footer extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="footer">
                <ul className="social-links">
                    <li className="social-link facebook">
                        <a href="https://www.facebook.com/SoplyHQ" title="Soply on Facebook" target="_blank">
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li className="social-link twitter">
                        <a href="https://twitter.com/SoplyHQ" title="Soply on Twitter" target="_blank">
                            <span>Twitter</span>
                        </a>
                    </li>
                    <li className="social-link instagram">
                        <a href="https://www.instagram.com/soplyhq/" title="Soply on Instagram" target="_blank">
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li className="social-link google-plus">
                        <a href="https://plus.google.com/+Soply" title="Soply on Google+" target="_blank">
                            <span>Google+</span>
                        </a>
                    </li>
                    <li className="social-link linkedin">
                        <a href="https://www.linkedin.com/company/soply" title="Soply on LinkedIn" target="_blank">
                            <span>LinkedIn</span>
                        </a>
                    </li>
                </ul>
                <ul className="menu">
                    <Navigation></Navigation>
                    <li className="menu-item">
                        <a href="http://blog.soply.com" title="Read our blog!">Blog</a>
                    </li>
                    <li className="menu-item">
                        <a target="_blank" href="https://soply.zendesk.com/hc" title="Look here for answers">FAQ</a>
                    </li>
                    <li className="menu-item">
                        <a href="/terms" title="Our terms of service">Terms</a>
                    </li>
                </ul>
                <p className="margin-bottom">Please email <a href="mailto:hello@soply.com" title="We're always there for you">hello@soply.com</a> if you need any help!
                </p>
                <p>Soply™ by PhotoPitch Ltd | Handmade with ♥ in London &amp; Copenhagen</p>
                <p className="margin-bottom">Copyright © 2013-2016. All rights reserved.</p>
                <ul className="attributions">
                    <li className="attribution stripe">
                        <a href="https://stripe.com" rel="nofollow" title="Our payments are handled by Stripe">
                            <img src="https://soply.com/assets-2015/stripe-outline-white@2x.png" alt="Stripe"/>
                        </a>
                    </li>
                    <li className="attribution comodo-ssl">
                        <a href="https://ssl.comodo.com" rel="nofollow" title="Traffic on this site is secured with Comodo">
                            <img src="https://soply.com/assets-2015/comodo-ssl@2x.png" alt="Comodo SSL"/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

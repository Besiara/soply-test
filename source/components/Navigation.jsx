import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Router, Link} from 'react-router';

const ACTIVE_ITEM = 'navbar-item_active';


export const Navigation = React.createClass({
    getInitialState() {
        return {}
    },
    render() {
        return (
            <span>
                    <li>
                        <Link to="/hire" activeClassName={ACTIVE_ITEM}>Hire</Link>
                    </li>
                    <li>
                        <Link to="/content" activeClassName={ACTIVE_ITEM}>Content</Link>
                    </li>
                    <li>
                        <Link to="/market" activeClassName={ACTIVE_ITEM}>Market</Link>
                    </li>
                    <li>
                        <Link to="/creatives" activeClassName={ACTIVE_ITEM}>Creatives</Link>
                    </li>
                    <li>
                        <Link to="/blog" activeClassName={ACTIVE_ITEM}>Blog</Link>
                    </li>
                    <li className="sign-up">
                        <Link to="/signin"  activeClassName={ACTIVE_ITEM}>Sign In</Link>
                    </li>
            </span>
        );
    }
});
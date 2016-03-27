import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';

import {IndexPage} from './components/pages/IndexPage';
import {Home} from './components/pages/Home';
import {Hire} from './components/pages/Hire';
import {Content} from './components/pages/Content';
import {Creatives} from './components/pages/Creatives';
import {Market} from './components/pages/Market';
import {Blog} from './components/pages/Blog';
import {SignIn} from './components/pages/SignIn';

import * as constants from './constants';

ReactDOM.render(
    <Router history={createHashHistory({queryKey: false})}>
        <Route path="/" component={IndexPage}>
            <IndexRoute component={Home}/>
            <Route path="hire" component={Hire}/>
            <Route path="content" component={Content}/>
            <Route path="market" component={Market}/>
            <Route path="creatives" component={Creatives}/>
            <Route path="blog" component={Blog}/>
            <Route path="signin" component={SignIn}/>
        </Route>
    </Router>,
    document.getElementById(constants.APP_CONTAINER_ID)
);
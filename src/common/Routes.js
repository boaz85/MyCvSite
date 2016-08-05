import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import MainContainer from './MainContainer';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainContainer} />
        <Route path="home" component={MainContainer} />
    </Route>
);
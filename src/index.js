import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import Routes from './common/Routes'


ReactDOM.render((
    <Router history={browserHistory}>
        {Routes}
    </Router>
),document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import NoMatch from './NoMatch';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/One" component={One}></Route>
    <Route path="/Two" component={Two}></Route>
    <Route path="/Three" component={Three}></Route>
    <Route path="/Four" component={Four}></Route>
    <Route path="*" component={NoMatch}></Route>
  </Router>

, document.getElementById('root'));
registerServiceWorker();

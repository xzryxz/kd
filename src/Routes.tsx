import * as React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './lib/store';
import App from './containers/App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';


const history = syncHistoryWithStore(hashHistory, store);

export default class Routes extends React.Component<undefined, undefined> {
  render() {
    return (
      <Router history={history}>
        <Redirect from="/" to="/home" />
        <Route path="/" component={App}>
          <Route path="/home" component={HomePage} />
          <Route path="/notfound" component={NotFoundPage} />
        </Route>
      </Router>
    );
  }
}

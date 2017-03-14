import * as React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './lib/store'
import App from './containers/App'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


const history = syncHistoryWithStore(hashHistory, store)

export default class Routes extends React.Component<undefined, undefined> {

  render () {
    return (
      <Router history={history}>
        <Redirect from="/" to="/en/home" />
        <Route path="/" component={App}>
          <Route path="/en/home" component={Home} />
          <Route path="/en/about" component={About} />
          <Route path="/en/contact" component={Contact} />
          <Route path="/ko/home" component={Home} />
          <Route path="/ko/about" component={About} />
          <Route path="/ko/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    )
  }

}

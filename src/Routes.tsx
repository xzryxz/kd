import * as React from 'react'
import * as ReactMarkdown from 'react-markdown'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './lib/store'
import App from './containers/App'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


const history = syncHistoryWithStore(hashHistory, store)



const input = `# test \n\n Lorem ipsum dolor sit amet.`

const test = () => <ReactMarkdown source={input} />

export default class Routes extends React.Component<undefined, undefined> {
  render() {
    return (
      <Router history={history}>
        <Redirect from="/" to="/test" />
        <Route path="/" component={App}>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/test" component={test} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    )
  }
}

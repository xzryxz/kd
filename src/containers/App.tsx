import * as React from 'react'
import { connect } from 'react-redux'
import Menu from './../components/Menu'


export interface AppProps {
  browser: any
  routing: any
  children: any
}

class App extends React.Component<AppProps, undefined> {
  render() {
    const { browser, routing } = this.props
    return (
      <div>
        <div id="page">
          <Menu browser={browser} routing={routing} />
          { this.props.children }
        </div>
        <div id="footer"> copyright <i className="material-icons" style={{ verticalAlign: 'middle', }}>&#xE90C;</i> 2017 </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  browser: state.browser,
  routing: state.routing,
})

export default connect(mapStateToProps)(App)

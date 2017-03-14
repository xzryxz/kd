import * as React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Language from './../components/Language'
import Menu from './../components/Menu'


interface AppProps {
  browser: any
  routing: any
  children: any
}

class App extends React.Component<AppProps, undefined> {
  render () {
    const { browser, routing } = this.props
    return (
      <div>
        <div id="page">
          <Language routing={routing} />
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

const mapDispatchToProps = (dispatch: any) => ({
  toggleLanguage: (nextUrl) => dispatch(push(nextUrl)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

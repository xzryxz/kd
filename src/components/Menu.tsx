import * as React from 'react'
import * as classnames from 'classnames'


interface MenuProps {
  browser: any
  routing: any
}

interface MenuState {
  isOpen: boolean
}

export default class Menu extends React.Component<MenuProps, MenuState> {

  constructor (props: MenuProps) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  componentWillUpdate (nextProps: any) {
    const nextRoute = nextProps.routing.locationBeforeTransitions.pathname
    const currentRoute = this.props.routing.locationBeforeTransitions.pathname
    if (nextRoute !== currentRoute) {
      this.toggleMenu(false)
    }
  }

  toggleMenu = (to?: boolean) => {
    this.setState({
      isOpen: to === undefined ? !this.state.isOpen : to,
    })
  }

  renderMenu () {
    const { pathname } = this.props.routing.locationBeforeTransitions
    return (
      <div id="menu">
        <a className={classnames({ active: pathname === '/home' })} href="#/en/home">Home</a>
        <a className={classnames({ active: pathname === '/about' })}  href="#/en/about">About</a>
        <a className={classnames({ active: pathname === '/contact' })}  href="#/en/contact">Contact</a>
      </div>
    )
  }

  renderToggle () {
    return (
      <div>
        { this.state.isOpen && <i onClick={() => this.toggleMenu()} id="menu-close" className="material-icons">&#xE5CD;</i> }
        { !this.state.isOpen && <i onClick={() => this.toggleMenu()} id="menu-open" className="material-icons">&#xE5D2;</i> }
      </div>
    )
  }

  render () {
    const largeViewport = this.props.browser.greaterThan.medium
    const showMenu = this.state.isOpen || largeViewport
    return (
      <div>
        { !largeViewport && this.renderToggle() }
        { showMenu && this.renderMenu() }
      </div>
    )
  }
}

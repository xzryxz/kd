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
    const currentLangKey = pathname.split('/')[1]
    return (
      <div id="menu">
        <a className={classnames({ active: pathname === `/${currentLangKey}/home` })} href={`#/${currentLangKey}/home`}>{currentLangKey === 'en' ? 'Home' : '결결결'}</a>
        <a className={classnames({ active: pathname === `/${currentLangKey}/about` })}  href={`#/${currentLangKey}/about`}>{currentLangKey === 'en' ? 'About' : '과과과'}</a>
        <a className={classnames({ active: pathname === `/${currentLangKey}/contact` })}  href={`#/${currentLangKey}/contact`}>{currentLangKey === 'en' ? 'Contact' : '를를를'}</a>
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

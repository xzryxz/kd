import * as React from 'react'
import * as classnames from 'classnames'


interface MenuProps {
  browser: any
  routing: any
  pushUrl: any
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

  goto = (page: string) => {
    const { pathname } = this.props.routing.locationBeforeTransitions
    const locale = pathname.split('/')[1]
    this.props.pushUrl(`/${locale}/${page}`)
  }

  getCx = (page: string): any => {
    const { pathname } = this.props.routing.locationBeforeTransitions
    const locale = pathname.split('/')[1]
    return classnames({
      active: pathname === `/${locale}/${page}`,
      link: true,
    })
  }

  renderMenu () {
    const { pathname } = this.props.routing.locationBeforeTransitions
    const locale = pathname.split('/')[1]
    return (
      <div id="menu">
        <span className={this.getCx('home')} onClick={() => this.goto('home')}>{locale === 'en' ? 'The Korean Democrats' : 'The Korean Democrats – 민수당'}</span>
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

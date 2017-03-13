import * as React from "react";


export interface MenuProps {

}


export interface MenuState {
  isOpen: boolean;
}


export default class Menu extends React.Component<MenuProps, MenuState> {

  constructor(props: MenuProps) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderMenu() {
    return (
      <div id="menu">
        <a className="active" href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    );
  }

  renderToggle() {
    return (
      <div>
        { this.state.isOpen && <i onClick={this.toggleMenu} id="menu-close" className="material-icons">&#xE5CD;</i> }
        { !this.state.isOpen && <i onClick={this.toggleMenu} id="menu-open" className="material-icons">&#xE5D2;</i> }
      </div>
    );
  }

  render() {
    const largeViewport = true; // TODO: find out with redux browser props
    const showMenu = this.state.isOpen || largeViewport;
    return (
      <div>
        { !largeViewport && this.renderToggle() }
        { showMenu && this.renderMenu() }
      </div>
    );
  }
}

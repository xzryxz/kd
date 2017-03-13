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
        isOpen: true,
      }
    }

    renderMenu() {
      return (
        <div>
          <a className="active" href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      );
    }

    render() {
        // <i onclick="toggleMenu('CLOSE');" id="menu-close" className="material-icons" style="display: none;">&#xE5CD;</i>
        // <i onclick="toggleMenu('OPEN');" id="menu-open" className="material-icons">&#xE5D2;</i>
        return (
          <div id="menu" style={{ display: 'none', }}>
            { this.state.isOpen && this.renderMenu() }
          </div>
        );
    }
}

import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
export default class Navbar extends Component {
  state = {};
  render() {
    return (
      <Menu compact fluid fixed="top" className="Trello-Navbar">
        <a
          className="Trello-Navbar--Logo"
          href="/"
          aria-label="Inicio de Trello"
        >
          <span className="Trello-Navbar--Logo-default" />
        </a>

        <Menu.Item name="home" active={true} className="Trello-Navbar--item">
          <Icon fitted name="home" inverted />
        </Menu.Item>
        <Menu.Item name="home" active={false} className="Trello-Navbar--item">
          <Icon fitted name="home" inverted />
          <span className="Trello-Navbar--item-Content">Tableros</span>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="brand" className="Trello-Navbar--item">
            <Icon fitted name="home" inverted />
          </Menu.Item>
          <Menu.Item name="brand" className="Trello-Navbar--item">
            <Icon fitted name="home" inverted />
          </Menu.Item>
          <Menu.Item name="brand" className="Trello-Navbar--item">
            <Icon fitted name="home" inverted />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

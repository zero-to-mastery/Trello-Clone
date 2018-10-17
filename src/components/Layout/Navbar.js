import React, { Component } from "react";
import { Menu, Icon, Search } from "semantic-ui-react";
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
        <Menu.Menu position="left">
          <Menu.Item name="home" active={true} className="Trello-Navbar-Item">
            <Icon fitted name="home" inverted />
          </Menu.Item>
          <Menu.Item
            name="clipboard"
            active={false}
            className="Trello-Navbar-Item"
          >
            <Icon fitted name="clipboard" inverted />
            <span className="Trello-Navbar-Item--content">Boards</span>
          </Menu.Item>
          <Menu.Item className="Trello-Navbar-Item-Search">
            <Search loading={false} className="Trello-Navbar-Item--input" />
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item name="plus" className="Trello-Navbar-Item">
            <Icon fitted name="plus" inverted />
          </Menu.Item>
          <Menu.Item name="info" className="Trello-Navbar-Item">
            <Icon fitted name="info" inverted />
          </Menu.Item>
          <Menu.Item name="bell" className="Trello-Navbar-Item">
            <Icon fitted name="bell" inverted />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

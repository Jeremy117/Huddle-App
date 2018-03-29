import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Huddle</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/components/signUp"
              to="/components/signUp"
            >
              Sign In
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/components/Register"
              to="/components/Register"
            >
              Register
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/components/Dashboard"
              to="/components/Dashboard"
            >
              Dashboard
            </NavItem>
            <NavItem
              //eventKey={4}
              eventKey={5}
              componentClass={Link}
              href="/components/Profile"
              to="/components/Profile"
            >
              Weather
            </NavItem>
            <NavItem
              eventKey={6}
              componentClass={Link}
              href="/components/weather"
              to="/components/weather"
            >
              Profile
            </NavItem>
            <NavItem
              eventKey={7}
              componentClass={Link}
              href="/components/article"
              to="/components/article"
            >
              Articles
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

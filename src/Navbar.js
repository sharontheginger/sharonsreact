import React, { Component } from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';


class NavbarInstance extends Component {
  render() {
    return (
        <div>
        <Navbar>
          <div className="Flex-container">
            <div className="Greybox"></div>
            <div className="Firstbox">Imagine</div>
            <div className="Secondbox">Design</div>
            <div className="Thirdbox">Create</div>
            <div className="Greybox"></div>
          </div>
          <Nav>
          <NavItem id="NavbarInstance" eventKey={1} href="mailto:sharontheginger@me.com">Contact Me
          </NavItem>
          <NavDropdown eventKey={3} title="Projects" id="NavbarInstance">
            <MenuItem eventKey={3.1}>Project 1</MenuItem>
            <MenuItem eventKey={3.2}>Project 2</MenuItem>
            <MenuItem eventKey={3.3}>Project 3</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>All Projects</MenuItem>
          </NavDropdown>
          </Nav>
          </Navbar>
        </div>
    );
}
}
export default NavbarInstance;

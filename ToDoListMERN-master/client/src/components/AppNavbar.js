import React, { Component } from 'react';
import {
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'

class AppNavbar extends Component {
    
    state = {
        isOpen: false
    }

toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

render() {
    return (
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <NavbarBrand href="/">List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/Pranav50/ToDoListMERN">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );  
}

}

export default AppNavbar







import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { LOGO_URL, GITHUB_URL } from '../../constants';

export default class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <div className='container'>
          <NavbarBrand href="/">
              <span className='D'>
                D{' '}
              </span>
              F A K E R
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href='/'>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/analyse'>Analyse</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/developer'>Developer</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/history'>History</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../../assets/logo.png';
import LogoutBtn from '../LogoutBtn';

const HeaderNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light
      style={{
          backgroundColor:'#733572',
          color:'white'
      }}
      >
        <NavbarBrand href="/" className="mr-auto">
            <img src={logo} alt="binar logo"/>
        </NavbarBrand>
        <Nav>
        <NavItem>
              {props.username}<p>{props.role}</p>
        </NavItem>
        <NavItem>
              <NavLink href="/components/"><LogoutBtn btnText="Keluar"/></NavLink>
        </NavItem>
      
        
        </Nav>
        {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>
    </div>
  );
}

export default HeaderNav;
import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Header() {
  const navStyle = {
    color: 'orange'
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Rick and Morty Fanpage</NavbarBrand>
        <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink style={navStyle} href="/">Homepage</NavLink>
            </NavItem>
            <NavItem>
            <NavLink style={navStyle} href="/characters">Characters</NavLink>
            </NavItem>
            <NavItem>
            <NavLink style={navStyle} href="/search"> Search Form</NavLink>
            </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function MyNavBar(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar {...args} light expand="md">
        <NavbarBrand>Rick and Morty</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/favs">Favs</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;

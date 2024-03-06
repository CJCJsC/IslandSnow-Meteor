import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BiFacebook, BiTwitter, BiPinterest, BiInstagram, BiHouseFill, BiSearch, BiPersonFill, BiCart2 } from 'react-icons/bi';

const SecondMenu = () => (
    <Nav className="justify-context-md-center py-3">
      <NavDropDown title"MEN"></NavDropDown>
      <NavDropDown title"WOMEN"></NavDropDown>
      <NavDropDown title"KIDS"></NavDropDown>
      <NavDropDown title"BRANDS"></NavDropDown>
      <Nav.Link>Search</Nav.Link>
    </Nav>
);

export default
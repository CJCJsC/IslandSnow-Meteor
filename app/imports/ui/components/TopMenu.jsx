import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BiFacebook, BiTwitter, BiPinterest, BiInstagram, BiHouseFill, BiSearch, BiPersonFill, BiCart2 } from 'react-icons/bi';

const TopMenu = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link><BiFacebook/></Nav.Link>
          <Nav.Link><BiTwitter/></Nav.Link>
          <Nav.Link><BiPinterest/></Nav.Link>
          <Nav.Link><BiInstagram/></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link><BiHouseFill/> </Nav.Link>
          <Nav.Link><BiSearch/> </Nav.Link>
          <Nav.Link><BiPersonFill/> </Nav.Link>
          <NavDropdown title={<BiCart2/>}>
            <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
);

export default TopMenu;
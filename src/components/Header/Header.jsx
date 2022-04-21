import React from 'react'
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.scss";
export default function Header() {
  return (
    <>
      <Navbar expand="lg" bg="white" fixed="top" className="p-0 header">
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>

          <Nav className=" d-lg-flex d-none mx-auto justify-content-around">
            <Nav.Link as={NavLink} to="/">
              HOME
            </Nav.Link>

            <Nav.Link as={NavLink} to="/">
              ABOUT
            </Nav.Link>

            <NavDropdown title="Pages" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/">
              CONTACT
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </Nav.Link>

            <Nav.Link as={NavLink} to="/">
              SIGNIN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

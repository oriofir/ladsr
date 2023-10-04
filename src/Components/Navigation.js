import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Nav>
        <Navbar collapseOnSelect variant="dark" expand="md" className="Navbar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Libary">
                Library
              </Nav.Link>
              <Nav.Link as={Link} to="/Events">Events</Nav.Link>
              <Nav.Link as={Link} to="/forsale">For Sale</Nav.Link>
              <Nav.Link as={Link} to="/Membership">Membership</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Nav>
    </div>
  );
}

export default Navigation;

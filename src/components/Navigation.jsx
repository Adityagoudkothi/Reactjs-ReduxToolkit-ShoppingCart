import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigations = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const handleClick = () => {
    navigations("/cart");
  };
  const handleClicks = () => {
    navigations("/");
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        style={{ boxShadow: "2px -3px 9px 6px #efefef" }}
      >
        <Container>
          <Navbar.Brand href="/" className="bg1">
            React-Redux
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" onClick={handleClicks}>
                Home
              </Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                eventKey={2}
                href="#"
                role="button"
                onClick={handleClick}
              >
                <i className="fal fa-shopping-cart"></i> {cart.length}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

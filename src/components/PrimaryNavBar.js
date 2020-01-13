import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../media/logo.JPG";
import { Link } from "react-router-dom";

const PrimaryNavBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navMainRight">
          <Link to="/any">Advice</Link>
          <Link to="/any">Public Offers</Link>
          <Link to="/any">About Us</Link>
          <Link to="/any">Contuct Us</Link>
          <Link to="/any">Advertisemen</Link>
        </Nav>

        <Nav className="ml-auto navMainLeft">
          <Nav.Link href="#">
            <i className="fa fa-search"></i>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="fa fa-envelope"></i>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="fa fa-bell"></i>
          </Nav.Link>
          <Nav.Link href="#">
            <h4>EN</h4>
          </Nav.Link>
          <Nav.Link href="#">
            <div className="userIcon">
              <i className="fa fa-user"></i>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrimaryNavBar;

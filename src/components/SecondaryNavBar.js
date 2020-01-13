import React from "react";
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SecondaryNavBar = () => {
  return (
    <Row className="">
      <Col xs lg="5">
        <Navbar bg="white" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav2" />
          <Navbar.Collapse id="basic-navbar-nav2">
            <Nav className="navSecondary">
              <Link to="/any">Wall</Link>
              <Link to="/any">Companies</Link>
              <Link to="/any">Organizations</Link>
              <Link to="/any">Products</Link>
              <Link to="/any" className="navSecondaryItem">
                Jobs
              </Link>
              <Link to="/any" className="navSecondaryItem">
                Events
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default SecondaryNavBar;

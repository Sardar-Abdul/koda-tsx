import React from "react";
import { StyledTopbar } from "../styles/topbarStyle";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topbar: React.FC = () => {
  return (
    <StyledTopbar>
      <Navbar expand="sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">koda.</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav navbar-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledTopbar>
  );
};

export default Topbar;

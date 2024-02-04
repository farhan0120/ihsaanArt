import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/ArtGalleryNavbar.css'; // Import a custom CSS file for additional styling

function ArtGalleryNavbar() {
  return (
    <Navbar expand="lg" className="luxurious-navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          Art Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link eb-garamond-font">
              Home
            </Nav.Link>
            <NavDropdown title="Places" id="basic-nav-dropdown" className="eb-garamond-font">
              <NavDropdown.Item href="#action/3.1">Palestine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Jordan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Israel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Egypt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">UAE</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Religions" id="basic-nav-dropdown" className="eb-garamond-font">
              <NavDropdown.Item href="#action/3.1">Judaism</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Christianity
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Islam</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ArtGalleryNavbar;

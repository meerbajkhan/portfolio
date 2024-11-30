import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import '../css/Navbaar.css'
function Navbaar() {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        {/* <Navbar.Brand href="#home">Meer-Portfolio</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='about'>
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#about">About</Nav.Link> */}
            <Nav.Link href="#skills">Skills</Nav.Link>
            {/* <Nav.Link href="#project">Project</Nav.Link> */}
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    </div>
  )
}

export default Navbaar

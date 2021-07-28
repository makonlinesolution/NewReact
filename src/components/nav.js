import React from 'react';
import { Button , Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../assets/mainLogo.svg'

function Navmenu()  {
            return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      
        <Navbar.Collapse className="justify-content-end">
            <Nav activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        )
      }

export default Navmenu;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'


function NavbarBlock() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">GraphQL</Navbar.Brand>
          <Nav className="me-auto">
                <NavLink 
                  style={{
                    'textDecoration': 'none', 
                    'color': 'lightgray', 
                    'fontSize': '16px'
                  }} 
                  className="me-3" 
                  to={'#'}
                >
                  Участники
                </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBlock;
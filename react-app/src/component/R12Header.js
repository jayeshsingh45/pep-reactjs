import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function R12Header() {
    return (
        <>
            <header>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">React Developer Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section
        className="hero-section"
        style={{
          backgroundColor: '#7312fc',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <Container >
          <h1 className="display-4">Hi, I'm Jayesh Singh</h1>
          <p className="lead">A passionate React Developer crafting interactive web experiences.</p>
          <Button variant="primary" size="lg" href="#contact">
            Get in Touch
          </Button>
        </Container>
      </section>
    </header>
        </>
    )
}

export default R12Header
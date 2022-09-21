import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Items_Store from './Components/Items_Store'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

function App() {


  

  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={reactLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Store App Front
          </Navbar.Brand>
        </Container>
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1">Cart Items :- </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
    
    </>
  )
}

export default App

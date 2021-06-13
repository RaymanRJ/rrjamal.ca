import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Home from '../home/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function Navigation() {
  return (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand as={Link} to ="/">Rayman Jamal</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route render={function () {
        return <p>Not found</p>
      }} />
    </Switch>
  </div>
</div>
  )
}

export default Navigation
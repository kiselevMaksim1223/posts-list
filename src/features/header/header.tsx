import React, { useState } from 'react'

import { Navbar, Nav, Container, Offcanvas, Button, Card, ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import myAva from '../../common/assets/myAvatar.png'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Button variant="outline-info" onClick={handleToggleMenu}>
          Menu
        </Button>{' '}
      </Container>
      <Offcanvas show={showMenu} onHide={handleToggleMenu} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card style={{ width: '100%', margin: '0  auto' }}>
            <Card.Header className={'d-flex align-items-center p-3'}>
              <Card.Img
                className="flex-shrink-0"
                variant="left"
                src={myAva}
                width={40}
                height={40}
              />
              <Card.Title className="flex-grow-1 ms-3 ">kiselev1223maksim@gmail.com</Card.Title>
            </Card.Header>
            <ListGroup variant="flush" className={'fs-5'}>
              <ListGroup.Item>
                <Nav.Item>
                  <NavLink onClick={handleToggleMenu} to="/posts">
                    Posts
                  </NavLink>
                </Nav.Item>
              </ListGroup.Item>
              <ListGroup.Item>
                <Nav.Item>
                  <NavLink onClick={handleToggleMenu} to="/about">
                    About me
                  </NavLink>
                </Nav.Item>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {/*<Nav className="flex-column">*/}
          {/*  <Nav.Item>*/}
          {/*    <Nav.Link href="/posts">Posts</Nav.Link>*/}
          {/*  </Nav.Item>*/}
          {/*  <Nav.Item>*/}
          {/*    <Nav.Link href="/about">About me</Nav.Link>*/}
          {/*  </Nav.Item>*/}
          {/*</Nav>*/}
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  )
}

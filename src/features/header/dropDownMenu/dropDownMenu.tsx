import React, { FC } from 'react'

import { Card, ListGroup, Nav, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import myAva from '../../../common/assets/myAvatar.png'

type DropDownMenuType = {
  showMenu: boolean
  callBack: () => void
}

export const DropDownMenu: FC<DropDownMenuType> = ({ showMenu, callBack }) => {
  return (
    <Offcanvas show={showMenu} onHide={callBack} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Card style={{ width: '100%', margin: '0  auto' }}>
          <Card.Header className={'d-flex align-items-center p-3'}>
            <Card.Img className="flex-shrink-0" variant="left" src={myAva} width={40} height={40} />
            <Card.Title className="flex-grow-1 ms-3 ">kiselev1223maksim@gmail.com</Card.Title>
          </Card.Header>
          <ListGroup variant="flush" className={'fs-5'}>
            <ListGroup.Item>
              <Nav.Item>
                <NavLink onClick={callBack} to="/posts">
                  Posts
                </NavLink>
              </Nav.Item>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Item>
                <NavLink onClick={callBack} to="/about">
                  About me
                </NavLink>
              </Nav.Item>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

import React, { useState } from 'react'

import { Button, Container, Navbar } from 'react-bootstrap'

import { DropDownMenu } from './dropDownMenu/dropDownMenu'

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
        <DropDownMenu showMenu={showMenu} callBack={handleToggleMenu} />
      </Container>
    </Navbar>
  )
}

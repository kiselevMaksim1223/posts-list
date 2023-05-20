import React, { useState } from 'react'

import { Button, Container, Navbar } from 'react-bootstrap'
import { CiMenuBurger } from 'react-icons/ci'

import { DropDownMenu } from './dropDownMenu/dropDownMenu'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Button className={'px-2'} variant="outline-info" onClick={handleToggleMenu}>
          <CiMenuBurger size={20} />
        </Button>{' '}
        <DropDownMenu showMenu={showMenu} callBack={handleToggleMenu} />
      </Container>
    </Navbar>
  )
}

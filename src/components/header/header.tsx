import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../sidebar'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <div onClick={showSiderbar} style={{cursor:'pointer'}}><FaBars color='#d05d1b;' /></div>
      {sidebar && <Sidebar active={setSidebar}  />}
      <h1>Últimos filmes adicionados</h1>
    </Container>
  )
}

export default Header
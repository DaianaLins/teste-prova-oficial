import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome,
  FaChartBar
} from 'react-icons/fa'
import { MdOutlinePersonAddAlt } from "react-icons/md";

import SidebarItem from '../sidebarItem'
import { Link } from 'react-router-dom';

const Sidebar = ({ active }: any) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <div onClick={closeSidebar} ><FaTimes color='#d05d1b' />  </div>
        <div style={{paddingLeft: '80px', paddingTop: '50px', fontSize: '50px', fontWeight: 900, fontFamily: 'sans-serif'}}>C</div>
      <Content>
       <Link to='/' style={{textDecoration:"none"}}><SidebarItem  Icon={FaHome} Text="Início" /></Link> 
        <Link to='/adicionar' style={{textDecoration:"none"}}><SidebarItem  Icon={MdOutlinePersonAddAlt} Text="Adicionar" /></Link>
      </Content>
    </Container>
  )
}

export default Sidebar
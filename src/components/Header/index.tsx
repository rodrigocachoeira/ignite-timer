import { HeaderContainer } from './styles'

import logoignite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoignite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24}></Timer>
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24}></Scroll>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

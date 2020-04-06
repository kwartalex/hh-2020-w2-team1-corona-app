import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import stayhome from './img/stayhome.png'
import global from './img/global.png'
import recovery from './img/germany.png'

export default function Footer() {
  const navData = [
    { images: stayhome, id: '/' },
    { images: global, id: '/global' },
    { images: recovery, id: '/recovery' },
  ]

  return (
    <FooterStyled>
      <nav>
        {navData.map((item) => (
          <NavLink
            exact
            to={item.id}
            activeStyle={{
              background: 'var(--secondary)',
            }}
          >
            <img src={item.images} alt={item.id} />
          </NavLink>
        ))}
      </nav>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background: var(--primary);
  width: 100%;

  nav {
    display: flex;
    justify-content: space-evenly;
  }

  img {
    box-sizing: content-box;
    height: 40px;
    margin-top: 4px;
  }
`

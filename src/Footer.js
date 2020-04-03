import React from 'react'
import styled from 'styled-components/macro'

import stayhome from './img/stayhome.png'
import global from './img/pandemic.png'
import germany from './img/search.png'

export default function Footer({ setCurrentPage }) {
  const buttonData = [
    { images: stayhome, id: 'home' },
    { images: global, id: 'global' },
    { images: germany, id: 'germany' },
  ]

  return (
    <FooterStyled>
      <nav>
        {buttonData.map(item => (
          <button key={item.id} onClick={() => setCurrentPage(item.id)}>
            <img src={item.images} alt={item.id} />
          </button>
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

  button {
    padding: 0;
    border: none;
    background: transparent;
  }

  button > img {
    box-sizing: content-box;
    height: 40px;
    margin-top: 4px;
  }
`

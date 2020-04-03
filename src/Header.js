import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <HeaderStyled>
      <h1>#corontäne</h1>
      <p>Get well soon!</p>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background: var(--primary);
  width: 100%;
  margin: 0;

  h1 {
    color: white;
    text-align: center;
    margin-bottom: 0;
    margin-top: 4px;
  }

  p {
    color: white;
    text-align: center;
    margin-top: 0;
  }
`

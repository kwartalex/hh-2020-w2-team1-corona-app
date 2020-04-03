import React from 'react'
import styled from 'styled-components/macro'

export default function Home() {
  return (
    <ContentWrapper>
      <h2>Corontäne: Nicht so schlimm wie alle denken?</h2>
      <p>
        Die COVID-19-Pandemie (umgangssprachlich auch Coronavirus-Pandemie,
        Corona-Pandemie, Coronavirus-Krise oder Corona-Krise, ehemals auch
        Coronavirus-Epidemie) ist ein Ausbruch der neuartigen Atemwegserkrankung
        COVID-19 (oder „Covid-19“, für englisch corona virus disease 2019).
        Diese Erkrankung war erstmals Ende Dezember 2019 in der Millionenstadt
      </p>
      <iframe
        width="100%"
        height="36%"
        src="https://www.youtube.com/embed/hMopOpiNB1s"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  padding: 12px;
  overflow: scroll;
`

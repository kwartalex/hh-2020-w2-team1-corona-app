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
        Wuhan der chinesischen Provinz Hubei auffällig geworden, entwickelte
        sich im Januar 2020 in China zur Epidemie und breitete sich schließlich
        weltweit aus. Der Ausbruch wurde durch das bis dahin unbekannte
        Coronavirus SARS-CoV-2 ausgelöst. Dieses Virus wird auch als neuartiges
        Coronavirus bezeichnet.
      </p>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  padding: 6px;
  overflow: scroll;
`

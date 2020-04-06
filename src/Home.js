import React from 'react'
import styled from 'styled-components/macro'

export default function Home() {
  return (
    <ContentWrapper>
      <h2>Corontäne: The Covid-19 Pandemic</h2>
      <p>
        We are witnessing a substantial increase in the number of infections in
        Germany. As a result, the authorities have imposed drastic restrictions
        on everyday life, in a move to slow down any further spread of the
        virus. On 11 March 2020, the Director-General of WHO declared the spate
        of infections caused by SARS-CoV-2 (COVID-19) a pandemic.
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

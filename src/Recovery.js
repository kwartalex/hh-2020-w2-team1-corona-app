import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

export default function Recovery() {
  const [countryData, setCoronaData] = useState([])

  useEffect(() => {
    fetch('https://corona.lmao.ninja/countries?sort=country')
      .then((response) => response.json())
      .then((data) => setCoronaData(data.reverse()))
  }, [])

  return (
    <ContentWrapper>
      <h2>Top 10 Countries with the Highest Recovery Numbers</h2>
      {countryData.sort((countryA, countryB) => (
        <h2 key={country.country}>
          {' '}
          {countryA.recovered > countryB.recovered}
        </h2>
      ))}
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  padding: 12px;
  overflow: scroll;
`

/*<ContentWrapper>
<h2>Top 10 Countries with the Highest Recovery Numbers</h2>
{countryData.map((country) => (
  <p key={country.country}>{country.recovered}</p>
))
.sort((countryA, countryB) => (<h2 countryA.recovered > countryB.recovered>{country.recovered}</h2>))}
</ContentWrapper>*/

import React from 'react'
import styled from 'styled-components/macro'

export default function Recovery({ countryData }) {
  const sortedByRecovered = countryData
    .slice()
    .sort((countryA, countryB) => countryB.recovered > countryA.recovered)
    .slice(0, 11)

  return (
    <ContentWrapper>
      <h2>Top 10 Recovery Numbers and Recovery Rates</h2>
      {sortedByRecovered.map((country) => (
        <p key={country.country}>
          {country.country}
          {country.recovered}
          rate:
          {Math.round(
            (country.recovered / (country.cases - country.active)) * 100
          )}
        </p>
      ))}
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  padding: 12px;
  overflow: scroll;
`

/*

rate:
          {Math.round(
            (country.recovered / (country.cases - country.active)) * 100
          )}
        </p>*/

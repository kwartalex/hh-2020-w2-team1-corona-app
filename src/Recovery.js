import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Recovery.propTypes = {
  countryData: PropTypes.array.isRequired,
}

export default function Recovery({ countryData }) {
  const sortedByRecovered = countryData
    .slice()
    .sort((countryA, countryB) => countryB.recovered > countryA.recovered)
    .slice(0, 11)

  return (
    <ContentWrapper>
      <h2>Top 10 Recovery Numbers and Recovery Rates</h2>
      {sortedByRecovered.map((country) => (
        <div key={country.country}>
          <h3>{country.country}</h3>
          <p>Total Number of Recoveries: {country.recovered}</p>
          <p>
            Recovery Rate: &nbsp;
            {Math.round(
              (country.recovered / (country.cases - country.active)) * 100
            )}
            %
          </p>
        </div>
      ))}
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  padding: 12px;
  overflow: scroll;

  div {
    background: var(--secondary);
    padding: 6px;
    margin-bottom: 8px;
    border-radius: 12px;
  }

  h3,
  p {
    padding: 0 16px;
    border-radius: 12px;
    color: white;
  }

  p {
    background: var(--primary);
    padding: 12px;
    margin: 4px;
  }
`

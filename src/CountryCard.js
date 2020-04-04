import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function CountryCard({ country }) {
  const [toggled, setToggled] = useState(false)

  return (
    <CardBox key={country.country}>
      <h3 onClick={() => setToggled(!toggled)}>{country.country}</h3>
      <CardContent isVisible={toggled}>
        <div>
          <p>Total Cases: {country.cases}</p>
          <p>Active Cases: {country.active}</p>
          <p>Recovered Cases: {country.recovered}</p>
          <p>Cases per Million: {country.casesPerOneMillion}</p>
        </div>
      </CardContent>
    </CardBox>
  )
}
const CardBox = styled.section`
  background: var(--secondary);
  padding: 6px;
  margin-bottom: 8px;
  border-radius: 12px;
  color: white;

  h3,
  p {
    padding: 0 16px;
  }

  div {
    background: var(--primary);
    border-radius: 12px;
    padding: 8px 0;
  }

  p {
    margin: 0;
    font-weight: 300;
  }
`

const CardContent = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`

import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function CountryCard({ country }) {
  const [toggled, setToggled] = useState(false)

  return (
    <CardBox key={country.country}>
      <h3 onClick={() => setToggled(!toggled)}>{country.country}</h3>
      <CardContent isVisible={toggled}>
        <p>Cases: {country.cases}</p>
        <p>Recovered: {country.recovered}</p>
        <p>Cases per Million: {country.casesPerOneMillion}</p>
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

  p {
    margin: 0;
  }
`

const CardContent = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`

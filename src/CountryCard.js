import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function CountryCard({ country }) {
  const [toggled, setToggled] = useState(false)

  return (
    <section key={country.country}>
      <h2 onClick={() => setToggled(!toggled)}>{country.country}</h2>
      <CardContent isVisible={toggled}>
        <p>Cases: {country.cases}</p>
        <p>Recovered: {country.recovered}</p>
        <p>Cases per Million: {country.casesPerOneMillion}</p>
      </CardContent>
    </section>
  )
}

const CardContent = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
`

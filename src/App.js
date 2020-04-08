import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Global from './Global'
import Recovery from './Recovery'
import { loadCountries } from './services'

export default function App() {
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    loadCountries()
      .then((data) => setCountryData(data.reverse()))
      .catch((error) => console.log(error))
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/global">
          <Global countryData={countryData} />
        </Route>
        <Route path="/recovery">
          <Recovery countryData={countryData} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

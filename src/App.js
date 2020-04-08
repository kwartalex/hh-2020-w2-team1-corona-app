import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Global from './Global'
import Recovery from './Recovery'
import { loadCountries, saveToStorage, loadFromStorage } from './services'

export default function App() {
  const localCountryData = loadFromStorage('countryData')
  const [countryData, setCountryData] = useState([localCountryData || []])

  const lastSavedDate = loadFromStorage('lastSavedDate')

  useEffect(() => {
    lastSavedDate !== getCurrentDate() &&
      loadCountries()
        .then((data) => setCountryData(data.reverse()))
        .catch((error) => console.log(error))
  }, [lastSavedDate])

  useEffect(() => {
    saveToStorage('countryData', countryData)
    saveToStorage('lastSavedDate', getCurrentDate())
  }, [countryData])

  function getCurrentDate() {
    return new Date().toLocaleDateString('de-DE')
  }

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

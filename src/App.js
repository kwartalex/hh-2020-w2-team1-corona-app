import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Global from './Global'
import Recovery from './Recovery'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    fetch('https://corona.lmao.ninja/countries?sort=country')
      .then((response) => response.json())
      .then((data) => setCountryData(data.reverse()))
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header />
      {currentPage === 'home' && <Home />}
      {currentPage === 'global' && <Global countryData={countryData} />}
      {currentPage === 'recovery' && <Recovery countryData={countryData} />}
      <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  )
}

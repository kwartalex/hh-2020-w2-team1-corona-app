import React, { useState } from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <GlobalStyles />
      <Header />
      {currentPage === 'home' && <Home />}
      <Footer setCurrentPage={setCurrentPage} />
    </>
  )
}

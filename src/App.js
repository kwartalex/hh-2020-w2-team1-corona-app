import React, { useState } from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Global from './Global'
import Germany from './Germany'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <GlobalStyles />
      <Header />
      {currentPage === 'home' && <Home />}
      {currentPage === 'global' && <Global />}
      {currentPage === 'germany' && <Germany />}
      <Footer setCurrentPage={setCurrentPage} />
    </>
  )
}

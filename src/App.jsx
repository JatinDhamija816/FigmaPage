import React from 'react'
import Navbar from './components/Navbar'
import Navigation from './components/Navigation'
import Main from './components/Main'
import CreateFlashcard from './components/CreateFlashcard'
import FAQ from './components/FAQ'

const App = () => {
  return (
    <div className='mx-14 sm:mx-5'>
      <Navbar />
      <Navigation />
      <Main />
      <CreateFlashcard />
      <FAQ />
    </div>
  )
}

export default App

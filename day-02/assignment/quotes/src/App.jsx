import { useState } from 'react'
import Header from './components/Header'
import Quote from './components/Quote'
import Footer from './components/Footer'
import './App.css'

function App() {

  const appInfo = {
    title: 'Random Quote Machine',
    author: 'Michael LaRoy',
    copyright: 2024
  }

  return (
    <>
      <Header title={appInfo.title} />
      <main>
        <Quote />
      </main>
      <Footer copyright={appInfo.copyright} author={appInfo.author} />
    </>
  )
}

export default App

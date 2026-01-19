import { useState } from 'react'
import './App.css'
import PageHome from './components/PageHome'
import useDarkMode from './hooks/useDarkMode'

function App() {
  const { toggle, themeClass } = useDarkMode();

  return (
      <div className={`wrapper ${themeClass}`}>
            <div className="container">
                <button onClick={toggle} className="toggle-button">
                    Toggle Theme
                </button>
                <PageHome />
            </div>
        </div>
  )
}

export default App

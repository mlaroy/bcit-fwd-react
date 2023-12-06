import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

    const appInfo = {
        title: 'My First App',
        slogan: 'Best App Ever!!!',
        author: 'Michael LaRoy',
        copyright: 2021
    }

  return (
    <div className="App">
        <Header title={appInfo.title} slogan={appInfo.slogan} />
        <Main />
        <Footer copyright={appInfo.copyright} author={appInfo.author} />
    </div>
  )
}

export default App

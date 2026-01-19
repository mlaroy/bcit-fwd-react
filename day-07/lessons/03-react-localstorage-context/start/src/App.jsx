import { useState } from 'react'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
// import { store } from './store/store';
// import { Provider } from 'react-redux';
import './styles/styles.scss';
import { UserProvider } from './context/UserContext';

function App() {

  return (
    <>
        <UserProvider>
            <AppRouter />
        </UserProvider>
    </>
  )
}

export default App

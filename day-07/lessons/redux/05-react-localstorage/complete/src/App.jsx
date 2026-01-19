import { useState } from 'react'
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './styles/styles.scss';

function App() {

  return (
    <>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </>
  )
}

export default App

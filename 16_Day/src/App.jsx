import { useState } from 'react'
import stores from './Store'
import { Provider } from "react-redux";
import CoinCreate from './CoinCreate';


function App() {
  return (
    <Provider store={stores}>
    <CoinCreate/>
    </Provider>
  )
}

export default App

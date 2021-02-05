import React, { useState } from 'react'
import { Reset } from 'styled-reset'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Index from './pages/Index'
import ProductDetail from './pages/ProductDetail'
import RegistProduct from './pages/RegistProduct'
import Header from './components/Header'
import './App.css'
import Pokemon from './pages/Pokemon'

export const Context = React.createContext()

const App = () => {
  const [expanded, setExpanded] = useState(false)
  const store = { expanded: expanded, toggleExpand: setExpanded }

  return (
    <Context.Provider value={store}>
      <Reset />
      <Router>
        <Switch>
          <Route path='/header'>
            <Header />
          </Route>
          <Route path='/product-detail'>
            <ProductDetail />
          </Route>
          <Route path='/regist-product'>
            <RegistProduct />
          </Route>
          <Route path='/pokemon'>
            <Pokemon />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>)
}

export default App;
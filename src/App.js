import React from 'react'
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

const App = () => {
  return (
    <React.Fragment>
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
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
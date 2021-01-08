import React from 'react'
import { Reset } from 'styled-reset'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Index from './pages/Index'
import ProductDetai from './pages/ProductDetai'
import RegistProduct from './pages/RegistProduct'

const App = () => {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Switch>
          <Route path='/product-detail'>
            <ProductDetai />
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
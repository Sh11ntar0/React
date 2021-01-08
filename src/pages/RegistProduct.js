import React from 'react'
import { Link } from 'react-router-dom'

const RegistProduct = props => {
  return (
    <React.Fragment>
      <h1>RegistProduct</h1>
      <p><Link to='/'>Top</Link></p>
      <p><Link to='/product-detail'>to product-detail</Link></p>
    </React.Fragment>
  )
}

export default RegistProduct
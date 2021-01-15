import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <React.Fragment>
            <h1>ProductDetail</h1>
            <p><Link to='/'>Top</Link></p>
            <p><Link to='/regist-product'>to regist-product</Link></p>
        </React.Fragment>
    )
}

export default Header
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import LefNav from './LeftNav'

const WrapperStyle = styled.div`
margin: 0 auto;
padding-top: 16px;
padding-bottom: 16px;
width: 100%;
max-width: 1020px;
`

const Wrapper = props => (
  <React.Fragment>
    <LefNav />
    <Header />
    <WrapperStyle className="wrapper">
      {props.children}
    </WrapperStyle>
  </React.Fragment>
)

export default Wrapper
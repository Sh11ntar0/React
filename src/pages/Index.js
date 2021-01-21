import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import H2 from '../components/HeadlineLevel2'

const ListStyle = styled.ul`
display: grid;
grid-gap: 72px;
grid-auto-rows: 200px;
grid-template-columns: repeat(auto-fill, 200px);
margin-top: 20px;
`

const ImageListItem = [...Array(8)].map(() => (
  <li><img src="./img/blough-heavy-duty-bed-frame.jpg" alt=""/></li>
))

const ProductDetail = props => {
  return (
    <React.Fragment>
      <Wrapper>
        <H2>See what's selling</H2>
        <ListStyle>
          {ImageListItem}
        </ListStyle>
      </Wrapper>
    </React.Fragment>
  )
}

export default ProductDetail
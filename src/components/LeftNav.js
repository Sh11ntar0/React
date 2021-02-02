import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { Context } from '../App'

const NavStyle = styled.div`
position: fixed;
z-index: 10;
opacity: ${props => props.expanded ? '1' : "0"};
visibility: ${props => props.expanded ? 'visible' : "hidden"};
width: ${props => props.expanded ? '200px' : "0"};
background-color: rgba(55,55,55,.8);
min-height: 100vh;
transition: .4s;
section.in {
  margin: 40px 10px 30px 20px;
}
ul.grid {
  display: grid;
  grid-gap: 16px;
  grid-auto-rows: 40px;
  align-items: center;
}
li.item {
  a {
    color: #ffffff;
    text-decoration: none;
    &.active {
      font-weight: 900;
    }
  }
}

`

const links = [
    { link: '/', text: 'Home' },
    { link: '/search-result', text: 'search' },
    { link: '/regist-product', text: 'Register' },
    { link: '/sign-up', text: 'Sign Up' },
]

const ListItem = links.map((item, i) => (
    <li className="item" key={i}><NavLink to={item.link} activeClassName="active" className="link">{item.text}</NavLink></li>
))

const LeftNav = props => {
    const store = useContext(Context)

    return (
        <NavStyle expanded={store.expanded}>
            <section className="in">
                <ul className="grid">
                    {ListItem}
                </ul>
            </section>
        </NavStyle>
    )
}

export default LeftNav
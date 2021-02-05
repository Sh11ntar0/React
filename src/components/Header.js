import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import HamburgerMenu from './HamburgerMenu'

const HeaderStye = styled.div`
height: 108px;
box-shadow: 0px 0px 10px;
border-bottom: 1px solid #F5F5F5;
width: 100%;
`

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
min-width: 700px;
width: 100%;
max-width: 1020px;
margin: 0 auto;
.top {
display: flex;
width: 100%;
height: 50%;
line-height: 7vh;
}
.left {
min-width: 36px;
width: 36px;
margin-right: 45px;
padding-top: 5px;
img {
  max-width: 100%;
}
}
.right {
width: 100%;
}
.search {
width: 100%;
height: 5vh;
border-radius: 5px;
border: 0;
background-color: #F5F5F5;
padding-left: 15px;
}
.search-box {
  position: relative;
  i {
    position: absolute;
    top: 2.5vh;
    right: 10px;
  }
  a:visited {
    color: #222222;
  }
}
.bottom {
display: flex;
justify-content: space-between;
height: 50%;
line-height: 7vh;
}
.bottom-left {
display: flex;
font-weight: bold;
min-width: 250px;
}
.bottom-left-item {
margin-right: 30px;
  i {
    color: #EB352D;
    margin-right: 3px;
  }
}
.link {
text-decoration: none;
color: #222222;
}
.bottom-right {
display: flex;
min-width: 450px;
}
.bottom-right-item a i {
margin-right: 3px;
}
.bottom-right-item {
margin-left: 30px;
}
.regist-header-logo {
display: flex;
justify-content: space-between;
max-width: 250px;
min-width: 250px;
margin: 50px auto;
}
.regist-logo-name {
margin: auto;
font-size: 31px;
}
`

const BottmLeftItem = props => (
    <div className={`bottom-${props.side || 'left'}-item`}>
        <NavLink className="link" activeClassName="active" to={props.href}>
            <i className={props.iconClassName}></i>
            <span>{props.text}</span>
        </NavLink>
    </div>
)

const Header = props => {
    return (
        <HeaderStye>
            <Container>
                <div className="top">
                    <div className="left">
                        <NavLink to='/' activeClassName="active">
                            <img src="./img/photo/letter-145996_1280.png" alt="logo" />
                        </NavLink>
                    </div>

                    <div className="right">
                        <div className="search-box">
                            <input className="search" type="search" placeholder="What are you looking for?" />
                            <NavLink to="/search-result" activeClassName="active">
                                <i className="fas fa-search"></i>
                            </NavLink>
                        </div>
                    </div>
                    <HamburgerMenu />
                </div>

                <div className="bottom">
                    <div className="bottom-left">
                        <BottmLeftItem href={'/'} iconClassName={'fas fa-exchange-alt fa-lg'} text={'Barter'} />
                        <BottmLeftItem href={'/'} iconClassName={'fas fa-shopping-cart fa-lg'} text={'Sell & Buy'} />
                    </div>

                    <div className="bottom-right">
                        <BottmLeftItem side={'right'} href={'/regist-product'} iconClassName={'fas fa-dollar-sign fa-lg'} text={'Add items for selling'} />
                        <BottmLeftItem side={'right'} href={'/'} iconClassName={'far fa-heart fa-lg'} text={'My likes'} />
                        <BottmLeftItem side={'right'} href={'/sign-up'} iconClassName={'fas fa-user fa-lg'} text={'My page'} />
                    </div>
                </div>
            </Container>
        </HeaderStye>
    )
}

export default Header
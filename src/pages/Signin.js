import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import firebase, { auth } from '../config/Firebase'

const Div = styled.div`
background-color: #F5F5F5;
min-height: 100vh;
header {
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 50px;
    max-width: 270px;
    min-width: 250px;
  }
  a.logo {
    width: 36px;
  }
  p.headline {
    font-size: 30px;
    font-weight: 700;
  }
}
div.contents {
  margin-top: 80px;
  margin-left: auto;
  margin-right:auto;
  padding-top: 50px;
  padding-bottom: 60px;
  width: 700px;
  background-color: #ffffff;
}
h2.h2{
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}
ul.list {
  margin: 40px auto 0;
  width: 40%;
  line-height: 1.6;
}
p.button {
  display: flex;
  justify-content: center;
  margin: 40px auto 0;
  padding: 0.6em 1em;
  width: 30%;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: .4s;
  cursor: pointer;
  &:hover {
    background: #67c5ff;
    color: white;
  }
}
`

const Signin = props => {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])

  const signin = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithRedirect(provider)
  }

  const signout = () => {
    auth.signOut()
  }

  return (
    <Div>
      <header>
        <div>
          <Link className="logo" to="/">
            <img src="https://cdn.pixabay.com/photo/2013/07/12/12/36/letter-145996_1280.png" alt=""/>
          </Link>
          <p className="headline">Barter & Buy</p>
        </div>
      </header>
      <div className="contents">
        {currentUser ? (
          <React.Fragment>
            <h2 className="h2">Sign Out</h2>
            <ul className="list">
              <li>Name: { currentUser.displayName }</li>
              <li>Email: { currentUser.email }</li>
            </ul>
            <p className="button" onClick={signout}>Google SignOut</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h2 className="h2">Sign Up</h2>
            <p className="button" onClick={signin}>Google Login</p>
          </React.Fragment>
        )}
      </div>
    </Div>
  )
}

export default Signin
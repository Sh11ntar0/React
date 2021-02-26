FirebaseのAuth機能を実装してみる
===

## 1. Firebaseのパッケージをインストール

```bash
npm install Firebase
```

or

```bash
yarn add firebase
```


## 2. サンプルページ作成

1. `src/pages/Signin.js`を作成
    ```js
    const Signin = props => {
      return (
        <div>
          <h1>Signin</h1>
        </div>
      )
    }

    export default Signin
    ```

1. `src/config/Firebase.js`を作成
1. `App.js`にルーティングを追加

```js
import Signin from './pages/Signin'

// Pokemonの下あたりに追加
<Route path='/pokemon'>
  <Pokemon />
</Route>
<Route path='/signin'>
  <Signin />
</Route>
```



## 3. 設定ファイルの実装

1. `env.local`にAPIKeyをコピペして再起動(後ほどSlackで送ります)

> env.localはgitで**管理しない**よう注意していください。要`.gitignore`確認

<br>

`src/confidence/Firebase.js`

```js

import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

var auth_obj = firebase.auth();
export default firebase;
export const auth = auth_obj;
```

4. `src/pages/Signin.js`の実装
---

```js
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
```

時間があまったら

## 4. ログインしていないと遷移できないページを作る

参考: [How to create guarded routes for your React\-App \| by Lukas Kiefer \| Netcetera Tech Blog](https://blog.netcetera.com/how-to-create-guarded-routes-for-your-react-app-d2fe7c7b6122)

1. `src/pages/MyPage.js`を作成
1. `src/usecase/GuardedRoute.js`を作成
1. useContext => [Day8](./Day8.md) を使って画面遷移を制限

---

> [React \+ Firebase入門](https://zenn.dev/masalib)<br>
[ReactにFirebaseを使ったログイン機能を実装する \- Qiita](https://qiita.com/kaitaku/items/6cfbcfed55cc6e817b20)


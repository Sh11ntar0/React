Auth機能とRoutingを使って画面遷移を制限する
===

## 1. `src/utils/GuardedRoute.js`を作成

```js
import React from 'react'
import { Route, Redirect } from "react-router-dom"

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

export default GuardedRoute
```

## 2. ログイン後しか遷移できないページを作成: `src/pages/MyPage.js`


```js
import styled from 'styled-components'
import H2 from '../components/HeadlineLevel2'

const Section = styled.section`
margin-top: 100px;
margin-left: auto;
margin-right: auto;
width: 1000px;
`

const MyPage = props => {

  return (
    <Section>
      <H2>My Page</H2>
      <dl>

      </dl>
    </Section>
  )
}

export default MyPage
```

## 3. App.jsにルーティングを追加

```js
import MyPage from './pages/MyPage'

<Route path='/signin'>
  <Signin />
</Route>
<Route path='/mypage'>
  <MyPage />
</Route>
```

## 4. ログイン判定

### 前回の復習

`src/pages/Signin.js`でログイン判定機能を実装している箇所

```js
const [currentUser, setCurrentUser] = useState()
useEffect(() => {
  auth.onAuthStateChanged(user => {
    setCurrentUser(user)
  })
}, [])

{currentUser ? (
// ログイン中に表示される箇所
) : (
// ログアウト中に表示される箇所
)
```

つまり`currentUser`でログイン判定を行っています。
<br>
ということは、先ほど作った`GuardedRoute.js`に`currentUser`を渡すことができればページ単位で判定できるはず...
<br>
ということで`App.js`を一部修正

```js
<Route path='/mypage'>
  <MyPage />
</Route>
↓↓↓
<GuardedRoute path='/mypage' component={MyPage} auth={true} />
```

ページが表示されたら`auth={false}`に変更してみます。それで再度`/mypage`にアクセスしてみてください。

---

参考: [How to create guarded routes for your React](https://blog.netcetera.com/how-to-create-guarded-routes-for-your-react-app-d2fe7c7b6122)
useContextを使ってサイト全体に影響する状態を管理する
===

[フック API リファレンス – React](https://ja.reactjs.org/docs/hooks-reference.html#usecontext)

1. 初期設定
---

> サンプルではレフトナビの開閉状態をハンバーグメニューで操作するために`useContext`を使っています。

`React.createContext`で`Context`を作成後、`Context.Provider`で囲った中身のコンポーネントすべてで、`value={}`で渡した内容を参照できます。

```js
export const Context = React.createContext()

<Context.Provider value={default}>
  <Reset />
  <Router>
    <Switch>
      <Route path='/header'>
        <Header />
      </Route>
    </Switch>
  </Router>
</Context.Provider>
```

`value`に渡す内容を`useState`hooksで作ったstateにすることで、Global Stateが実現できます。

e.g.

```js
const [expanded, setExpanded] = useState(false)
const store = {expanded: expanded, toggleExpand: setExpanded}
<Context.Provider value={store}>
```

2. 取り出し方
---

```js
import { useContext } from 'react'
import { Context } from '../App'
const store = useContext(Context)
```

`const store`内に、`{expanded: expanded, toggleExpand: setExpanded}`が入っているので、参照したい場合は`store.expanded`、状態を変更する場合は`toggleExpand()`を使いましょう。
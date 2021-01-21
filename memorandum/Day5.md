Day 5
===

### React-routerを使って複数ページを作る

[React Router: Declarative Routing for React\.js](https://reactrouter.com/)
[公式ドキュメント](https://reactrouter.com/web/guides/quick-start)

### インストール

```bash
npm install --save react-router-dom
```

```bash
yarn add react-router-dom
```

### Routing設定

> htmlではなく設定ファイルとして認識しましょう

```jsx
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Index from './pages/Index'
import ProductDetai from './pages/ProductDetai'
import RegistProduct from './pages/RegistProduct'

<Router>
  <Switch>
    <Route path='/product-detail'>
      <ProductDetai />
    </Route>
    <Route path='/regist-product'>
      <RegistProduct />
    </Route>
    <Route path='/'>
      <Index />
    </Route>
  </Switch>
</Router>
```

```jsx
<Route path='/product-detail'> // 1. 実際のurlで使うpath
  <ProductDetai />             // 2. そのパスにアクセスしたときに表示されるコンポーネント
</Route>
```

```jsx
<Route path='/'> // '/'は全てのpathにマッチするので一番下に記述します
  <Index />
</Route>
```

```jsx
<Link to='/product-detail'>to product-detail</Link> // 'to='に1.で設定したpathを設定すればリンクとして動作します
<a href="/product-detail">to product-detail</a>     // この場合は通常の画面遷移
```

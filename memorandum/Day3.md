Day 3
===

ライフサイクルメソッドを使ってみる
---

```js
componentDidMount()
```

`componentDidMount()` は、コンポーネントがマウントされた（ツリーに挿入された）直後に呼び出されます。DOM ノードを必要とする初期化はここで行われるべきです。リモートエンドポイントからデータをロードする必要がある場合、これはネットワークリクエストを送信するのに適した場所です。このメソッド内で**すぐに setState() を呼び出すことができます。**

---

```js
componentDidUpdate(prevProps, prevState, snapshot)
```

更新が行われた直後に `componentDidUpdate()` が呼び出されます。このメソッドは最初のレンダーでは呼び出されません。

---

```js
componentWillUnmount()
```

`componentWillUnmount()` は、コンポーネントがアンマウントされて破棄される直前に呼び出されます。タイマーの無効化、ネットワークリクエストのキャンセル、`componentDidMount()` で作成された購読の解除など、このメソッドで必要なクリーンアップを実行します。

---

##### `constructor`を下記に変更

```js
  constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        count: 0
      }
      this.countUp = this.countUp.bind(this)
  }
```

##### `Clock.js`に下記を追加

```js

  componentDidMount() {
    console.log('%ccomponentDidMount', 'color:skyblue; font-size: 20px;')
  }

  componentWillUnmount() {
    console.log('%ccomponentWillUnmount', 'color: orange; font-size: 20px;')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('%ccomponentDidUpdate', 'color: lime; font-size: 20px')
  }

  countUp() {
    let presentCount = this.state.count
    presentCount += 1
    this.setState({count: presentCount})
  }
```

> 画面表示の前後で何かしら処理が必要な場合、そのトリガー(フック)としてライフサイクルメソッドを使う

### stateの更新方法

NG

```js
this.state.count += 1 // 直接上書きはNG
```

OK

```js
this.setState({count: presentCount})
```

##### `render`内に下記を追加

```html
<button onClick={this.countUp}>Count UP</button>
<p>Count {this.state.count}</p>
```

Functional Components
---

`src`ディレクトリ直下に`ClockWithUse.js`を作成

下記をコピペ

```js
import React, { useState, useEffect  } from 'react'

const ClockWithUse = props => {
  return (
    <React.Fragment>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </React.Fragment>
  )
}

export default ClockWithUse

ClockWithUse.defaultProps = {
  date: new Date()
}
```

`Clock.js`と同じように、ページが表示されたタイミングでログ出力と、ボタン押下でカウントアップする機能を実装する。

下記を`const ClockWithUse`のブロック内に追加

```js
const [count, setCount] = useState(0) // countがgetter、setCountがsetter、0がデフォルトの値、と考えるとわかりやすいです
const countUp = () => setCount(count + 1)
```

`return`内に下記を追加

```html
<button onClick={countUp}>Count UP</button>
<p>Count {count}</p>
```

> Functional Componentはclassではないので`constructor`は使えません。 `componentDidMount`などのライフサイクルメソッドも使えません。`setState`も使えません。かわりに`useState`と`useEffect`を使います。
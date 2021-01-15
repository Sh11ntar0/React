Day 4
===

Styled-componentをさわってみる & Styled-componentでレスポンシブのページを作る
---

### インストール

```bash
npm install --save styled-components styled-media-query styled-reset
yarn add styled-components styled-media-query styled-reset
```

### 使い方

```js
import styled from "styled-components"
import media from "styled-media-query"
```

```js
const Text = styled.p`
font-size: 40px;
color: lime;
${media.greaterThan("large")`
  font-size: 20px;
  color: deepskyblue;
`}
`
```

```js
const Text = styled.p
```

`styled.p`の`p`は`<p>`と同じ意味。なので`styled.section`や`styled.div`のように、htmlのタグを指定します。

```js
${media.greaterThan("large")`
  font-size: 20px;
  color: deepskyblue;
`}
```

`reaterThan("large")`は画面サイズが1170pxより大きい場合に適用されるcssのことです。
その他のパラメータは下記

```js
{
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
}
```

公式ドキュメント: [morajabi/styled\-media\-query: 💅💍 Better media queries for styled\-component](https://github.com/morajabi/styled-media-query)


#### countが10以上になったらフォントカラーを赤にする

```js
import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import media from "styled-media-query"

const Text = styled.p`
font-size: 40px;
color: lime;
${media.greaterThan("large")`
  font-size: 20px;
  color: ${(props) => props.color};
`}
`

const ClockWithUse = props => {
  const [count, setCount] = useState(0)
  const [fontColor, setFontColor] = useState('deepskyblue')
  const countUp = () => setCount(count + 1)
  useEffect(() => {
    console.log('%cuseEffect', 'color:skyblue; font-size: 20px;')
    if (count > 9) updateFontColor()
  }, [count])

  const updateFontColor = () => setFontColor('red')

  return (
    <React.Fragment>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
      <button onClick={countUp}>Count UP</button>
      <Text color={fontColor}>Count {count}</Text>
    </React.Fragment>
  )
}

export default ClockWithUse

ClockWithUse.defaultProps = {
  date: new Date()
}
```

`count`の値が変化する度に`useEffect`が実行されます。

```js
useEffect(() => {
  console.log('%cuseEffect', 'color:skyblue; font-size: 20px;')
  if (count > 9) updateFontColor()
}, [count])
```
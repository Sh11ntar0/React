Day 6
===

React-routerを使って実際にサイトを作る
---

参考: [https://github.com/Sh11ntar0/React/tree/Yasu-Workspace/src/components](https://github.com/Sh11ntar0/React/tree/Yasu-Workspace/src/components)

下記のように`Wrapper`コンポーネントを作成し

```jsx
const Wrapper = props => (
  <React.Fragment>
    <Header />
    <WrapperStyle className="wrapper">
      {props.children}
    </WrapperStyle>
  </React.Fragment>
)

export default Wrapper
```

下記のように`pages`側で`<Wrapper>`で囲めば、囲んだ部分が`{props.children}`に置き換わります

```jsx
const ProductDetail = props => {
  return (
    <React.Fragment>
      <Wrapper>
        <h1>Product Detail</h1>
      </Wrapper>
    </React.Fragment>
  )
}
```
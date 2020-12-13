Day 2
===

ES2015の書き方を学ぶ
---

従来

```js
function addNumber(first, second) {
  return first + second
}
```

アロー関数

```js
const addNumber = (first, second) => {
  return first + second
}

// 処理が1行の場合は{}とreturnも省略可
const addNumber = (first, second) => first + second

// 引数が1つの場合
const times = number => number * 2
```

ステート(state)とは何か
---

どんなことがあっても見た目や文字、システム上保持している数値が一切変わらないもの**以外**を**state**で管理します。
言い換えると、時間やユーザーの操作によって文字や色が変わったり、計算結果が変わるようなものは全て**state**で管理します。

実際にコンポーネントを作って追加してみる
---

> ファイル名はキャピタル(先頭の文字は大文字)の必要があります。
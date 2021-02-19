Day 9
===

Atomic Designとは何かを学ぶ
---

#### 参考: [Atomic Design はなぜ難しいか？どうやって難しさを解消するか](https://zenn.dev/sterashima78/articles/0cf4bb52112c7b)

### Atomic Designとは

実際にReactでサイトを作る場合、どのような構成/粒度でコンポーネントを作成していくかが大事です。
各自自由に作るよりも、ガイドライン的なものがあったほうが作りやすいですし、チームで開発する場合も作業しやすいです。
そのガイドライン的なものの一つが**Atomic Design**になります。

### コンポーネント指向についてのちょっと復習

- カプセル化されている
- 置換可能である
- 再利用可能である
- コンポーネントを別のコンポーネントに組み合わせて作成可能である

### ディレクトリ構成例

```
src
|--components
|  |--atoms
|  |  |--headline
|  |  |  |--H2.js
|  |  |  |--H3.js
|  |--molecules
|  |  |--Header.js
|  |  |--Footer.js
|  |--organisms
|  |--templates
|  |  |--About.js
|  |  |--Index.js
|--pages
|  |--About.js
|  |--Index.js
```

Atoms
---
- これ以上分割できない

Molecules
---

- 再利用できる
- ロジックなし
- API通信なし

Organisms
---

- 再利用は重視しない
- ロジックあり
- 通信あり
- `useState`などのhooksあり

Templates
---

- HTMLを組む
- ロジックなどはあまり記述しない
- pagesと1対1

Pages
---

- ロジック
- 通信あり
- templateと1対1

> MoleculesかOrganismsか迷ったらOrganismsに作りましょう。後から似たようなものが出てきたときにMoleculesに変更すればいいかと思います。
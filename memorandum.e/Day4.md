Day 4
===

Try Styled-component
---

### Install

```bash
npm install --save styled-components styled-media-query styled-reset
```

or

```bash
yarn add styled-components styled-media-query styled-reset
```

### How to use


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

### Explanation

The `p` in `styled.p` means the same as `<p>`. So, you can specify html tags like `styled.section` or `styled.div`.

<br><br>

```js
${media.greaterThan("large")`
  font-size: 20px;
  color: deepskyblue;
`}
```

`reaterThan("large")` is a css that is applied when the screen size is larger than 1170px.

##### default parameter

```js
{
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
}
```

Reference: [morajabi/styled\-media\-query: 💅💍 Better media queries for styled\-component](https://github.com/morajabi/styled-media-query)

<br><br>

Let's create a Functional component
===

1. Make `ClockWithUse.js` in `src` directory
1. Write code following

    ```js
    import React, { useState, useEffect  } from 'react'
    import styled from 'styled-components'
    import media from 'styled-media-query'

    const Text = styled.p`
    font-size: 40px;
    color: lime;
    ${media.greaterThan("large")`
      font-size: 20px;
      color: deepskyblue;
    `}
    `

    const ClockWithUse = props => {
      const [count, setCount] = useState(0)
      const countUp = () => setCount(count + 1)

      useEffect(() => {
        console.log('%cuseEffect', 'color:skyblue; font-size: 20px;')
      }, [count])

      return (
        <React.Fragment>
          <h1>Hello, world!</h1>
          <h2>It is {props.date.toLocaleTimeString()}.</h2>
          <button onClick={countUp}>Count UP</button>
          <Text>Count {count}</Text>
        </React.Fragment>
      )

    }

    export default ClockWithUse

    ClockWithUse.defaultProps = {
      date: new Date()
    }
    ```
1. Modified `App.js`

    ```js
    import ClockWithUse from './ClockWithUse'

    ...

    <Clock date={new Date()} />
    <ClockWithUse />
    ```

Practice
---

### Set the font color to red when the count reaches 10 or more.
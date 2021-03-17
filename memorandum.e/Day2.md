Day 2
===

What is 'state'?
---

**`state`** is other than something which is never change, no matter what.

<br>

In other words, anything that changes text, color, or calculation results depending on time or user interaction is managed by **`state`**.


Let's create a component
---

1. Make `Clock.js` in `src` directory
1. Write code following

    ```js
    import React from 'react'

    class Clock extends React.Component {
      constructor(props) {
        super(props)
        this.state = {date: new Date()}
      }
      render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      )
      }
    }
    export default Clock
    ```

1. Modified `App.js`

    ```js
    import logo from './logo.svg'
    import './App.css'
    import Clock from './Clock' // add

    ...

    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React
    </a>
    <Clock date={new Date()} /> // add
    ```

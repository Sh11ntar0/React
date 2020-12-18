import React, { useState, useEffect } from 'react'

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
      <p>Count {count}</p>
    </React.Fragment>
  )
}

export default ClockWithUse

ClockWithUse.defaultProps = {
  date: new Date()
}
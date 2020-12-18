import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import media from "styled-media-query"

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
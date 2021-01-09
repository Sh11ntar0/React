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
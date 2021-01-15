import React, { useState, useEffect  } from 'react'
import styled from "styled-components"
import media from "styled-media-query"

const Text = styled.p`
font-size: 40px;
color: ${(props) => props.color};

${media.greaterThan("large")`
  font-size: 20px;
  color: deepskyblue;
`}
`

const ClockWithUse = props => {
  const [count, setCount] = useState(0)
  const countUp = () => setCount(count + 1)
  
  const [fontColor, setFontColor] = useState('deepskyblue')
  const updateFontColor = () => setFontColor('red')


  useEffect(() => {
    console.log('%cuseEffect', 'color:skyblue; font-size: 20px;')
    if( count >= 10){
      updateFontColor();
      console.log("ok");
    }
  
  }, [count])

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
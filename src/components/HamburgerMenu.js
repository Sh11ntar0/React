import styled from 'styled-components'
import { useContext } from 'react'

import { Context } from '../App'

const Button = styled.button`
outline: none;
background-color: transparent;
width: 2em;
height: 1.3em;
position: relative;
border: none;
font-size: 30px;

.checkbox:checked ~ .bar {
  &:nth-of-type(1), &:nth-of-type(3) {
    transform: translateY(-50%);
    top: 50%;
  }

  &:nth-of-type(1) {
    transform: rotate(45deg);
  }

  &:nth-of-type(2) {
    opacity: 0;
  }

  &:nth-of-type(3) {
    transform: rotate(-45deg);
  }
}

.bar {
  background-color: #222222;
  width: 100%;
  left: 0;
  transform-origin: center;
  height: 8px;
  position: absolute;
  border-radius: 6px;
  transition: all .3s;
}

.checkbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
}

.bar {
  &:nth-of-type(1) {
    top: 0;
  }

  &:nth-of-type(2) {
    top: calc(50% - (8px / 2));
  }

  &:nth-of-type(3) {
    top: calc(100% - 8px);
  }
}
`

const HamburgerMenu = props => {
    const store = useContext(Context)

    return (
        <Button className="hamburger" onClick={() => store.toggleExpand(!store.expanded)}>
            <input className="checkbox" type="checkbox" />
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </Button>
    )
}

export default HamburgerMenu
import React from 'react'

class Clock extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        count: 0
      }
      this.countUp = this.countUp.bind(this)
  }

  componentDidMount() {
    console.log('%ccomponentDidMount', 'color:skyblue; font-size: 20px;')
  }

  componentWillUnmount() {
    console.log('%ccomponentWillUnmount', 'color: orange; font-size: 20px;')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('%ccomponentDidUpdate', 'color: lime; font-size: 20px')
  }

  countUp() {
    let presentCount = this.state.count
    presentCount += 1
    this.setState({count: presentCount})
  }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        <button onClick={this.countUp}>Count UP</button>
        <p>Count {this.state.count}</p>
      </div>
    )
  }
}

export default Clock

Clock.defaultProps = {
  date: new Date()
}

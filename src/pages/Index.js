import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'
import Clock from '../Clock'
import ClockWithUse from '../ClockWithUse'


const Index = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! <code>src/App.js</code> and save to reload.
        </p>
        <p><Link to='/product-detail'>to product-detail</Link></p>
        <p><Link to='/regist-product'>to regist-product</Link></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock date={new Date()} />
        <ClockWithUse />
      </header>
    </div>
  );
}
export default Index
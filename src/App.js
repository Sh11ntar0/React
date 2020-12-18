import logo from './logo.svg'
import './App.css'
import Clock from './Clock'
import ClockWithUse from './ClockWithUse'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! <code>src/App.js</code> and save to reload.
        </p>
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
export default App
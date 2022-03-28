import {useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [hello, setHello] = useState('Hello')

  useEffect(() => {
    console.log(hello)
  }, [hello])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Use Effect</p>
        {hello}
        <input
          value={hello}
          onChange={e => setHello(e.target.value)}
        />
        <p>
          <code>useEffect</code> tutorial
        </p>
      </header>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="login-wrapper">
      <img src="/flare.png" alt="Flare events Logo" className="logo"></img>
      <h2 className="title">Member Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" placeholder="Enter Username"/>

        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" placeholder="Enter Password"/>

        <button type="submit">Login</button>
        <p id="message"></p>

      </form>
    </div>
      
        
    </>
  )
}

export default App

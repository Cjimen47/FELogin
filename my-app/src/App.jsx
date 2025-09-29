import { useState } from 'react'
import { useActionState} from 'react'
import {hasSpecialChars, hasNumber, hasUpperCase, meetsLength} from '../util/validation';
import './App.css'

function App() {
  function signupAction(prevFormState, formData){
    const username = formData.get('username');
    const password = formData.get('password');

    let errors = [];

    if(!hasNumber(password)){
      errors.push('You must provide a password with at least one number (0-9).')
    }

    if(!hasUpperCase(password)){
      errors.push('You must provide a password with at least one uppercase character.')
    }

    if(!hasSpecialChars(password)){
      errors.push('You must provide a password with at least (for now) one special character.')
    }

    if(!meetsLength(password)){
      errors.push('You must provide a password with at least 8 characters.')
    }

    if(errors.length > 0){
      return {errors};
    }

    return {errors: null}
  }

  const [formState, formAction, pending] = useActionState(signupAction, {errors: null});

  return (
    <>
    <div className="login-wrapper">
      <img src="/flare.png" alt="Flare events Logo" className="logo"></img>
      <h2 className="title">Member Login</h2>
      <form action={formAction}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" placeholder="Enter Username"/>

        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" placeholder="Enter Password"/>

        <button type="submit">Login</button>
        <p id="message"></p>

        {formState.errors && <ul className='error'>
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
          </ul>}

      </form>
    </div>
      
        
    </>
  )
}

export default App

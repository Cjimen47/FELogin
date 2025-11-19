// Confirmation page for password reset

import { Link, useLocation } from 'react-router-dom'

export default function ResetSent() 
{
  const { state } = useLocation() || {}
  const resetToken = state?.resetToken
  const email = state?.email
  const message = 'If an account exists, a reset link was sent.'

  return (
    <div className="login-wrapper">
      <img src="/flare.png" alt="Flare events Logo" className="logo" />
      <h2 className="title">Check your email !</h2>

      <ul className="error">
        <li>{message}</li>
      </ul>

      {resetToken && (
        <div className="helper-row">
          <p>Dev token for {email}:</p>
          <code>{resetToken}</code>
        </div>
      )}

      <div className="helper-row">
        <Link className="link-button" to="/">Back to login</Link>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { History } from 'history'

import { signIn } from '../api'
import { Credentials } from '../../shared/types'
import Button from 'react-bootstrap/Button'

type Props = {
  setAlerts: any
  alerts: Array<any>
  history: History
  setUser: any
}

const SignIn: React.FC<Props> = props => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const [passwordConfirmation, setPasswordConfirmation] = useState()

  const onSignIn = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const credentials: Credentials = { email, password }
    signIn(credentials)
      .then((res: any) => {
        props.setUser(res.data)
      })
      .then(() =>
        props.setAlerts([
          ...props.alerts,
          { title: 'Welcome', variant: 'success' }
        ])
      )
      .then(() => {
        props.history.push('/')
      })
      .catch((error: any) => {
        console.error(error)
        props.setAlerts([
          ...props.alerts,
          { title: 'Welcome', variant: 'success' }
        ])
      })
  }

  return (
    <div className="col-md-6 m-auto py-3">
      <form className="auth-form" onSubmit={onSignIn}>
        <h3>Sign In</h3>
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  )
}
export default SignIn

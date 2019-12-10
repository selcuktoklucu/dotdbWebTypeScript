import React, { useState } from 'react'
// import { withRouter } from 'react-router-dom'

import { signUp } from '../api'
// import messages from '../messages'
// import { Alert } from '../../App'
import { Credentials } from '../../shared/types'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

type Props = {
  setAlerts: any
  alerts: Array<any>
  setUser: any
  history?: any
}

const SignUp: React.FC<Props> = props => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()
  // const [history, setHistory] = useState()
  // handleChange = event =>
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })

  const onSignUp = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    //console.log('history', history)
    const credentials: Credentials = { email, password, passwordConfirmation }
    signUp(credentials)
      .then(() => console.log(email))
      .then((res: any) => console.log(email, res))
      .then(() =>
        props.setAlerts([
          ...props.alerts,
          { title: 'Sign up Successful', variant: 'success' }
        ])
      )
      .then(() => console.log('pro'))
      .catch((error: any) => {
        console.error('ERR', error)
        let variant = undefined

        props.setAlerts([
          ...props.alerts,
          { title: 'Hello', variant: 'success' }
        ])
      })
  }

  // render() {
  //   const { email, password, passwordConfirmation } = this.state

  return (
    <div className="col-md-6 m-auto py-3">
      <form className="auth-form" onSubmit={onSignUp}>
        <h3>Sign Up</h3>

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
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
export default SignUp

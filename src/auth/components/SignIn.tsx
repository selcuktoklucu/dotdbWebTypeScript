import React, { useState } from 'react'
// import { History } from 'history'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signIn } from '../api'
import { Credentials } from '../../shared/types'
import Button from 'react-bootstrap/Button'
import { updateSession } from '../../redux/system/actions'

type Props = {
  setAlerts: any
  alerts: Array<any>
  setUser: any
}

const SignIn: React.FC<Props> = props => {
  const [email, setEmail] = useState('st@st.com')
  const [password, setPassword] = useState('stst')
  //const [passwordConfirmation, setPasswordConfirmation] = useState()
  let history = useHistory()
  const dispatch = useDispatch()

  const onSignIn = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const credentials: Credentials = { email, password }
    signIn(credentials)
      .then((res: any) => {
        props.setUser(res.data.user)
        // dispatch(updateSession(res.data.user.token))
      })
      .then(() =>
        props.setAlerts([
          ...props.alerts,
          { title: 'Welcome', variant: 'success' }
        ])
      )
      .then(() => {
        history.push('/new-order')
      })
      .catch((error: any) => {
        console.error(error)
        props.setAlerts([
          ...props.alerts,
          { title: 'Welcome', variant: 'failed' }
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

import React from 'react'
// import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Router } from 'react-router'
import SignUp from './auth/components/SignUp'
import { createBrowserHistory } from 'history'
import SignIn from './auth/components/SignIn'
import Header from './shared/Header'
import Alert, { AlertProps } from 'react-bootstrap/Alert'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
//import { Alert } from 'react-bootstrap-typescript'
//import { Alert, AlertProps } from 'react-bootstrap-typescript/src/Alert'
const { useState } = React

const App: React.FC = () => {
  const [user, setUser] = useState()
  const [alerts, setAlerts] = useState([])
  if (alerts.length > 0) {
    console.log('its running')
    setTimeout(() => {
      setAlerts([])
    }, 4500)
  }

  const history = createBrowserHistory()

  console.log('alerts', alerts, 'user', user)
  return (
    <div className="App">
      <main className="container">
        <Router history={history}>
          {/*<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React with {user.firstName}
            </a>
  </header>*/}
          <Header user={user}></Header>
          {alerts.length > 0 &&
            alerts.map((alert: AlertProps, index) => (
              <Alert
                key={index}
                dismissible
                onClose={() => setAlerts([])}
                variant={alert.variant}
              >
                <p>{alert.title}</p>
              </Alert>
            ))}
          <Route
            path="/sign-up"
            render={() => (
              <SignUp
                alerts={alerts}
                setAlerts={setAlerts}
                setUser={setUser}
                history={history}
              />
            )}
          />
          <Route
            path="/sign-in"
            render={() => (
              <SignIn
                alerts={alerts}
                setAlerts={setAlerts}
                history={history}
                setUser={setUser}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path="/sign-out"
            render={() => <div>aaa</div>}
          />
        </Router>
      </main>
    </div>
  )
}

export default App

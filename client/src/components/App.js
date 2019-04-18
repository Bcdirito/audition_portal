import React, { Component } from 'react'
import {Route, Switch, withRouter} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => (
            <Home {...props} />
          )}/>
          <Route exact path="/login" render={(props) => (
            <Login {...props} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
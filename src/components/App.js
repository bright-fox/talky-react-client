import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import Chatrooms from "../pages/Chatrooms"
import Chatroom from "../pages/Chatroom"

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/rooms" exact>
          <Chatrooms />
        </Route>
        <Route path="/rooms/:id" exact>
          <Chatroom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
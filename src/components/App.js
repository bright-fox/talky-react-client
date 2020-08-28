import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "../pages/Home"
import Chatrooms from "../pages/Chatrooms"
import Chatroom from "../pages/Chatroom"
import Registration from "../pages/Registration"
import Globalstyle from "../styles/Globalstyle"

function App() {
  return (
    <Router>
      <Globalstyle />
      <Navbar />
      <Switch>
        <Route path={["/", "/home"]} exact>
          <Home />
        </Route>
        <Route path="/rooms" exact>
          <Chatrooms />
        </Route>
        <Route path="/rooms/:id" exact>
          <Chatroom />
        </Route>
        <Route path="/signup" exact>
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import Navbar from "./Navbar"
import Home from "../pages/Home"
import Chatrooms from "../pages/Chatrooms"
import Chatroom from "../pages/Chatroom"

// reset styles
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

function App() {
  return (
    <Router>
      <GlobalStyle />
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
      </Switch>
    </Router>
  );
}

export default App;
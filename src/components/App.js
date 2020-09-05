import React, { useMemo, useReducer } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "../pages/Home"
import Chatrooms from "../pages/Chatrooms"
import Chatroom from "../pages/Chatroom"
import Registration from "../pages/Registration"
import Globalstyle from "../styles/Globalstyle"
import userReducer from "../reducers/userReducer"
import usercontext from "../contexts/usercontext"
import Login from "../pages/Login"

function App() {
  // user context
  const initialValues = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    currUser: JSON.parse(localStorage.getItem("currUser")) || null
  }

  const [state, dispatch] = useReducer(userReducer, initialValues)

  // makes sure to only rerender if the state object or the dispatch function changes
  const userContextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <usercontext.Provider value={userContextValue}>
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
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </usercontext.Provider>
  );
}

export default App;
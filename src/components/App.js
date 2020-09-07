import React, { useMemo, useReducer, useEffect } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "../pages/Home"
import Chatrooms from "../pages/Chatrooms"
import Chatroom from "../pages/Chatroom"
import Registration from "../pages/Registration"
import Globalstyle from "../styles/Globalstyle"
import userReducer from "../reducers/userReducer"
import usercontext from "../contexts/usercontext"
import Login from "../pages/Login"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from './PublicRoute';
import { LOGIN, LOGOUT } from "../actions"

function App() {
  // user context
  const initialValues = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    currUser: JSON.parse(localStorage.getItem("currUser")) || null
  }

  const [state, dispatch] = useReducer(userReducer, initialValues)

  // makes sure to only rerender if the state object or the dispatch function changes
  const userContextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  useEffect(() => {
    // login or logout on all open tabs
    window.addEventListener("storage", e => {
      if (e.key === "isLoggedIn") {
        console.log("LOGGING IN OR OUT")
        if (JSON.parse(e.newValue)) {
          dispatch({ type: LOGIN, payload: { currUser: JSON.parse(localStorage.getItem("currUser")) } })
        } else {
          dispatch({ type: LOGOUT })
        }
      }
    })
  }, [])

  return (
    <usercontext.Provider value={userContextValue}>
      <Router>
        <Globalstyle />
        <Navbar />
        <Switch>
          <PrivateRoute path="/rooms/:id" exact component={Chatroom} isLoggedIn={state.isLoggedIn} />
          <PublicRoute isLoggedIn={JSON.parse(localStorage.getItem("isLoggedIn"))} restricted={false} path={["/", "/home"]} exact component={Home} />
          <PublicRoute isLoggedIn={JSON.parse(localStorage.getItem("isLoggedIn"))} restricted={false} path="/rooms" exact component={Chatrooms} />
          <PublicRoute isLoggedIn={JSON.parse(localStorage.getItem("isLoggedIn"))} restricted={true} path="/signup" exact component={Registration} />
          <PublicRoute isLoggedIn={JSON.parse(localStorage.getItem("isLoggedIn"))} restricted={true} path="/login" exact component={Login} />
        </Switch>
      </Router>
    </usercontext.Provider>
  );
}

export default App;
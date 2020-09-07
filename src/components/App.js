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
import PrivateRoute from "./PrivateRoute"
import PublicRoute from './PublicRoute';

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
          <PrivateRoute path="/rooms/:id" exact component={Chatroom} isLoggedIn={state.isLoggedIn} />
          <PublicRoute isLoggedIn={state.isLoggedIn} restricted={false} path={["/", "/home"]} exact component={Home} />
          <PublicRoute isLoggedIn={state.isLoggedIn} restricted={false} path="/rooms" exact component={Chatrooms} />
          <PublicRoute isLoggedIn={state.isLoggedIn} restricted={true} path="/signup" exact component={Registration} />
          <PublicRoute isLoggedIn={state.isLoggedIn} restricted={true} path="/login" exact component={Login} />
        </Switch>
      </Router>
    </usercontext.Provider>
  );
}

export default App;
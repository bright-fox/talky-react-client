import React from "react"

const usercontext = React.createContext({ currUser: null, isLoggedIn: false, dispatch: () => { } })

export default usercontext
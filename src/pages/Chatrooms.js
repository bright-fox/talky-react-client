import React from "react"
import { Link } from "react-router-dom"

const Chatrooms = () => {
    return (
        <div>
            <h1>Choose your preferred chatroom to meet new people!</h1>
            <Link to="/rooms/health">Health</Link>
            <Link to="/rooms/family">Family</Link>
        </div>
    )
}

export default Chatrooms
import React from "react"
import { useParams } from "react-router-dom"
import useChat from "../hooks/useChat"

const Chatroom = () => {
    const { id } = useParams()
    const { messages, newMessage, setNewMessage, sendMessage } = useChat()

    const submitHandler = e => {
        e.preventDefault()
        sendMessage(newMessage)
        e.target.value = ""
    }

    return (
        <div>
            <h1>{id.toUpperCase()}</h1>

            <div className="messages-container">
                {messages.map((msg, i) => {
                    return <p key={i}>{msg}</p>
                })}
            </div>
            <form action="" onSubmit={submitHandler}>
                <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
                <button type="submit">Send Message</button>
            </form>

        </div>
    )
}

export default Chatroom
import { useState, useEffect, useRef } from "react"
import socketIOClient from "socket.io-client"

const ENDPOINT = process.env.ENDPOINT || "http://localhost:4001"

export default () => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const socketRef = useRef()

    useEffect(() => {
        socketRef.current = socketIOClient(ENDPOINT)
        socketRef.current.on("chat message", msg => {
            setMessages(prevMsgs => [...prevMsgs, msg])
        })

        return () => socketRef.current.disconnect()
    }, [])

    const sendMessage = (msg) => {
        socketRef.current.emit("chat message", msg)
    }

    return { messages, newMessage, setNewMessage, sendMessage }
}
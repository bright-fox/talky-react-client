import { useState, useEffect, useRef } from "react"
import socketIOClient from "socket.io-client"

const ENDPOINT = process.env.ENDPOINT || "http://localhost:4001"

export default roomID => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const socketRef = useRef()

    useEffect(() => {
        socketRef.current = socketIOClient(ENDPOINT, {
            query: { roomID },
        })

        socketRef.current.on("message", msg => {
            setMessages(prevMsgs => [...prevMsgs, msg])
        })

        return () => socketRef.current.disconnect()
    }, [roomID])

    const sendMessage = (msg) => {
        socketRef.current.emit("chatMessage", msg)
    }

    return { messages, newMessage, setNewMessage, sendMessage }
}
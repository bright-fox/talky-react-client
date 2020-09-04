import { useState, useEffect, useRef } from "react"
import socketIOClient from "socket.io-client"
import { request } from "../api"

const ENDPOINT = process.env.ENDPOINT || "http://localhost:4001"

export default (roomName, accessToken) => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [members, setMembers] = useState([])
    const socketRef = useRef()

    useEffect(() => {
        const fetchMembers = async () => {
            const res = await request({ method: "GET", path: `/rooms/${roomName}/members` })
            const data = await res.json()
            setMembers(data.members)
        }
        fetchMembers()
    }, [roomName])

    useEffect(() => {
        socketRef.current = socketIOClient(ENDPOINT)

        // join the room with the user
        socketRef.current.emit("joinRoom", { roomName, accessToken })

        socketRef.current.on("updateMembers", ({ members }) => {
            setMembers(members)
        })

        socketRef.current.on("message", msg => {
            setMessages(prevMsgs => [...prevMsgs, msg])
        })

        return () => socketRef.current.disconnect()
    }, [roomName, accessToken])

    const sendMessage = (message, accessToken) => {
        socketRef.current.emit("chatMessage", { message, accessToken })
    }

    return { messages, newMessage, setNewMessage, sendMessage, members }
}
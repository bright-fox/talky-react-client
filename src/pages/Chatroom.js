import React from "react"
import { useParams } from "react-router-dom"
import useChat from "../hooks/useChat"
import styled from "styled-components"
import Message from "../components/Message"
import Button from "../components/Button"

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
    width: 100vw;
    border-top: 1px solid #eee;
    background-color: #eee;
`

const Div = styled.div`
    width: 40vw;
    background-color: #fff;
    display: grid;
    padding: 10px;
`

const MessageHistory = styled.div`
    height: 70vh;
    overflow-y: scroll;
    border-top: 1px solid #eee;
    display: flex;
    flex-direction: column;
`

const MessageForm = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;

    & input {
        width: 100%;
        padding: 5px 10px;
        border-radius: 50px;
        border: 1px solid #ff4f5a;
        outline: none;
    }
`

const Topbar = styled.div`
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
`

const Chatroom = () => {
    const { id } = useParams()
    const { messages, newMessage, setNewMessage, sendMessage } = useChat(id)

    const submitHandler = e => {
        e.preventDefault()
        sendMessage(newMessage, localStorage.getItem("accessToken")) // use accesstoken from localstorage
        setNewMessage("")
    }

    const renderMessages = (messages) => {
        const currUserID = JSON.parse(localStorage.getItem("currUser")).id
        return messages.map((msg, i) => {
            return <Message key={i} message={msg.text} time={msg.time} author={msg.user.username} isAuthor={msg.user.id === currUserID} bubbleColor={msg.user.bubbleColor} textColor={msg.user.textColor}></Message>
        })
    }

    return (
        <Container>
            <Div>
                <Topbar>
                    <h2 style={{ margin: "10px" }}>{id}</h2>
                    <Button>Leave</Button>
                </Topbar>
                <MessageHistory>
                    {renderMessages(messages)}
                </MessageHistory>
                <MessageForm onSubmit={submitHandler}>
                    <input placeholder="Send a message.." type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
                </MessageForm>
            </Div>
        </Container>
    )
}

export default Chatroom
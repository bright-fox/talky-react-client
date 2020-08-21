import React from "react"
import { useParams } from "react-router-dom"
import useChat from "../hooks/useChat"
import styled from "styled-components"
import Message from "../components/Message"

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

const Chatroom = () => {
    const { id } = useParams()
    const { messages, newMessage, setNewMessage, sendMessage } = useChat()

    const submitHandler = e => {
        e.preventDefault()
        sendMessage(newMessage)
        setNewMessage("")
    }

    return (
        <Container>
            <Div>
                <h2 style={{ margin: "10px 20px" }}>{id}</h2>
                <MessageHistory>
                    {messages.map((msg, i) => {
                        return <Message key={i} message={msg} time={new Date().toISOString()} author="user1"></Message>
                    })}
                </MessageHistory>
                <MessageForm onSubmit={submitHandler}>
                    <input name="message" placeholder="Send a message" type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
                </MessageForm>
            </Div>
        </Container>
    )
}

export default Chatroom
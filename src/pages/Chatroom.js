import React, { useEffect, useRef } from "react"
import { useParams, useHistory } from "react-router-dom"
import useChat from "../hooks/useChat"
import styled from "styled-components"
import Message from "../components/Message"
import Button from "../components/Button"
import Memberlist from "../components/Memberlist"
import PageContainer from '../components/PageContainer';

const Div = styled.div`
    width: 40vw;
    background-color: #fff;
    padding: 10px;
    height: calc(100vh - 70px);
`

const MessageHistory = styled.div`
    overflow-y: scroll;
    border-top: 1px solid #eee;
    display: flex;
    flex-direction: column;
    height: calc(100% - 130px);
`

const MessageForm = styled.form`
    display: flex;
    height: 40px;
    justify-content: center;
    margin: 10px 0;

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
    padding: 10px;
    height: 70px;
    justify-content: space-between;
    align-items: center;
`

const Chatroom = () => {
    const { id } = useParams()
    const history = useHistory()
    const { messages, newMessage, setNewMessage, sendMessage, members } = useChat(id, localStorage.getItem("accessToken"))
    const messageHistory = useRef(null)

    useEffect(() => {
        messageHistory.current.scrollTop = messageHistory.current.scrollHeight
    }, [messages])

    const submitHandler = e => {
        e.preventDefault()
        if (newMessage.length === 0) return
        sendMessage(newMessage, localStorage.getItem("accessToken"))
        setNewMessage("")
    }

    const renderMessages = (messages) => {
        const currUserID = JSON.parse(localStorage.getItem("currUser")).id
        return messages.map((msg, i) => {
            return <Message key={i} message={msg.text} time={msg.time} author={msg.user.username} isAuthor={msg.user.id === currUserID} bubbleColor={msg.user.bubbleColor} textColor={msg.user.textColor}></Message>
        })
    }

    return (
        <PageContainer bt="1px solid #eee" bc="#eee" matchNavbar>
            <Div>
                <Topbar>
                    <h2 style={{ margin: "10px" }}>{id}</h2>
                    <Button onClick={() => history.push("/rooms")}>Leave</Button>
                </Topbar>
                <MessageHistory ref={messageHistory}>
                    {renderMessages(messages)}
                </MessageHistory>
                <MessageForm onSubmit={submitHandler}>
                    <input placeholder="Send a message.." type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
                </MessageForm>
            </Div>
            <Memberlist members={members} />
        </PageContainer>
    )
}

export default Chatroom
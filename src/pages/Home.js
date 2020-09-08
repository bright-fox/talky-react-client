import React from "react"
import styled from "styled-components"
import Button from "../components/Button"
import { useHistory } from "react-router-dom"
import PageContainer from "../components/PageContainer"

const Div = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    display: flex;
    align-items: center;
    justify-content: space-around;

    & .header {
        margin-top: -50px;
    }

    & > .header > h2, & p {
        font-family: 'Montserrat', sans-serif;
    }

    & p {
        font-size: 0.9rem;
        overflow: break-word;
        max-width: 480px;
        margin-bottom: 15px;
    }
`

const Card = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & div {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        letter-spacing: 1px;
        max-width: 240px;
    }
`

const Home = () => {
    const history = useHistory()

    return (
        <>
            <PageContainer matchNavbar>
                <Div>
                    <div className="header">
                        <h2>Meet and socialize.</h2>
                        <p>Join different chatrooms to meet with new people from all around the world and create new friendships. Socialize and interact in an easy and fun way. </p>
                        <Button onClick={() => history.push("/rooms")}>Join rooms</Button>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/images/communication.jpg"} alt="communication" />
                </Div>
            </PageContainer>
            <PageContainer bc="#EEE" fullScreen>
                <Card>
                    <img src={process.env.PUBLIC_URL + "/icons/care.png"} alt="hands around heart" />
                    <h2>From us for you</h2>
                    <div>We created this website just for the useres to meet new people without any costs.</div>
                </Card>
                <Card>
                    <img src={process.env.PUBLIC_URL + "/icons/chat.png"} alt="chat messages" />
                    <h2>Join Chatrooms</h2>
                    <div>The multiple rooms give the users the opportunity to easily join and meet people.</div>
                </Card>
                <Card>
                    <img src={process.env.PUBLIC_URL + "/icons/interest.png"} alt="" />
                    <h2>Different interests</h2>
                    <div>Each chatroom has a theme that gives a hint about the discussed topics.</div>
                </Card>
            </PageContainer>
        </>
    )
}

export default Home
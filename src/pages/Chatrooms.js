import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PageContainer from "../components/PageContainer"

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const H2 = styled.h2`
    margin-top: 30px;
`

const IconContainer = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    margin: 20px;
    border-radius: 100%;
    background-color: #fff;
`

const IconLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin-top: 10px;
    position: relative;

    & h3 {
        margin-bottom: 3px;
    }

    &:after {
        content: " ";
        position: absolute;
        width: 0;
        margin-top: -10px;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: #ff4f5a;
        visibility: hidden;
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover:after {
        visibility: visible;
        width: 100%;
    }
`



const Chatrooms = () => {
    return (
        <PageContainer fontImport="@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');" fontFamily="'Russo One', sans-serif" fd="column" bc="#ff4f5a" jc="start" matchNavbar>
            <H2>Choose your preferred chatroom to meet new people</H2>
            <Div>
                <IconContainer>
                    <img src={process.env.PUBLIC_URL + "/icons/chat.png"} alt="chat messages" />
                    < IconLink to="/rooms/general" > <h3>General</h3></IconLink >
                </IconContainer >
                <IconContainer>
                    <img src={process.env.PUBLIC_URL + "/icons/bike.png"} alt="bycicle" />
                    <IconLink to="/rooms/sports"><h3>Sports</h3></IconLink>
                </IconContainer>
                <IconContainer>
                    <img src={process.env.PUBLIC_URL + "/icons/businessman.png"} alt="businessman" />
                    <IconLink to="/rooms/work"><h3>Work</h3></IconLink>
                </IconContainer>
                <IconContainer>
                    <img src={process.env.PUBLIC_URL + "/icons/dog-tags-military.png"} alt="dog and cat" />
                    <IconLink to="/rooms/animals"><h3>Animals</h3></IconLink>
                </IconContainer>
                <IconContainer>
                    <img src={process.env.PUBLIC_URL + "/icons/sound.png"} alt="headphones" />
                    <IconLink to="/rooms/music"><h3>Music</h3></IconLink>
                </IconContainer>
                <IconContainer>
                    <img src={process.env.PUBLIC_URL + "/icons/video.png"} alt="video" />
                    <IconLink to="/rooms/movies"><h3>Movies</h3></IconLink>
                </IconContainer>
            </Div >
        </PageContainer >
    )
}

export default Chatrooms
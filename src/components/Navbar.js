import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import Button from "./Button"
import Dropdown from "./Dropdown"
import usercontext from "../contexts/usercontext"

const Navlink = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    color: black;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 20px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 5px 0;
    position: relative;

    &:after {
        content: " ";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #ff4f5a;
        visibility: hidden;
        transition: all 0.4s ease-in-out 0s;
    }

    &:hover:after {
        visibility: visible;
        width: 100%;
    }
`

const Navbrand = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');

    color: black;
    font-family: 'Libre Baskerville', serif;
    font-weight: bold;
    font-size: 1.8rem;
    text-decoration: none;
    margin: 10px;
`

const Container = styled.div`
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
`

const RightSide = styled.div`
    display: flex;
    align-items: center;
`

const Navbar = () => {
    const history = useHistory()
    const { state } = useContext(usercontext)

    const renderAuth = () => {
        if (!state.isLoggedIn) {
            return <Button onClick={() => history.push("/login")}>Login</Button>
        }

        return (
            <Dropdown heading={`Hey, Bert`}>
                <div>User Profile</div>
                <div>Logout</div>
            </Dropdown>
        )
    }

    return (
        <Container>
            <Navbrand to="/">talky_</Navbrand>
            <RightSide>
                <Navlink to="/rooms">Chatrooms</Navlink>
                {renderAuth()}
            </RightSide>
        </Container>
    )
}

export default Navbar
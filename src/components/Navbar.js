import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from "./Button"

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

const Navbar = () => {
    return (
        <Container>
            <Navbrand to="/">talky_</Navbrand>
            <div>
                <Navlink to="/rooms">Chatrooms</Navlink>
                <Button>Login</Button>
            </div>
        </Container>
    )
}

export default Navbar
import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import styled from "styled-components"

const Navlink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
    padding: 8px;
    border-radius: 5px;

    &:hover {
        filter: brightness(120%);
    }
`

const Navbrand = styled(Navlink)`
    font-size: 2rem;
`

const Container = styled.div`
    width: 100vw;
    padding: 20px;
`

const Navbar = () => {
    const [active, setActive] = useState("home")
    const history = useHistory()

    return (
        <Container>
            <Navbrand to="/">Talky</Navbrand>
            <Navlink to="/">Home</Navlink>
            <Navlink to="/rooms">Chatrooms</Navlink>
        </Container>
    )
}

export default Navbar
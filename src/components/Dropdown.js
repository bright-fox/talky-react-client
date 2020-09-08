import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    position: relative;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    min-width: 150px;
`

const Heading = styled.div`
    border: 1px solid #ff4f5a;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`

const Options = styled.div`
    position: absolute;
    width: 100%;
    display: ${props => props.dropped ? "block" : "none"};
    border: 1px solid #ff4f5a;
    border-top: none;
    background-color: #fff;

    & > * {
        display: block;
        padding: 10px;
        user-select: none;
    }

    & > *:active, & > *:hover {
        background-color: rgba(255,79,90, 0.5);
    }
`

const Dropdown = ({ heading, children }) => {
    const [dropped, setDropped] = useState(false)

    // side effect to hide the dropdown upon click event
    useEffect(() => {
        const closeDropdown = () => {
            setDropped(false)
            window.removeEventListener("click", closeDropdown)
        }

        if (!dropped) return
        window.addEventListener("click", closeDropdown)

        // clean up
        return () => {
            window.removeEventListener("click", closeDropdown)
        }
    })

    return (
        <Container>
            <Heading onClick={() => setDropped(!dropped)}>{heading}</Heading>
            <Options dropped={dropped}>{children}</Options>
        </Container>
    )
}

export default Dropdown
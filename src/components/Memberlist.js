import React from "react"
import styled from "styled-components"

const Container = styled.div`
    background-color: #fff;
    overflow-y: scroll;
    height: calc(100vh - 70px);
    width: 15vw;
    position: absolute;
    right: 0;
    top: 70px;
`

const Meta = styled.div`
    overflow: hidden;
    text-align: center;
    color: darkgray;
    font-size: 0.9rem;
    margin: 10px;

    &:before, &:after {
        background-color: darkgray;
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 50%;
    }

    &:before {
        right: 0.5em;
        margin-left: -50%;
    }

    &:after {
        left: 0.5em;
        margin-right: -50%;
    }
`

const UsernameDisplay = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');
    font-weight: bold;
    margin-left: 15px;
    overflow: hidden;
    font-family: 'Rubik', sans-serif;
`

const Memberlist = ({ members }) => {
    return (
        <Container>
            <Meta>Online ({members.length})</Meta>
            <div>
                {members.map(member => {
                    return <UsernameDisplay key={member}>{member}</UsernameDisplay>
                })}
            </div>
        </Container>
    )
}

export default Memberlist
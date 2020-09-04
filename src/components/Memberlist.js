import React from "react"
import styled from "styled-components"

const Container = styled.div`
    background-color: #fff;
    overflow-y: scroll;
    height: 90vh;
    width: 20vw;
    position: absolute;
    right: 0;
    top: 10vh;
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

const Memberlist = ({ members }) => {
    return (
        <Container>
            <Meta>Online ({members.length})</Meta>
            <div>
                {members.map(member => {
                    return <div key={member.username}>{member}</div>
                })}
            </div>
        </Container>
    )
}

export default Memberlist
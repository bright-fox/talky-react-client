import React from "react"
import styled, { css } from "styled-components"
import moment from "moment"

const MessageContainer = styled.div`
    background-color: ${props => props.color || "#eee"};
    border-radius: 5px;
    padding: 15px;
    ${props => props.isAuthor ? css`margin: 5px 20px 5px auto;` : css`margin: 5px 20px;`}
    position: relative;
    max-width: 70%;
    font-size: 0.8rem;
    ${props => props.isAuthor ? css`border-top-right-radius: 0;` : css`border-top-left-radius: 0;`}

    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;

        ${props => props.isAuthor ? css`
        border-left: 10px solid ${props => props.color || "#eee"};
        border-right: 10px solid transparent;
        border-top: 10px solid ${props => props.color || "#eee"};
        border-bottom: 10px solid transparent;    
        right: -18px;
        top: 0;
        ` : css`
        border-left: 10px solid transparent;
        border-right: 10px solid ${props => props.color || "#eee"};
        border-top: 10px solid ${props => props.color || "#eee"};
        border-bottom: 10px solid transparent;
        left: -18px;
        top: 0px;
        `}
    }
`

const AuthorName = styled.div`
    font-weight: bold;
`

const Metadata = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    float: right;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.6rem;
`

const Content = styled.p`
    width: 100%;
    word-break: break-all;
    margin-bottom: 0;
`

export default ({ author, message, time, isAuthor, color }) => {
    return (
        <MessageContainer isAuthor={isAuthor} color={color}>
            <Metadata>{moment(time).format("ddd, h:mm a")}</Metadata>
            <AuthorName>{author}</AuthorName>
            <Content>{message}</Content>
        </MessageContainer >
    )
}
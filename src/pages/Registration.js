import React from "react"
import styled from "styled-components"
import Input from "../components/Input"
import Button from "../components/Button"

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    display: flex;
    background-color: #ff4f5a;
    height: 90vh;
    font-family: 'Merriweather', serif;
    color: black;
`

const LeftSide = styled.div`
    width: 57vw;
    background: url(${(props) => props.imgUrl}) no-repeat fixed left center;
    background-size: contain;   
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
`

const RightSide = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    display: flex;
    flex-direction: column;
    width: 70%;
    font-family: 'Montserrat', sans-serif;
`

const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 10px;

    & > * {
        margin-right: 5px;
    }
`

const Registration = () => {
    return (
        <Container>
            <LeftSide imgUrl={process.env.PUBLIC_URL + "/images/registration.png"}></LeftSide>
            <RightSide>
                <h1>Sign Up</h1>
                <Form action="">
                    <label htmlFor="username">Username:</label>
                    <Input type="text" name="username" placeholder="username.." />
                    <label htmlFor="email">Email:</label>
                    <Input type="text" name="email" placeholder="email.." />
                    <label htmlFor="confirmEmail">Confirm Email:</label>
                    <Input type="text" name="confirmEmail" placeholder="confirm email.." />
                    <label htmlFor="password">Password:</label>
                    <Input type="password" name="password" placeholder="password.." />
                    <label htmlFor="confirmPassword">Confirm password:</label>
                    <Input type="password" name="confirmPassowrd" placeholder="confirm password.." />
                    <ColorContainer>
                        <label htmlFor="bubbleColor">Bubble Color:</label>
                        <input type="color" name="bubbleColor" value="#ffffff" />
                        <label htmlFor="textColor">Text Color:</label>
                        <input type="color" name="textColor" value="#ffffff" />
                    </ColorContainer>
                    <div style={{ marginTop: "5px" }}>
                        <Button type="submit" color="#4f64ff">Sign Up</Button>
                    </div>

                </Form>
            </RightSide>
        </Container>
    )

}

export default Registration
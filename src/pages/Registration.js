import React from "react"
import styled from "styled-components"
import Input from "../components/Input"
import Button from "../components/Button"
import useForm from "../hooks/useForm"
import { request } from "../api"
import { cacheUser } from "../util"

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
    margin-top: 5vh;
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
async function callback(inputs) {
    const res = await request({ method: "POST", path: "/signup", body: { ...inputs } })
    if (res.status !== 200) return // handle error
    const { user, accessToken } = await res.json()

    cacheUser(user, accessToken)
}

const Registration = () => {
    const initialValues = { username: "", email: "", confirmEmail: "", password: "", confirmPassword: "", bubbleColor: "#ff4f5b", textColor: "#000000" }
    const { inputs, handleInputChange, handleSubmit } = useForm(initialValues, callback)
    return (
        <Container>
            <LeftSide imgUrl={process.env.PUBLIC_URL + "/images/registration.png"}></LeftSide>
            <RightSide>
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <Input type="text" name="username" placeholder="username.." value={inputs.username} onChange={handleInputChange} />
                    <label htmlFor="email">Email:</label>
                    <Input type="text" name="email" placeholder="email.." value={inputs.email} onChange={handleInputChange} />
                    <label htmlFor="confirmEmail">Confirm Email:</label>
                    <Input type="text" name="confirmEmail" placeholder="confirm email.." value={inputs.confirmEmail} onChange={handleInputChange} />
                    <label htmlFor="password">Password:</label>
                    <Input type="password" name="password" placeholder="password.." value={inputs.password} onChange={handleInputChange} />
                    <label htmlFor="confirmPassword">Confirm password:</label>
                    <Input type="password" name="confirmPassowrd" placeholder="confirm password.." value={inputs.confirmPassword} onChange={handleInputChange} />
                    <ColorContainer>
                        <label htmlFor="bubbleColor">Bubble Color:</label>
                        <input type="color" name="bubbleColor" value={inputs.bubbleColor} onChange={handleInputChange} />
                        <label htmlFor="textColor">Text Color:</label>
                        <input type="color" name="textColor" value={inputs.textColor} onChange={handleInputChange} />
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
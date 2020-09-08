import React, { useContext } from "react"
import styled from "styled-components"
import { useHistory, Link } from "react-router-dom"
import Form from "../components/Form"
import Input from "../components/Input"
import Button from "../components/Button"
import useForm from "../hooks/useForm"
import { request } from "../api"
import { cacheUser } from "../util/cache"
import usercontext from "../contexts/usercontext"
import { LOGIN } from "../actions"

const Container = styled.div`
    display: flex;
    background-color: #ff4f5a;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90vh;
`

const Div = styled.div`
    width: 50%;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Meta = styled(Link)`
    font-size: 0.7rem;
    margin-top: -5px;
    margin-bottom: 10px;
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
    }
`

const Login = () => {
    const history = useHistory()
    const { dispatch } = useContext(usercontext)

    // useForm hook
    const initialValues = { username: "", password: "" }
    const { inputs, handleInputChange, handleSubmit } = useForm(initialValues, submitCallback)

    async function submitCallback(inputs) {
        const res = await request({ method: "POST", path: "/login", body: inputs })
        if (res.status !== 200) return // handle error
        const { user, accessToken } = await res.json()

        cacheUser(user, accessToken)
        dispatch({ type: LOGIN, payload: { currUser: user } })
        history.goBack()
    }

    return (
        <Container>
            <Div>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <Input type="text" name="username" placeholder="username.." value={inputs.username} onChange={handleInputChange} />
                    <label htmlFor="password">Password:</label>
                    <Input type="password" name="password" placeholder="password.." value={inputs.password} onChange={handleInputChange} />
                    <Meta to="/signup">If you don't have an account yet, click here to sign up</Meta>
                    <div>
                        <Button type="submit">Login</Button>
                    </div>
                </Form>
            </Div>
        </Container>
    )
}

export default Login
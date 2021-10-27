import React, { Fragment, useContext, useState } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';


import axios from 'axios';
import { AuthContext } from '../App'
const qs = require('querystring')
const api = 'http://localhost:3001'


function LoginComp() {
    const { dispatch } = useContext(AuthContext)


    const intialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    }

    const [data, setData] = useState(intialState)

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })

        const requestBody = {
            email: data.email,
            password: data.password
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(api + '/auth/api/v1/login', qs.stringify(requestBody), config)
            .then(res => {
                if (res.data.success === true) {
                    dispatch({
                        type: "LOGIN",
                        payload: res.data
                    })
                } else {
                    setData({
                        ...data,
                        isSubmitting: false,
                        errorMessage: res.data.Message
                    })
                }
                throw res
            })

    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs="6">
                        <CardImg src="https://placeimg.com/640/480/people" />

                    </Col>
                    <Col xs="6">
                        <h1>Login Form</h1>
                        <hr />
                        <Form onSubmit={handleFormSubmit}>
                            <FormGroup className="mb-2">
                                <Label for="exampleEmail" className="mb-1">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="with a placeholder"
                                    value={data.email}
                                    onChange={handleInputChange}

                                />
                            </FormGroup>
                            <FormGroup className="mb-2">
                                <Label for="examplePassword" className="mb-1">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="password placeholder"
                                    value={data.password}
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            {
                                data.errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {data.errorMessage}
                                    </div>
                                )
                            }
                            <Button disabled={data.isSubmitting}>
                                {data.isSubmitting ? (
                                    "..Loading"
                                ) :
                                    (
                                        "Login"
                                    )

                                }
                            </Button>
                        </Form>
                        <p>Belum punya akun?
                            <Link to="/register">Register</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default LoginComp

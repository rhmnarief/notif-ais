import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import './CSS/Login.css';


export class Login extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="login">
                            <div className="head">
                                <h1>Sign In</h1>
                            </div>
                            <div className="form mt-2">
                                <Form>
                                    <FormGroup>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                    </FormGroup>
                                    <center>
                                        <Button className="login-btn mt-4" color="primary">Masuk</Button>
                                    </center>
                                </Form>

                            </div>
                        </div>
                    </Col>

                </Row>



            </Container>

        )
    }
}

export default Login;

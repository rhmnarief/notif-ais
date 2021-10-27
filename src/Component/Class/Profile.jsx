import React, { Component, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Icon } from '@iconify/react';
import './CSS/Component.css'
import { AuthContext } from '../../App'


function Profile(props) {
    const { state, dispatch } = useContext(AuthContext)
    return (
        <Container className="profile mt-3 mb-5">
            <Row>
                <Col xs={{ size: 10 }}>
                    <div className="profile-bar d-flex">
                        <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
                        <div className="detail m-2">
                            <p>
                                <strong>{props.nama}</strong>
                            </p>
                            <p>{props.role}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={{ size: 1, offset: 1 }}>
                    <div className="d-flex flex-row-reverse align-items-center">
                        <Button
                            className="logout"
                            onClick={() =>
                                dispatch({
                                    type: "LOGOUT"
                                })}
                        >
                            <Icon icon="ci:log-out" width="26px" />
                        </Button>
                    </div>
                </Col>
            </Row>


        </Container>
    )
}

export default Profile;

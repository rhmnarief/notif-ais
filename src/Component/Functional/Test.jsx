import React, { Component, Fragment, useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import Profile from "../Class/Profile";
import Notification from "../Class/Notification";
import axios from "axios";
import { AuthContext } from "../../App";


const api = "http://localhost:3001"

function Test() {
    const { state, dispatch } = useContext(AuthContext)
    const [notif, setNotif] = useState([])

    const getData = () => {
        axios.get(api + '/formtugas')
            .then(res => {
                setNotif(res.data.values)
            })
            .catch(e => {
                console.log(e)
            })
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line


    }, [])

    if (!state.isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <Fragment>
            <Profile
                nama="Jenni Kim"
                role="Mahasiswa - Sistem Informasi"
            />
            <Container>
                <h3>Notification Task</h3>
                <br />
                <Row>
                    <Col sm="4" >
                        {
                            notif.map(notif =>
                                <Notification
                                    key={notif.id}
                                    matakuliah={notif.nama}
                                    deskripsi={notif.deskripsi}
                                    deadline={notif.deadline.split('T')[0]}
                                />

                            )
                        }
                    </Col>

                </Row>

            </Container>

        </Fragment>

    )
}

export default Test;
import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Profile from "../Class/Profile";
import Notification from "../Class/Notification";
import axios from "axios";


const api = "http://localhost:3001"

class HomeMahasiswa extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notif: [],

        }
    }
    componentDidMount() {
        axios.get(api + '/formtugas').then(res => {
            this.setState({
                notif: res.data.values
            })
        })
    }
    render() {
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
                        <Col md="5">
                            <Notification
                                matakuliah="Algoritma Struktur Data"
                                deskripsi="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
                                deadline="23-10-2021"
                            />


                        </Col>
                    </Row>

                </Container>

            </Fragment>

        )
    }
}

export default HomeMahasiswa;
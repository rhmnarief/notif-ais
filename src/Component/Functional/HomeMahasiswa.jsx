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
                        <Col sm="4" >
                            {
                                this.state.notif.map(notification =>
                                    <Notification
                                        key={notification.id}
                                        matakuliah={notification.nama}
                                        deskripsi={notification.deskripsi}
                                        deadline={notification.deadline.split('T')[0]}
                                    />

                                )
                            }
                        </Col>

                    </Row>

                </Container>

            </Fragment>

        )
    }
}

export default HomeMahasiswa;
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container, Row, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import './CSS/InputForm.css'

const api = "http://localhost:3001"

class InputForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            table: [],
            judul: '',
            deskripsi: '',
            nama: '',
            deadline: '',
            reponse: '',
            display: 'none'
        }
    }
    componentDidMount() {
        axios.get(api + '/formtugas').then(res => {
            this.setState({
                table: res.data.values
            })
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    tambahTugas = () => {
        console.log("berhasil")
        // axios.post(api + '/tambahForm', {
        //     judul: this.state.nim,
        //     deskripsi: this.state.deskripsi,
        //     id_matakuliah: this.state.id_matakuliah,
        //     deadline: this.state.deadline,
        // }).then(json => {
        //     if (json.data.status === 200) {
        //         // this.setState({
        //         //     response: json.data.values,
        //         //     display: 'block'
        //         // })
        //     } else {
        //         // this.setState({
        //         //     response: json.data.values,
        //         //     display: 'block'
        //         // })
        //     }
        // })
    }

    render() {
        return (
            <div className="input-form">
                <Container>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Row>
                            <Form>
                                <FormGroup className="mt-2">
                                    <Label>Judul</Label>
                                    <Input type="text" name="judul" placeholder="Masukan judul penugasan" onChange={this.handleChange} value={this.state.judul} />
                                </FormGroup>
                                <FormGroup className="mt-2">
                                    <Label>Deskripsi</Label>
                                    <Input type="text" className="deskrpsi-col" name="deskripsi" placeholder="Masukan deskripsi penugasan" onChange={this.handleChange} value={this.state.deskripsi} />
                                </FormGroup>
                                <FormGroup className="mt-2">
                                    <Label>Mata Kuliah</Label>
                                    <Input type="select" name="matakuliah" placeholder="pilih matakuliah" onChange={this.handleChange} value={this.state.id_matakuliah} >
                                        <option></option>



                                    </Input>
                                </FormGroup>
                                {/* <FormGroup className="mt-2">
                                    <Label>Deadline</Label>
                                    <Input
                                        type="datetime"
                                        name="datetime"
                                        id="exampleDate"
                                        placeholder="date datetime"
                                        value={this.state.deadline}
                                        onChange={this.handleChange}
                                    />

                                </FormGroup> */}
                                <Button onClick={this.tambahTugas} className="submit-btn mt-5">Send</Button>
                            </Form>

                        </Row>
                    </Col>


                </Container>



            </div>


        )

    }

}

export default InputForm;
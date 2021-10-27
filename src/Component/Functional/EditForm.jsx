import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Button, Container, Row, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import qs from 'querystring';
import { NavLink } from 'react-router-dom';
import './CSS/InputForm.css';

const api = "http://localhost:3001"

class EditForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            table: [],
            id: this.props.location.state.id,
            judul: this.props.location.state.judul,
            id_matakuliah: this.props.location.state.id_matakuliah,
            nama: this.props.location.state.nama,
            deskripsi: this.props.location.state.deskripsi,
            deadline: this.props.location.state.deadline,
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/matakuliah').then(res => {
            console.log(res.data.values)
            this.setState({
                table: res.data.values
            })
        })
    }
    handleChange = (e) => {
        console.log("Memanggil Handle dengan Values " + e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editForm = (id_form) => {
        console.log("edit form berjalan")
        const data = qs.stringify({
            id: id_form,
            judul: this.state.judul,
            id_matakuliah: this.state.id_matakuliah,
            deskripsi: this.state.deskripsi,
            deadline: this.state.deadline

        })
        axios.put(api + '/updateForm', data)
            .then(json => {
                console.log("merubah data ke json ")
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                } else {
                    console.log(json.data.values)
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
            })
    }

    render() {
        return (
            <div className="input-form">
                <Container>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Alert color="success" style={{ display: this.state.display }}>
                            {this.state.response}
                        </Alert>
                        <NavLink className="back-button" to="/user-dosen">
                            Back
                        </NavLink>



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
                                    <br />
                                    <select className="dropdown" value={this.state.id_matakuliah}
                                        name="id_matakuliah"
                                        onChange={this.handleChange}>
                                        {this.state.table.map((table) => <option key={table.id} name="id_matakuliah" value={table.id}>{table.nama}</option>)}
                                    </select>
                                </FormGroup>
                                <FormGroup className="mt-2">
                                    <Label>Deadline</Label>
                                    <Input
                                        type="date"
                                        name="deadline"
                                        id="exampleDate"
                                        value={this.state.deadline}
                                        onChange={this.handleChange}
                                    >
                                        {this.state.deadline}
                                    </Input>
                                    <br />

                                </FormGroup>
                                <div className="class mt-3 d-flex align-items-center">
                                    <Button onClick={() => this.editForm(this.state.id)} className="submit-btn">Update</Button>
                                </div>

                            </Form>

                        </Row>
                    </Col>


                </Container>



            </div>


        )

    }

}

export default EditForm;
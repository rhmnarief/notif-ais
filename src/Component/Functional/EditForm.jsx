import React, { Component } from 'react';
import axios from 'axios';
import { Alert, Button, Container, Row, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import qs from 'querystring';
import './CSS/InputForm.css'

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
    // const opsi ={
    //     for (let tables in table){

    //     }
    // }
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

    editForm = (id) => {
        const data = qs.stringify({
            id: id,
            judul: this.state.judul,
            nama: this.props.location.state.nama,
            deskripsi: this.state.deskripsi,
            deadline: this.state.deadline

        })
        axios.post(api + '/updateForm', data)
            .then(json => {
                if (json === 200) {
                    console.log("test")
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                } else {
                    console.log('gagal');
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
                        <Alert color="success" style={{ display: this.state.display }}>
                            {this.state.response}
                        </Alert>
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
                                    <Input type="text" name="matakuliah" placeholder={this.state.nama} onChange={this.handleChange} value={this.state.id_matakuliah} >
                                    </Input>
                                </FormGroup>
                                <FormGroup className="mt-2">
                                    <Label>Deadline</Label>
                                    <Input
                                        type="datetime"
                                        name="date"
                                        id="exampleDate"
                                        placeholder="date placeholder"
                                        value={this.state.deadline}
                                        onChange={this.handleChange}
                                    />
                                    <br />

                                </FormGroup>
                                <Button onClick={() => this.editForm(this.state.id)} className="submit-btn mt-5">Update</Button>
                            </Form>

                        </Row>
                    </Col>


                </Container>



            </div>


        )

    }

}

export default EditForm;
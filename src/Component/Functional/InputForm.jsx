import React, { Component, } from 'react';
import axios from 'axios';
import { Button, Container, Row, Form, FormGroup, Label, Input, Col, Dropdown, DropdownItem, Alert } from 'reactstrap';
import './CSS/InputForm.css'
import { NavLink } from 'react-router-dom';


const api = "http://localhost:3001"

class InputForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            table: [],
            nama: '',
            sks: '',
            kelas: '',

            judul: '',
            id_matakuliah: '',
            deskripsi: '',
            nama: '',
            deadline: '',

            reponse: '',
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
        console.log("Melaakukan Handle Change " + e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // error input tugas
    tambahTugas = () => {
        console.log('memanggil tambah tugas')
        axios.post(api + '/tambahForm', {
            judul: this.state.judul,
            deskripsi: this.state.deskripsi,
            deadline: this.state.deadline,
            id_matakuliah: this.state.id_matakuliah
        }).then(json => {
            if (json.data.status === 200) {
                console.log("Data berhasil dikirim")
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            } else {
                console.log("Data gagal dikirim")
                this.setState({
                    response: json.data.values,
                    display: 'block',

                })
            }
        })

    }



    render() {
        return (
            <Container>
                <div className="input-form">

                    <Col md={{ size: 6, offset: 3 }}>

                        <NavLink className="back-button mb-3" to="/user-dosen">
                            Back
                        </NavLink>
                        <br />
                        <br />
                        <Alert color="success" style={{ display: this.state.display }}>
                            {this.state.response}
                        </Alert>
                        <br />
                        <Row >
                            <Form>
                                <FormGroup >
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
                                    <select className="dropdown" value={this.id_matakuliah} name="id_matakuliah"
                                        onChange={this.handleChange}>
                                        {this.state.table.map((table) => <option value={table.id} name="id_matakuliah" >{table.nama + ' - ' + table.kelas}</option>)}
                                    </select>
                                </FormGroup>
                                <FormGroup className="mt-2">
                                    <Label>Deadline</Label>
                                    <Input
                                        type="date"
                                        name="deadline"
                                        placeholder="date datetime"
                                        onChange={this.handleChange}
                                        value={this.deadline}

                                    />

                                </FormGroup>
                                <div className="class mt-5">

                                    <Button onClick={this.tambahTugas} className="submit-btn ">Send</Button>

                                </div>

                            </Form>

                        </Row>
                    </Col>


                </div>
                </Container>





        )

    }

}

export default InputForm;
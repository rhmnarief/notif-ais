import React, { Component } from 'react';
import { Table, Button, TabContent, Alert, Container } from 'reactstrap';
import qs from 'querystring';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './CSS/Component.css';
import { Icon } from '@iconify/react';

const api = "http://localhost:3001"

class TableTugas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            table: [],
            reponse: '',
            display: 'none',

        }
    }
    componentDidMount() {
        axios.get(api + '/formtugas').then(res => {
            console.log(res.data.values)
            this.setState({
                table: res.data.values
            })
        })
    }

    hapusTable = (id_table) => {
        console.log("memanggil hapus table")
        const { table } = this.state
        const data = qs.stringify({
            id: id_table
        })

        axios.delete(api + '/deleteForm',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    table: table.filter(table => table.id !== id_table),
                    display: 'block',

                })
                console.log(json.data.values)
            } else {
                console.log('error mendelete data' + json.data.values)
                this.setState({
                    response: json.data.values,
                    display: 'block',
                })
            }
        })

    }
    handleAlert = () => {
        this.setState({
            display: true
        })

    }

    render() {
        return (

            <div className="table-bordered mt-3">
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}

                </Alert>
                <Table>
                    <thead>
                        <tr>
                            <th>Mata Kuliah</th>
                            <th>Judul</th>
                            <th>Deskripsi</th>
                            <th>Deadline</th>
                            {/* <th>Jam</th> */}
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.table.map(table =>
                            <tr key={table.id}>
                                <td>{table.nama + ' - ' + table.kelas}</td>
                                <td>{table.judul}</td>
                                <td>{table.deskripsi}</td>
                                <td>
                                    <center>
                                        {table.deadline.split('T')[0]}
                                    </center>
                                </td>


                                <td className="d-flex align-items-center justify-content-center">
                                    <Link to={
                                        {
                                            pathname: '/edit',
                                            state: {
                                                id: table.id,
                                                nama: table.nama,
                                                id_matakuliah: table.id_matakuliah,
                                                judul: table.judul,
                                                deskripsi: table.deskripsi,
                                                deadline: table.deadline,
                                            }
                                        }

                                    }>
                                        <Button className="btn-edit">
                                                <Icon icon="clarity:note-edit-line" color="white" />
                                        </Button>

                                    </Link>
                                    <Button onClick={() => this.hapusTable(table.id)} className="btn-delete" color="danger">
                                        <Icon icon="bi:trash-fill" color="white" />
                                    </Button>


                                </td>

                            </tr>


                        )}


                    </tbody>
                </Table>
            </div>

        )
    }
}

export default withRouter(TableTugas);
import React, { Component } from 'react';
import { Table, Button, TabContent } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CSS/Component.css';
import { Icon } from '@iconify/react';

const api = "http://localhost:3001"

class TableTugas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            table: [],
            reponse: ''

        }
    }
    componentDidMount() {
        axios.get(api + '/formtugas').then(res => {
            this.setState({
                table: res.data.values
            })
        })
    }

    render() {
        return (
            <div className="table-bordered mt-3">
                <Table>
                    <thead>
                        <tr>
                            <th>Mata Kuliah</th>
                            <th>Judul</th>
                            <th>Deskripsi</th>
                            <th>Deadline</th>
                            <th>Jam</th>
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
                                <td>
                                    <center>
                                        {table.deadline.slice(11, 16)}
                                    </center>
                                </td>

                                <td>
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
                                        <center>
                                            <Button className="btn-edit">
                                                <Icon icon="clarity:note-edit-line" color="white" />
                                            </Button>
                                        </center>
                                    </Link>

                                </td>

                            </tr>


                        )}


                    </tbody>
                </Table>
            </div>

        )
    }
}

export default TableTugas;
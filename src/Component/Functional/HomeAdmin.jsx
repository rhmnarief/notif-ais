import React, { useContext, Fragment } from 'react';
import {
    Container,
    Button,
    Form,
    Table

} from 'reactstrap';
import qs from 'querystring';
import axios from 'axios';
import { Icon } from '@iconify/react';
import './CSS/Home.css';
import TableTugas from '../Class/TableTugas';
import { Link } from 'react-router-dom';
import Profile from '../Class/Profile';
import { AuthContext } from '../../App';
import { Redirect } from 'react-router-dom';


const api = "http://localhost:3001"


function Home() {
    const { state, dispatch } = useContext(AuthContext)
    if (!state.isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <Fragment>
            <Profile
                nama="Najwa Shihab"
                role="Dosen - Sistem Informasi"
            />
            <div className="homepage">
                <Container>
                    <h2 className="head mb-5">
                        <strong>Dashboard</strong>
                        <br />
                        <i className="italic">Task Manager</i>
                    </h2>
                    <Link to="/input">
                        <button className="add-btn">
                            <Icon className="" icon="bi:plus-lg" color="white" />
                            Tambah
                        </button>
                    </Link>

                    <TableTugas />
                </Container>


            </div>


        </Fragment>

    )


}

export default Home;
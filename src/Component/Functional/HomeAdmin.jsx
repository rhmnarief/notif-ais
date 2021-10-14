import React, { Fragment } from 'react';
import {
    Container,
    Button,
    Form,
    Table

} from 'reactstrap';
import { Icon } from '@iconify/react';
import './CSS/Home.css';
import TableTugas from '../Class/TableTugas';
import { Link } from 'react-router-dom';
import Profile from '../Class/Profile';


function Home() {
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
                            <Icon icon="bi:plus-lg" color="#fff" />
                            <span> </span>
                            Tambah
                        </button>
                    </Link>

                    <div className="table">
                        <TableTugas />

                    </div>


                </Container>


            </div>


        </Fragment>

    )
}

export default Home;
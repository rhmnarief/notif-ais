import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './CSS/Component.css'

const Profile = (props) => {
    return (
        <Container>

            <div className="profile-bar mt-2 mb-5 d-flex flex-row-reverse">
                <img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" />
                <div className="detail m-2">
                    <p>
                        <strong>{props.nama}</strong>
                    </p>
                    <p>{props.role}</p>
                </div>
            </div>
        </Container>
    )
}

export default Profile;

import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import './CSS/Component.css'

const Notification = (props) => {
    return (
        <div className="notification mb-3">
            <div className="bubble">
                <div className="bullets">
                    <Icon icon="akar-icons:circle-fill" color="white" />
                </div>
                <div className="details">
                    <div className="header">
                        <p className="judul mb-1">
                            <strong>
                                {props.matakuliah}
                            </strong>
                        </p>
                    </div>
                    <div className="description">
                        <p className="mb-1">{props.deskripsi}</p>
                        <p className=" mb-1">
                            Due Date :
                            {' ' + props.deadline}
                        </p>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Notification;

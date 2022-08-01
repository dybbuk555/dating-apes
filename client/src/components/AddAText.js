import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from '../context/auth.context';
import React from 'react';

function AddAText(props) {

    const { user } = useContext(AuthContext)
    const [aText, setAText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { aText, userRecieve: props.userId, userSend: user._id };
        const storedToken = localStorage.getItem('authToken');
        axios
            .post(`/api/messages`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then((response) => {
                setAText("");
                props.refreshUser();
            })
            .catch((error) => console.log(error));
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="aText"
                    value={aText}
                    onChange={(e) => setAText(e.target.value)}
                    className='AddAText-input'
                />
                <button type="submit" className='AddAText-btn'>SEND</button>
            </form>
        </div>
    );
}

export default AddAText;
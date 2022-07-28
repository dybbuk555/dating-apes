import { useContext, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from '../context/auth.context';

import React from 'react';


// const API_URL = "http://localhost:5005";


function AddAText(props) {

    const { user } = useContext(AuthContext)

    console.log(user)

    const [aText, setAText] = useState("");
    // const { userId } = props;
    // const { userRecieveId } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { aText, userRecieve: props.userId, userSend: user._id };


        //這裡要再授權一次
        const storedToken = localStorage.getItem('authToken');

        axios
            //這裡要再授權一次
            .post(`/api/messages`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })

            .then((response) => {
                setAText("");
                props.refreshUser();
            })
            .catch((error) => console.log(error));
    };


    return (
        <div>
            
            <form onSubmit={handleSubmit} className='AddAText-form'>
                {/* <label>Text me?</label> */}
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
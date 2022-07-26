import { useContext, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from '../context/auth.context';

import React from 'react';


const API_URL = "http://localhost:5005";

function AddAText(props) {

    const { user } = useContext(AuthContext)

    console.log(user)

    const [aText, setAText] = useState("");
    // const { userId } = props;
    // const { userRecieveId } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { aText, userRecieve: props.userId, userSend: user._id };

        // console.log('檢查',requestBody)

        //應該長得像這樣
        // const requestBody = { aText, userRecieve: userId, userSend: user._id };

        //這裡要再授權一次
        const storedToken = localStorage.getItem('authToken');

        axios
            //這裡要再授權一次
            .post(`${API_URL}/api/messages`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })

            .then((response) => {
                setAText("");
                props.refreshUser();
            })
            .catch((error) => console.log(error));
    };


    return (
        <div className="AddTask">
            <h3>Send messages</h3>

            <form onSubmit={handleSubmit}>
                <label>Text me?</label>
                <input
                    type="text"
                    name="aText"
                    value={aText}
                    onChange={(e) => setAText(e.target.value)}
                />
                {/* <p>{userSend}</p> */}

                <button type="submit">SEND</button>
            </form>
        </div>
    );
}

export default AddAText;
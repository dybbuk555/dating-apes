import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";


function AddAText(props) {
    const [aText, setAText] = useState("");
    const [userSend, setUserSend] = useState("");
    const { userId } = props;
    const {userRecieveId} = useParams()

    const handleSubmit = (e) => {
        e.preventDefault();
     
        const requestBody = { aText, userRecieve: userRecieveId, userSend: userId };

        //這裡要再授權一次
        const storedToken = localStorage.getItem('authToken');

        axios
            //這裡要再授權一次
            .post(`${API_URL}/api/messages`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then((response) => {
                setAText("");
                setUserSend();
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
                <p>{userSend}</p>

                <button type="submit">SEND</button>
            </form>
        </div>
    );
}

export default AddAText;
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";


function AddAText(props) {
    const [aText, setAText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const { userId } = props;
        const requestBody = { aText, userId };

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

                <button type="submit">SEND</button>
            </form>
        </div>
    );
}

export default AddAText;
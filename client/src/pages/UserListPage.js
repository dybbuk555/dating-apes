import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./../components/UserCard";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import Navbar from "../components/Navbar";



const API_URL = "http://localhost:5005";


function UserListPage() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        // Get the token from the localStorage
        const storedToken = localStorage.getItem("authToken");

        // Send the token through the request "Authorization" Headers
        axios
            .get(
                `${API_URL}/api/users`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllUsers();
    }, []);


    return (
        <div className='UserList-1'>
            <Navbar />


            <div className='UserList-2'>
                {users?.map((user) => <UserCard key={user._id} user={user} />)}
            </div>
        </div>
    );
}

export default UserListPage;


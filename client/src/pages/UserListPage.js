import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./../components/UserCard";
import Navbar from "../components/Navbar";

function UserListPage() {
    const [users, setUsers] = useState([]);
    const getAllUsers = () => {
        const storedToken = localStorage.getItem("authToken");
        axios
            .get(
                `/api/users`,
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


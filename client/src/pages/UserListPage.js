import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./../components/UserCard";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

function UserListPage() {
    const [users, setUsers] = useState([]);
    const getAllUsers = () => {
        const storedToken = localStorage.getItem("authToken");
        axios
            .get(
                `/api/users`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                Swal.fire({
                    title: 'Uploading...',
                    html: 'Please wait...',
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading()
                    }
                });
                setUsers(response.data)
                Swal.close();
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className='UserList-1'>
            <Navbar />
            <div className='UserList-2'>
                {
                    users?.map((user) => <UserCard key={user._id} user={user} />)}
            </div>
        </div>
    );
}

export default UserListPage;


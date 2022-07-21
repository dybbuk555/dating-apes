import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./../components/UserCard";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

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
        <>
            <div>
                {isLoggedIn && (
                    <>
                        {/* <Link to="/projects">
                        <button>Projects</button>
                    </Link> */}

                        <button onClick={logOutUser}>Logout</button>
                        <span>{user && user.name}</span>
                    </>
                )}
            </div>
            <div>


                {users?.map((user) => <UserCard key={user._id} user={user} />)}

            </div>
        </>
    );
}

export default UserListPage;


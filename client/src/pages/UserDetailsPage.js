import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";


function UserDetailsPage (props) {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  
  
  const getUser = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/users/${userId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneUser = response.data;
        setUser(oneUser);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getUser();
  }, [] );

  
  return (
    <div className="UserDetails">
      {user && (
        <>
          <h1>{user.name}</h1>
          <p>{user.animal}</p>
        </>
      )}

      

      {/* { user && user.tasks.map((task) => <TaskCard key={task._id} {...task} /> )}  */}

      <Link to="/users">
        <button>Back to check others</button>
      </Link>
          
   
      
    </div>
  );
}

export default UserDetailsPage;
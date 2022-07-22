import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";


function UserDetailsPage(props) {
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



  useEffect(() => {
    getUser();
  }, []);


  return (
    <div className="UserDetails">
      {user && (
        <>
          <img src={user.url} style={{ height: '350px',width: '500px', objectFit: 'cover' }}/>

          <h1>{user.name}</h1>
          <p>Type:{user.animal}</p>
          <p>Gender:{user.gender}</p>
          <p>Birthday:{user.birthday.slice(0, 10)}</p>
          <p>Height:{user.height}</p>
          <p>Width:{user.width}</p>
          <p>Active Area:{user.postCode}</p>
          <p>About Me:{user.aboutPet}</p>

        </>
      )}






      {/* { user && user.tasks.map((task) => <TaskCard key={task._id} {...task} /> )}  */}

      <Link to="/users">
        <button>Check Others</button>
      </Link>



    </div>
  );
}

export default UserDetailsPage;
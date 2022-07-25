import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import WebFont from 'webfontloader';
import AddAText from "../components/AddAText";
import MessageCard from "../components/MessageCard";



const API_URL = "http://localhost:5005";


function UserDetailsPage(props) {
  //字體設定
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rampart One', 'Quicksand']
      }
    });
  }, []);
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

  // console.log(user.messages)
  return (
    // <div className='UserDetail-1' style={{ fontFamily: 'Quicksand' }}>
    <div className='UserList-1' style={{ fontFamily: 'Quicksand' }}>

      <Navbar />

      {user && (
        <div className='UserDetail-2'>
          <div className='UserDetail-2-1'>
            <img src={user.url} style={{ height: '350px', width: '500px', objectFit: 'cover' }} />
          </div>

          <div className='UserDetail-2-2'>
            <h1>{user.name.slice(0, 1).toUpperCase() + user.name.slice(1).toLowerCase()},&nbsp;{user.age}y</h1>
            <p>Type:{user.animal}</p>
            <p>Gender:{user.gender}</p>
            <p>Birthday:{user.birthday.slice(0, 10)}</p>
            <p>Height:{user.height}</p>
            <p>Width:{user.weight}</p>
            <p>LANGUAGE:{user.lang}</p>
            <p>About Me:{user.aboutMe}</p>
          </div>

          <AddAText refreshUser={getUser} userId={userId} />


          {user && user.messages.map((message) => <MessageCard key={message._id} {...message} />)}

        </div>
      )}


    </div >
  );
}

export default UserDetailsPage;
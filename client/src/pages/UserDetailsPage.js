import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddAText from "../components/AddAText";
import MessageCard from "../components/MessageCard";
import ConvertZodiac from "../components/ConvertZodiac";

function UserDetailsPage(props) {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const getUser = () => {
    const storedToken = localStorage.getItem('authToken');
    axios
      .get(
        `/api/users/${userId}`,
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
    <div className='UserList-1' style={{ fontFamily: 'Quicksand' }}>
      <Navbar />
      {user && (
        <div className='UserDetail-1_5'>
          <div className='UserDetail-2'>
            <div className='UserDetail-3-1'>
              <div className='UserDetail-3-1-1'>
                <img src={user.url} style={{ borderRadius: '5px', border: '1px solid black', height: '57.4vh', width: '34.7vw', objectFit: 'cover' }} alt="user"/>
              </div>
            </div>
            <div className='UserDetail-3-2'>
              <div className='UserDetail-3-2-1'>
                <div style={{ backgroundColor: 'black', color: 'white', border: '1px solid black', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', paddingLeft: '1vw' }}>
                  <p style={{ margin: '0.5vh', fontSize: '1rem', paddingLeft: '0.3vw' }}>My self-summary</p>
                </div>
                <div style={{ marginBottom: '4vh', backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', paddingLeft: '1.5vw', paddingRight: '1.5vw' }}>
                  <p>{user.aboutMe}</p>
                </div>
              </div>
              <div className='UserDetail-3-2-2'>
                <div style={{ backgroundColor: 'black', color: 'white', border: '1px solid black', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', paddingLeft: '1vw' }}>
                  <p style={{ margin: '0.5vh', fontSize: '1rem', paddingLeft: '0.3vw' }}>Details</p>
                </div>
                <div style={{ backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', paddingLeft: '1vw' }}>
                  <div className='UserDetail-9-1'>
                    <div>
                      <img
                        src="https://res.cloudinary.com/dsy2gebem/image/upload/v1658911517/third-project-bg/infoIcon_jxnrsn.png"
                        style={{ height: '3.5vh' }} alt="info-icon"/>
                    </div>
                    <div className='UserDetail-9-2'>
                      <p>{user.name.slice(0, 1).toUpperCase() + user.name.slice(1).toLowerCase()} | {user.gender} | {user.animal}</p>
                    </div>
                  </div>
                  <div className='UserDetail-9-1'>
                    <div>
                      <img
                        src="https://res.cloudinary.com/dsy2gebem/image/upload/v1658912169/third-project-bg/heightIcon_copy_wb5vsn.png"
                        style={{ height: '3.5vh' }} alt="height-icon"/>
                    </div>
                    <div className='UserDetail-9-2'>
                      <p>{user.height}cm | {user.weight}kg</p>
                    </div>
                  </div>
                  <div className='UserDetail-9-1'>
                    <div>
                      <img
                        src="https://res.cloudinary.com/dsy2gebem/image/upload/v1658911517/third-project-bg/langIcon_qnnoc8.png"
                        style={{ height: '3.5vh' }} alt="lang-icon"/>
                    </div>
                    <div className='UserDetail-9-2'>
                      <div className='UserDetail-9-2-1'>
                        <p>{user.lang} | {user.birthday.slice(0, 10)}&nbsp;</p>
                        <ConvertZodiac birthday={user.birthday} />
                      </div>
                    </div>
                  </div>
                  <div className='UserDetail-9-1'>
                    <div>
                      <img
                        src="https://res.cloudinary.com/dsy2gebem/image/upload/v1658911517/third-project-bg/areaIcon_rsleh0.png"
                        style={{ height: '3.5vh' }} alt="area-icon"/>
                    </div>
                    <div className='UserDetail-9-2'>
                      <p>{user.area}  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='UserDetail-04' style={{ backgroundColor: 'black', color: 'white', border: '1px solid black', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', paddingLeft: '1vw' }}>
            <p style={{ margin: '0.5vh', fontSize: '1rem', paddingLeft: '0.3vw' }}>Send messages</p>
          </div>
          <div className='UserDetail-4'>
            <div className='UserDetail-4-1'>
              <AddAText refreshUser={getUser} userId={userId} />
            </div>
            <div className='UserDetail-4-2'>
              {user && user.messages.map((message) => <MessageCard key={message._id} message={message} />)}
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default UserDetailsPage;
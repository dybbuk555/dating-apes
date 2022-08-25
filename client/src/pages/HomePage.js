import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

import Navbar from "../components/Navbar";


function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);

  return (

    <div style={{ width: '100vw', height: '100vh', backgroundRepeat: 'no-repeat', backgroundImage: `url(https://res.cloudinary.com/dsy2gebem/image/upload/v1658500441/third-project-bg/bgAnimation_wps0uz.gif)`, backgroundSize: 'cover' }}>
      <Navbar />


      <div className='Home-2-1' >
        <h1 style={{ fontFamily: 'Rampart One', fontWeight: 'lighter', fontSize: '4.5em' }}>This is fish being happy</h1>
        <p style={{ fontFamily: 'Quicksand', fontWeight: '300', fontSize: '1.3em', width: '55vw', marginTop: '-30px', lineHeight: '1.65em' }}>Huizi asked Zhuangzi: <br />&nbsp;&nbsp;“ Sir, you are not a fish, how do you know what the happiness of fish is? ”<br />Zhuangzi answered:<br />&nbsp;&nbsp;“ Sir, you are not me, how do you know that I do not know what the happiness of fish is? ”
          <br />The conversation of these two ancient philosophers showed that the limited nature of human knowledge.
          Yes! We can never know if the FISH/DOG/CAT... is happy.
          But we can make them feel the happiness of being a human.<br />Let’s find partners for your pets.  </p>
      </div>


      <div className='Home-2-2' >
        {!isLoggedIn && (
          <>
            <Link to="/signup"> <button style={{ fontSize: '1.2em', fontWeight: '900', color: 'white', backgroundColor: 'black', padding: '0.6rem', paddingLeft: '2rem', paddingRight: '2rem', border: 'none', marginTop: '5vh', marginLeft: '3px' }}>JOIN US</button> </Link>
          </>
        )}
      </div>
      <div className='Home-footer'>
        <p style={{color:'black'}}>&copy; 2022 <a href="https://github.com/WHL99/" target="_blank" rel="noreferrer" style={{textDecoration:'underline', color:'black'}}>Wen-Hsuan Liao</a> All Rights Reserved</p>
      </div>
    </div>
  );
}

export default HomePage;
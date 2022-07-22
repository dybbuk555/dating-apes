import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

import { useEffect } from "react";
import WebFont from 'webfontloader';

import logoNavbar from '../images/logoNavbar.png';
import bg01 from '../images/bg01.png';
import bg02 from '../images/bg02.png';
import bg03 from '../images/bg03.png';





function HomePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  //字體設定
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rampart One', 'Quicksand']



      }
    });
  }, []);


  return (
    // <div style={{bachgroundImage:`${bg01}`}}>
    // <div style={{bachgroundImage:`${bg01}`}}>
    <div style={{ width: '100vw', height: '100vh', backgroundRepeat: 'no-repeat', backgroundImage: `url(https://res.cloudinary.com/dsy2gebem/image/upload/v1658491209/third-project-bg/bg01_zijsva.png)`, backgroundSize: 'cover' }}>


      <div>

        <img src={logoNavbar} style={{ height: '7vh' }} />

        {!isLoggedIn && (
          <div>
            <Link to="/login"> <button>Login</button> </Link>
          </div>
        )}

        {/* 在登入狀態中 可以前往查看的連結 */}
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
        <h1 style={{ fontFamily: 'Rampart One', fontWeight: 'lighter', fontSize: '3.4em' }}>This is fish being happy</h1>
        <p style={{ fontFamily: 'Quicksand', fontWeight: '300', fontSize: '1.3em', width: '55vw' }}>Huizi asked Zhuangzi: <br />“ Sir, you are not a fish, how do you know what the happiness of fish is? ”<br />Zhuangzi answered:<br /> “ Sir, you are not me, how do you know that I do not know what the happiness of fish is? ”
          <br />The conversation of these two ancient philosophers showed that the limited nature of human knowledge.
          Yes! We can never know if the FISH/DOG/CAT/APE... is happy.
          But we can make them feel the happiness of being a human.<br />Let’s find partners for your pets.  </p>
      </div>


      <div>
        {/* 測試階段 先讓我看到按鈕 */}
        {/* {!isLoggedIn && ( */}
        <>
          <Link to="/signup"> <button style={{ fontSize: '1.2em', fontWeight: '900', color: 'white', backgroundColor: 'black', padding: '0.6rem', paddingLeft: '2rem', paddingRight: '2rem', border: 'none' }}>JOIN US</button> </Link>
          {/* <Link to="/login"> <button>Login</button> </Link> */}
        </>
        {/* )} */}
      </div>

    </div>
  );
}

export default HomePage;
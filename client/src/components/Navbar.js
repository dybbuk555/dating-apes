import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./../context/auth.context";
import logoNavbar from '../images/logoNavbar.svg';
import WebFont from 'webfontloader';



function Navbar() {
    //字體設定
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Quicksand']
            }
        });
    }, []);

    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return (
        <nav className='Navbar-0' style={{ fontFamily: 'Quicksand' }}>

            {/* 在非登入狀態中 可以前往查看的連結 */}
            {!isLoggedIn && (

                <div className='Navbar-1'>

                    <div className='Navbar-2-1'>
                        <a href="http://localhost:3000/">
                            <img src={logoNavbar} />
                        </a>
                    </div>


                    <div className='Navbar-02-02'>
                        <p>Already hadve an account?</p>

                    </div>

                    <div className='Navbar-02-03'>
                        <Link to="/login"> <button style={{
                            backgroundColor: 'Transparent',
                            border: '1.5px solid black',
                            padding: '7px',
                            borderRadius: '3px',
                            paddingLeft: '14px',
                            paddingRight: '14px',
                        }}>LOGIN</button> </Link>
                    </div>
                </div>
            )}


            {/* 在登入狀態中 可以前往查看的連結 */}
            {isLoggedIn && (

                <div className='Navbar-1'>
                    <div className='Navbar-2-1'>
                        <a href="http://localhost:3000/">
                            <img src={logoNavbar} style={{ height: '7vh' }} />
                        </a>
                    </div>

                    <div className='Navbar-2-4'>
                        <img
                            src="https://res.cloudinary.com/dsy2gebem/image/upload/v1658575063/third-project-bg/iconwalk_bpncwm.png"
                            style={{ height: '3.5vh' }} />

                    </div>


                    <div className='Navbar-2-2'>

                        <Link to="/users">
                            <button style={{
                                // backgroundColor: 'rgba(255,255,102,0.8)',
                                backgroundColor: 'transparent',

                                border: '1px solid yellow',
                                border: 'none',
                                padding: '8px 27px 8px 27px',
                                // borderRadius: '3px',
                                color: 'black',
                                fontWeight: 'bold',
                                letterSpacing: '-0.3px',
                                fontSize: '1.2rem',

                                marginRight: '30px'
                            }}>WALK AROUND</button>



                        </Link>
                    </div>
                    <div className='Navbar-2-3'>
                        <button style={{
                            backgroundColor: 'Transparent',
                            border: '1px solid gray',
                            padding: '7px',
                            borderRadius: '3px',
                            paddingLeft: '14px',
                            paddingRight: '14px'
                        }} onClick={logOutUser}>LOG OUT</button>
                    </div>
                </div>
            )}


        </nav >
    );
}


export default Navbar;
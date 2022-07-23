import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import logoNavbar from '../images/logoNavbar.svg';


function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return (
        <nav className='Navbar-1'>

            <div className='Navbar-2'>
                <a href="http://localhost:3000/">
                    <img src={logoNavbar} style={{ height: '7vh' }} />
                </a>
            </div>

            {/* <div className='Navbar-2-1'> */}
            {!isLoggedIn && (
                <div className='Navbar-2-1'>
                    <>
                        <p>Already hadve an account?</p>
                    </>
                    <>
                        <Link to="/login"> <button style={{
                            backgroundColor: 'Transparent',
                            border: '1.5px solid black',
                            padding: '7px',
                            borderRadius: '3px',
                            paddingLeft: '14px',
                            paddingRight: '14px',
                        }}>LOGIN</button> </Link>
                    </>
                </div>
            )}
            {/* </div> */}


            {/* 在登入狀態中 可以前往查看的連結 */}
            <div className='Navbar-2-2'>
                {isLoggedIn && (
                    <div className='Navbar-3'>
                        <Link to="/users">
                            <button style={{
                                backgroundColor: 'rgba(255,255,102,0.8)',
                                border: '1px solid yellow',
                                padding: '7.2px 25px',
                                // borderRadius: '3px',
                                color: 'black',
                                fontWeight: 'bold',
                                letterSpacing: '0.6px',

                                marginRight: '30px'
                            }}>WALKING AROUND</button>
                        </Link>

                        <button style={{
                            backgroundColor: 'Transparent',
                            border: '1px solid gray',
                            padding: '7px',
                            // borderRadius: '3px',
                            paddingLeft: '14px',
                            paddingRight: '14px'
                        }} onClick={logOutUser}>LOG OUT</button>
                    </div>
                )}
            </div>

        </nav >
    );
}


export default Navbar;
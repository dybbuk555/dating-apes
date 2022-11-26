import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import logoNavbar from '../images/logoNavbar.png';

function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return (
        <nav className='Navbar-0'>
            {!isLoggedIn && (
                <div className='Navbar-1'>
                    <div className='Navbar-2-1'>
                        <a href="/">
                            <img src={logoNavbar} style={{ height: '7vh' }} alt="logo-navbar" />
                        </a>
                    </div>

                    <div className='Navbar-02-02'>
                        <p>Already have an account?</p>
                    </div>

                    <div className='Navbar-02-03'>
                        <Link to="/login"> <button className='btn-hover' style={{
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

            {isLoggedIn && (
                <div className='Navbar-1'>
                    <div className='Navbar-2-1'>
                        <a href="/">
                            <img src={logoNavbar} style={{ height: '7vh' }} alt="logo-navbar" />
                        </a>
                    </div>

                    <div className='Navbar-2-4'>
                        <img
                            src="https://res.cloudinary.com/dsy2gebem/image/upload/v1658575063/third-project-bg/iconwalk_bpncwm.png"
                            style={{ height: '3.5vh' }} alt="walk-icon" />
                    </div>

                    <div className='Navbar-2-2'>
                        <Link to="/users">
                            <button className='btn-hover' style={{
                                backgroundColor: 'transparent',
                                border: '1px solid yellow',
                                border: 'none',
                                padding: '8px 27px 8px 27px',
                                color: 'black',
                                fontWeight: 'bold',
                                letterSpacing: '-0.3px',
                                fontSize: '1.2rem',
                                marginRight: '30px'
                            }}>WALK AROUND</button>
                        </Link>
                    </div>

                    <div className='Navbar-2-5'>
                        <img
                            src="https://res.cloudinary.com/dsy2gebem/image/upload/v1658843947/third-project-bg/Untitled-1-10_xgo2qo.png"
                            style={{ height: '3.5vh' }} alt="food-icon" />
                    </div>
                    <div className='Navbar-2-6'>
                        <a href={`/users/${user._id}`}>
                            {user.name}
                            <button className='btn-hover' style={{
                                backgroundColor: 'transparent',
                                border: '1px solid yellow',
                                border: 'none',
                                padding: '8px 27px 8px 27px',
                                color: 'black',
                                fontWeight: 'bold',
                                letterSpacing: '-0.3px',
                                fontSize: '1.2rem',
                                marginRight: '30px'
                            }}>
                                {user.email.toString().split('@')[0].toUpperCase()}'s FEEDS
                            </button>
                        </a>
                    </div>

                    <div className='Navbar-2-3'>
                        <button className='btn-hover' style={{
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
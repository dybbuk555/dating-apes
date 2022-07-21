import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider `value` prop
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>

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

            {/* 沒登入時 看見註冊和登入按鈕 */}
            {!isLoggedIn && (
                <>
                    {/* 移到首頁 */}
                    {/* <Link to="/signup"> <button>JOIN US</button> </Link> */}
                    {/* <Link to="/login"> <button>Login</button> </Link> */}
                </>
            )}
        </nav>
    );
}


export default Navbar;
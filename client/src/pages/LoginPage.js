import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import Navbar from "../components/Navbar";


// const API_URL = "http://localhost:5005";


function LoginPage(props) {
  //字體設定
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, verifyStoredToken } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`/auth/login`, requestBody)
      .then((response) => {
        // navigate("/users");

        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        // authenticateUser();
        //  navigate("/users");
        verifyStoredToken()
          .then(() => {
            // redirect to projects
            navigate('/users')
          })
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };







  return (

    <div style={{ fontFamily: 'Quicksand' }}>

      <Navbar />

      <form className='Signup-9-Login' onSubmit={handleLoginSubmit}>
        <h3>Let's find someone for your pet &nbsp; ٩(^ᴗ^)۶ </h3>
        {/* <h3>Let's find something for your pet ٩(✿∂‿∂✿)۶</h3> */}

        <div className='Signup-9-1'>

          <label>email :</label>
          <input type="email" name="email" value={email} onChange={handleEmail} />
        </div>

        <div className='Signup-9-1'>
          <label>password :</label>
          <input type="password" name="password" value={password} onChange={handlePassword} />
        </div>


        <div className='Signup-9-1'>
          <button style={{ borderRadius: '30px', marginTop: '1.5vh' }} type="submit" >LOGIN</button>
        </div>


      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className='Login-bottom-text' >
        <p>Don't you have an account yet?&nbsp;&nbsp;&nbsp;</p>
        <Link to={"/signup"}> SIGN UP</Link>
      </div>
    </div>
  )
}

export default LoginPage;
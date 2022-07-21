import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";


function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [postCode, setPostCode] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [animal, setAnimal] = useState("");
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();


  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();


  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleBirthday = (e) => setBirthday(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handlePostCode = (e) => setPostCode(e.target.value);
  const handleAnimal = (e) => setAnimal(e.target.value);
  const handleHeight = (e) => setHeight(e.target.value);
  const handleWidth = (e) => setWidth(e.target.value);



  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name, birthday, gender, postCode, animal, height, width };
    // 照片之後再加

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };


  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Birthday:</label>
        <input type="date" name="birthday" value={birthday} onChange={handleBirthday} />

        <label>Gender:</label>
        <input type="text" name="gender" value={gender} onChange={handleGender} />

        <label>Post code:</label>
        <input type="text" name="postCode" value={postCode} onChange={handlePostCode} />

        <label>Animal:</label>
        <input type="text" name="animal" value={animal} onChange={handleAnimal} />

        <label>Height:</label>
        <input type="number" name="height" value={height} onChange={handleHeight} />

        <label>Width:</label>
        <input type="number" name="width" value={width} onChange={handleWidth} />

        {/* 上傳照片 */}


        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  )
}

export default SignupPage;
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import WebFont from 'webfontloader';



const API_URL = "http://localhost:5005";


function SignupPage(props) {
  //字體設定
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Quicksand']
      }
    });
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [lang, setLang] = useState();
  const [animal, setAnimal] = useState("");
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [aboutPet, setAboutPet] = useState();

  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleBirthday = (e) => setBirthday(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleLang = (e) => setLang(e.target.value);
  const handleAnimal = (e) => setAnimal(e.target.value);
  const handleHeight = (e) => setHeight(e.target.value);
  const handleWidth = (e) => setWidth(e.target.value);
  const handleAboutPet = (e) => setAboutPet(e.target.value);




  // 上傳照片
  const [image, setImage] = useState("");

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "third-project")
    data.append("cloud_name", "dsy2gebem")
    fetch("  https://api.cloudinary.com/v1_1/dsy2gebem/image/upload", {
      method: "post",
      body: data
    })

      .then(response => response.json())
      .then(data => {
        //先上傳照片到雲端再拿照片到後端 要等待 所以.then()再.then 
        //正確的方式應該要用await

        const requestBody = { email, password, name, birthday, gender, lang, animal, height, width, url: data.url, aboutPet };

        axios.post(`${API_URL}/auth/signup`, requestBody)
          .then((response) => {
            navigate("/login");
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })

      })
      .catch(err => console.log(err))
  }




  return (
    <div className="Signup" style={{ fontFamily: 'Quicksand' }}>
      <Navbar />

      {/* <h1>Please fill the form for your pet...</h1> */}

      <form className='Signup-9' onSubmit={handleSignupSubmit}>
        <h2>Please fill the form for your pet_</h2>

        <div className='Signup-9-1'>
          <label>email :</label>
          <input type="email" name="email" value={email} onChange={handleEmail} />
        </div>

        <div className='Signup-9-1'>
          <label>password :</label>
          <input type="password" name="password" value={password} onChange={handlePassword} />
        </div>

        <div className='Signup-9-1'>
          <label>name :</label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </div>

        <div className='Signup-9-1'>
          <label>birthday :</label>
          <input type="date" name="birthday" value={birthday} onChange={handleBirthday} />
        </div>

        <div className='Signup-9-1'>
          <label>gender :</label>
          {/* <input type="text" name="gender" value={gender} onChange={handleGender} /> */}

          <select name="gender" value={gender} onChange={handleGender}>
            <option value="default" selected>choose...</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
            <option value="notSure">not sure  ヽ༼⊙_⊙༽ﾉ</option>

            {/* <option value="default" selected>Choose..</option> */}
          </select>




        </div>

        <div className='Signup-9-1'>
          <label>language :</label>
          <input type="text" name="lang" value={lang} onChange={handleLang} />
        </div>

        <div className='Signup-9-1'>
          <label>type :</label>
          {/* <input type="text" name="animal" value={animal} onChange={handleAnimal} /> */}
          <select name="animal" value={animal} onChange={handleAnimal}>
            <option value="default" selected>choose...</option>
            <option value="ape">ape</option>
            <option value="bird">bird</option>
            <option value="cat">cat</option>
            <option value="dog">dog</option>
            <option value="elephant">elephant</option>
            <option value="fish">fish</option>
            <option value="hedgehog">hedgehog</option>
            <option value="monkey">monkey</option>
            <option value="rabbit">rabbit</option>
            <option value="squirrel">squirrel</option>
            <option value="tiger">tiger</option>
            <option value="other">other    ༼ •̀ ں •́ ༽</option>


            {/* <option value="default" selected>Choose..</option> */}
          </select>

        </div>

        <div className='Signup-9-1'>
          <label>height :</label>
          <input type="number" name="height" value={height} onChange={handleHeight} />
        </div>

        <div className='Signup-9-1'>
          <label>width :</label>
          <input type="number" name="width" value={width} onChange={handleWidth} />
        </div>

        <div className='Signup-9-1'>
          <label>about me :</label>
          <input type="text" name="aboutPet" value={aboutPet} onChange={handleAboutPet} />
        </div>


        {/* 上傳照片 */}
        <div className='Signup-9-1'>
          <label>upload profile photo :</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
        </div>

        <div className='Signup-9-1'>
          <button type="submit" >SIGN UP</button>
        </div>

      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}


    </div>
  )
}

export default SignupPage;
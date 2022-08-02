import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [lang, setLang] = useState('');
  const [animal, setAnimal] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [aboutMe, setAboutMe] = useState('');
  const [area, setArea] = useState('');
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
  const handleWeight = (e) => setWeight(e.target.value);
  const handleAboutMe = (e) => setAboutMe(e.target.value);
  const handleArea = (e) => setArea(e.target.value);
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
        const requestBody = { email, password, name, birthday, gender, lang, animal, height, weight, url: data.url, aboutMe, area };
        axios.post(`/auth/signup`, requestBody)
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
    <div style={{ fontFamily: 'Quicksand' }}>
      <Navbar />
      <form className='Signup-9' onSubmit={handleSignupSubmit}>
        <h3>Please fill the form for your pet_</h3>
        <div className='Signup-9-1'>
          <label>email :</label>
          <input type="email" name="email" value={email} onChange={handleEmail} />
        </div>
        <div className='Signup-9-1'>
          <label>password :</label>
          <input type="password" name="password" value={password} onChange={handlePassword} />
        </div>
        <div className='container-Signup-9-1'>
          <div className='container-inner'>
            <label>name :</label>
            <input style={{ width: '11.5vw', marginRight: '0.5vw', borderTopRightRadius: '10px' }} type="text" name="name" value={name} onChange={handleName} required />
          </div>
          <div className='container-inner'>
            <label>birthday :</label>
            <input style={{ padding: '3px', width: '11.8vw', textAlign: 'center', borderBottomLeftRadius: '10px' }} type="date" name="birthday" value={birthday} onChange={handleBirthday} required />
          </div>
        </div>
        <div className='container-Signup-9-1'>
          <div className='container-inner-3'>
            <label>gender :</label>
            <select style={{ width: '8vw', marginRight: '0.6vw', borderTopRightRadius: '10px' }} name="gender" value={gender} onChange={handleGender} required>
              <option value="default">choose...</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className='container-inner-3'>
            <label>type :</label>
            <select style={{ width: '8vw', marginRight: '0.6vw', borderBottomLeftRadius: '10px' }} name="animal" value={animal} onChange={handleAnimal} required>
              <option value="default" >animal...</option>
              <option value="ape">ape</option>
              <option value="bird">bird</option>
              <option value="cat">cat</option>
              <option value="dog">dog</option>
              <option value="fish">fish</option>
              <option value="hedgehog">hedgehog</option>
              <option value="monkey">monkey</option>
              <option value="rabbit">rabbit</option>
              <option value="raccoon">raccoon</option>
              <option value="tiger">tiger</option>
            </select>
          </div>

          <div className='container-inner-3'>
            <label>language :</label>
            <input style={{ width: '7vw', borderBottomLeftRadius: '10px' }} type="text" name="lang" value={lang} onChange={handleLang} required />
          </div>
        </div>

        <div className='container-Signup-9-1'>
          <div className='container-inner'>

            <label>height (cm) :</label>
            <input style={{ width: '7.3vw', marginRight: '0.6vw', borderTopRightRadius: '10px' }} type="number" name="height" value={height} onChange={handleHeight} required />
          </div>
          <div className='container-inner'>

            <label>weight (kg) :</label>
            <input style={{ width: '7.3vw', marginRight: '0.6vw', borderBottomLeftRadius: '10px', borderTopRightRadius: '10px' }} type="number" name="weight" value={weight} onChange={handleWeight} required />
          </div>
          <div className='container-inner'>

            <label>area :</label>

            <select style={{ width: '7.7vw', borderBottomLeftRadius: '10px', height: '3.8vh' }} name="area" value={area} onChange={handleArea}>
              <option value="default" >choose...</option>
              <option value="Charlottenburg">Charlottenburg</option>
              <option value="Friedrichshain">Friedrichshain</option>
              <option value="Kreuzberg">Kreuzberg</option>
              <option value="Lichtenberg">Lichtenberg</option>
              <option value="Marzahn">Marzahn</option>
              <option value="Mitte">Mitte</option>
              <option value="Neukölln">Neukölln</option>
              <option value="Pankow">Pankow</option>
              <option value="Reinickendorf">Reinickendorf</option>
              <option value="Spandau">Spandau</option>
              <option value="Steglitz">Steglitz</option>
              <option value="Schöneberg">Schöneberg</option>
              <option value="Treptow">Treptow</option>
              <option value="notSure">other</option>
            </select>

          </div>

        </div>

        <div className='Signup-9-1'>

          <label>about me :</label>

          <textarea style={{ border: 'none', marginBottom: '1vh' }} type="text" name="aboutMe" value={aboutMe} onChange={handleAboutMe} cols="40" rows="5" required />


        </div>
        <div className='Signup-9-1'>
          <label>upload profile photo :</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} required></input>
        </div>

        <div className='Signup-9-1'>
          <button style={{ borderRadius: '30px', marginTop: '1.5vh' }} type="submit" >SIGN UP</button>
        </div>

      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default SignupPage;
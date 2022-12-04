import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [lang, setLang] = useState('');
  const [animal, setAnimal] = useState();
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
    fetch("https://api.cloudinary.com/v1_1/dsy2gebem/image/upload", {
      method: "post",
      body: data
    })
      .then(response => response.json())
      .then(data => {
        Swal.fire({
          title: 'Uploading...',
          html: 'Please wait...',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          }
        });
        const requestBody = { email, password, name, birthday, gender, lang, animal, height, weight, url: data.url, aboutMe, area };
        axios.post(`/auth/signup`, requestBody)
          .then((response) => {
            Swal.close();
            navigate("/login");
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
      })
      .catch(err => console.log(err))
  }

  const chooseOptionLabel = <option key='no-choice' value=''>Choose...</option>
  const genderOptions = [chooseOptionLabel].concat(
    ["male", "female", "other"].map(gender =>
      (<option key={gender} value={gender}>{gender}</option>)
    ))

  const animalOptions = [chooseOptionLabel].concat(
    ["ape", "bird", "cat", "dog", "fish", "hedgehog", "monkey", "rabbit", "raccoon", "tiger"].map(animal =>
      (<option key={animal} value={animal}>{animal}</option>)
    ))

  const areaOptions = [chooseOptionLabel].concat(
    ["Charlottenburg", "Friedrichshain", "Kreuzberg", "Lichtenberg", "Marzahn", "Mitte", "Neukölln", "Pankow", "Reinickendorf", "Spandau", "Steglitz", "Schöneberg", "Treptow", "other"].map(area =>
      (<option key={area} value={area}>{area}</option>)
    ))

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
              {genderOptions}
            </select>
          </div>

          <div className='container-inner-3'>
            <label>type :</label>
            <select style={{ width: '8vw', marginRight: '0.6vw', borderBottomLeftRadius: '10px' }} name="animal" onChange={handleAnimal} value={animal} required>
              {animalOptions}
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
            <input style={{ width: '7.3vw', marginRight: '0.6vw', borderTopRightRadius: '10px' }} type="number" name="height" value={height || ''} onChange={handleHeight} required />
          </div>
          <div className='container-inner'>
            <label>weight (kg) :</label>
            <input style={{ width: '7.3vw', marginRight: '0.6vw', borderBottomLeftRadius: '10px', borderTopRightRadius: '10px' }} type="number" name="weight" value={weight || ''} onChange={handleWeight} required />
          </div>
          <div className='container-inner'>
            <label>area :</label>
            <select style={{ width: '7.7vw', borderBottomLeftRadius: '10px', height: '3.8vh' }} name="area" value={area} onChange={handleArea}>
              {areaOptions}
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
          <button className='btn-hover' style={{ borderRadius: '30px', marginTop: '1.5vh' }} type="submit" >SIGN UP</button>
        </div>

      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default SignupPage;
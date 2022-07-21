import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";



function HomePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div>
      
      <div>
        <h1>datingApes</h1>

        {!isLoggedIn && (
          <>
            <Link to="/login"> <button>Login</button> </Link>
          </>
        )}
      </div>

      <div>
        <h1>This is fish being happy</h1>
        <p>Huizi said: “Sir, you are not a fish, how do you know what the happiness of fish is?”
          Zhuangzi answered: “Sir, you are not me, how do you know that I do not know what the happiness of fish is?”
          The conversation of these two ancient philosophers showed that the limited nature of human knowledge.
          Yes! We can never know if the fish/dog/cat/ape is happy.
          But we can make them feel the happiness of being a human.
          Join us! Let’s find happiness for your pets.  </p>
      </div>


      <div>
        {!isLoggedIn && (
          <>
            <Link to="/signup"> <button style={{ fontSize: '1.2em', fontWeight: '900', color: 'white', backgroundColor: 'black', padding: '0.6rem', paddingLeft: '2rem', paddingRight: '2rem', border: 'none' }}>JOIN US</button> </Link>
            {/* <Link to="/login"> <button>Login</button> </Link> */}
          </>
        )}
      </div>
    
    </div>
  );
}

export default HomePage;
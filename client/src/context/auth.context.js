import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  }

  const verifyStoredToken = () => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      return axios.get(
        `/auth/verify`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
        .then(response => {
          const user = response.data
          setUser(user)
          setIsLoggedIn(true)
          setIsLoading(false)
        })
        .catch(err => {
          setUser(null)
          setIsLoggedIn(false)
          setIsLoading(false)
        })
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);

    }
  }

  const removeToken = () => {
    localStorage.removeItem("authToken");
  }

  const logOutUser = () => {
    removeToken();
    verifyStoredToken();
  }

  useEffect(() => {
    verifyStoredToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, storeToken, verifyStoredToken, logOutUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
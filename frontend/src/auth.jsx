import { AuthContext } from "./context/authContext";
import { useEffect, useState } from "react";
import axios from "axios";


export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(null); // null = checking

  useEffect(() => {
    // Check login on page load using cookie
    axios.get("http://localhost:5001/user/verify", { withCredentials: true })
      .then(res => setLogin(res.data.loggedIn))
      .catch(() => setLogin(false));
  }, []);

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
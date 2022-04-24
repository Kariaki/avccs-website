import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //Login
  const login = async (email, password) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        setLoading(false);
        return response.user;
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  //Logout
  const logout = () => {
    signOut(auth).then(() => {
      setUser(false);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthenticating(false);
    });

    return () => unsubscribe();
  }, []);

  const values = {
    user,
    loading,
    error,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

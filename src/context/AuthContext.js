import { createContext, useContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

import { auth } from "../Firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logout = ()=> signOut(auth)

  const value = {
    currentUser,
    setCurrentUser,
    signWithGoogle,
    logout
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false)
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

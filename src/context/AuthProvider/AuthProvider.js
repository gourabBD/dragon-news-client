import React, { createContext, useEffect, useState } from "react";

import {
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import app from "./../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
  //Onclick signIn authentication pop-up with google
  const providerLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIN = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


  //updating displayName, and photoURL
  const updateUserProfile=(profile)=>{
    return updateProfile(auth.currentUser,profile)
  }
  const verifyEmail=()=>{
    return sendEmailVerification(auth.currentUser)
  }
  
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      if(currentUser===null || currentUser.emailVerified){
        setUser(currentUser);
      }
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = { user,loading, providerLogin, logOut, createUser, signIN ,updateUserProfile,verifyEmail,setLoading};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

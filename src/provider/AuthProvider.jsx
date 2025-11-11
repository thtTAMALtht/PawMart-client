import { AuthContext } from "../context/AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//googleSignIn
const googleProvider = new GoogleAuthProvider();
const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
}

//createUserWithEmailPassword
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

 //signInUser
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


//currently signed-in user
useEffect(()=>{
    const cleanUpListener = onAuthStateChanged(auth,(currentUser)=>{
        
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>[
        cleanUpListener()
    ]
},[])

  //update profile
  const updateUserProfile = (updateUser) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateUser);
  };



//signOut user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };


  const userInfo = {
    user,
    setUser,
    googleSignIn,
    createUser,
    signInUser,
    updateUserProfile,
    loading,
    setLoading,
    signOutUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;

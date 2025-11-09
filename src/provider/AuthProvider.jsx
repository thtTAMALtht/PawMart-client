import { AuthContext } from "../context/AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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



//currently signed-in user
useEffect(()=>{
    const cleanUpListener = onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>[
        cleanUpListener()
    ]
},[])

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
    loading,
    setLoading,
    signOutUser
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;

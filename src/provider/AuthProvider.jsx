import { AuthContext } from "../context/AuthContext";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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

//currently signed-in user
useEffect(()=>{
    const cleanUpListener = onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
        setUser(currentUser)
    })
    return ()=>[
        cleanUpListener()
    ]
},[])




  const userInfo = {
    user,
    setUser,
    googleSignIn,
    loading,
    setLoading
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;

import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.Config";
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);
    const [success, setSuccess] = useState(false);

    //* signin or create new user 
    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //! Google login
    const provider = new GoogleAuthProvider();
    const createUserByGoogl = () => {
    return signInWithPopup(auth, provider);
}

    //* login with email and password
    const logInUser = (email, password) => {
        setLoding(true)
    return signInWithEmailAndPassword(auth, email, password);
    }

    //* logout
       const logOut = () => {
        setLoding(true)
        return signOut(auth);
    }
    
    //*Setup profile name and profile picture
    const updateUser = (data) => {
        return updateProfile(auth.currentUser, data);
    }

    //* obsurver
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoding(false)
            setSuccess(true)
        })
        return()=>{unsubscribe()}
    }, [])

    const authInfo = {
    user,
    setUser,
    logInUser,
    updateUser,
    logOut,
    loding,
    setLoding,
    createUser,
    createUserByGoogl,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;
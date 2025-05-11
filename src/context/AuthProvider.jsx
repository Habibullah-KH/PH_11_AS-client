import { useEffect, useState } from "react";
import axios from 'axios';
import AuthContext from "./AuthContext";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.Config";
import Loding from "../component/Loding";
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);
    const [success, setSuccess] = useState(false);

    if(loding){
      <Loding/>
    }


    //* signup or create new user 
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
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoding(false);
          setSuccess(true);
      
          if (currentUser?.email) {
            const user = { email: currentUser.email };
      
            axios.post(`${import.meta.env.VITE_SERVER_url}/jwt`, user, {
              withCredentials:true
            })
              .then(res => {
                console.log('JWT login response:', res.data);
              })
              .catch(err => {
                console.error('Error in axios post:', err);
              });
              setLoding(false);

          }

          else{
            axios.post(`${import.meta.env.VITE_SERVER_url}/logout`, {}, {
              withCredentials: true
            })
            .then(res => {
              console.log('logout',res.data)
              setLoding(false);
            })
          }
        });
      
        return () => {
          unsubscribe();
        };
      }, []);
      

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
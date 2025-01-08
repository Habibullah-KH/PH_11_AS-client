import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const authInfo = {
    user,
    loding,
    setLoding,
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
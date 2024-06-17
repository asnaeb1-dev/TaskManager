import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from '../data/Utils/Strings';
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoutes = () => {
    const auth = getAuth();
    const [isAuthenticated, setAuthenticated] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setAuthenticated(true)
            } else {
                setAuthenticated(false);
            }
        })
    }, [])
    
    return (
        isAuthenticated ?
            <Outlet /> 
            : 
            <Navigate to={PATHS.LOGIN_PATH} />
    )
}

export default PrivateRoutes
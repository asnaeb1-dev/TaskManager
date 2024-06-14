import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from '../data/Utils/Strings';
import { isUserLoggedIn } from "../data/Services/Api";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoutes = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        console.log("user", user);
        if(user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    })

    return (
        isAuthenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN_PATH} />
    )
}

export default PrivateRoutes
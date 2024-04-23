import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoutes";
//Pages
import HomePageScreen from "../UI/screens/HomePageScreen/HomePageScreen";
import LoginSignupScreen from "../UI/screens/LoginSignUpScreen/LoginSignupScreen";
import { PATHS } from '../data/Utils/Strings';

//components
import Navbar from "../UI/UIComponents/NavBar/NavBar";

const RouterRoutes = () => {
    return (
        <BrowserRouter>
            <div className=''>
                <Navbar type={1} />
            </div>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path={PATHS.DASHBOARD} exact Component={HomePageScreen} />
                    {/* <Route path={PATHS.LANDING_PAGE} Component={Land} /> */}
                </Route>
                <Route path={PATHS.LOGIN_PATH} Component={LoginSignupScreen} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoutes;
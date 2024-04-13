import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoutes";
//Pages
import HomePageScreen from "../UI/screens/HomePageScreen/HomePageScreen";
import LoginSignupScreen from "../UI/screens/LoginSignUpScreen/LoginSignupScreen";
import { PATHS } from '../data/Utils/Strings';

//components
import Navbar from "../UI/UIComponents/NavBar/NavBar";
import { isUserLoggedIn } from '../data/Services/Api';

const RouterRoutes = () => {
    return (
        <BrowserRouter>
            <div className=''>
                <Navbar />
            </div>
            <Routes>
                <Route element={<PrivateRoutes isAuthenticate={isUserLoggedIn} />}>
                    <Route path={PATHS.DASHBOARD} Component={HomePageScreen} />
                    {/* <Route path={PATHS.LANDING_PAGE} Component={Land} /> */}
                </Route>
                <Route path={PATHS.LOGIN_PATH} Component={LoginSignupScreen} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoutes;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoutes";
//Pages
import HomePageScreen from "../UI/screens/HomePageScreen/HomePageScreen";
import LoginSignupScreen from "../UI/screens/LoginSignUpScreen/LoginSignupScreen";
import { PATHS } from '../data/Utils/Strings';

//components
import Navbar from "../UI/UIComponents/NavBar/NavBar";
import TimeLineScreen from '../UI/screens/TimeLineScreen/TimeLineScreen';
import FavouritesScreen from '../UI/screens/FavouritesScreen/FavouritesScreen';
import SettingsScreen from '../UI/screens/SettingsScreen/SettingsScreen';
import SideBar from '../UI/UIComponents/SideBar/SideBar';
import AddNotes from '../UI/UIComponents/AddNotes/AddNotes';

const RouterRoutes = () => {
    return (
        <BrowserRouter>
            <div className=''>
                <Navbar type={1} />
            </div>
            <SideBar />
            <AddNotes />
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path={PATHS.DASHBOARD} exact Component={HomePageScreen} />
                    <Route path={PATHS.TIMELINE} exact Component={TimeLineScreen} />
                    <Route path={PATHS.FAVOURITES} exact Component={FavouritesScreen} />
                    <Route path={PATHS.SETTINGS} exact Component={SettingsScreen} />
                    {/* <Route path={PATHS.LANDING_PAGE} Component={Land} /> */}
                </Route>
                <Route path={PATHS.LOGIN_PATH} Component={LoginSignupScreen} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoutes;
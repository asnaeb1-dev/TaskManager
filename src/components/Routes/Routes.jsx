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
import UserProfile from '../UI/UIComponents/UserProfile/UserProfile';

const RouterRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path={PATHS.DASHBOARD}  element={<LayoutComponent><HomePageScreen/></LayoutComponent>} />
                    <Route path={PATHS.TIMELINE}  element={<LayoutComponent><TimeLineScreen/></LayoutComponent>} />
                    <Route path={PATHS.FAVOURITES}  element={<LayoutComponent><FavouritesScreen/></LayoutComponent>} />
                    <Route path={PATHS.SETTINGS}  element={<LayoutComponent><SettingsScreen/></LayoutComponent>} />
                </Route>
                <Route path={PATHS.LOGIN_PATH} element={<LayoutComponent showSideBar={false} navbarType={0}><LoginSignupScreen /></LayoutComponent>} />
            </Routes>
        </BrowserRouter>
    )
}

const LayoutComponent = ({ children, showSideBar = true, navbarType = 1 }) => {
    return (
        <>
            <Navbar type={navbarType} />
            {
                showSideBar &&
                <SideBar />
            }
            <AddNotes />
            <UserProfile />
            {children}
        </>
    )
}

export default RouterRoutes;
import React, { useContext, useEffect } from 'react'
import SideBar from '../../UIComponents/SideBar/SideBar'
import NotesScreen from '../NotesScreen/NotesScreen'
import ToastContainer from '../../UIComponents/ToastContainer/ToastContainer'
import { isUserLoggedIn } from '../../../data/Services/Api'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../data/Utils/Strings'

const HomePageScreen = () => {
	const navigate = useNavigate();
	useEffect(() => {
		isUserLoggedIn(user => {
			console.log("user", user);
			if(!user) {
				navigate(PATHS.LOGIN_PATH, { replace: true });
			}
		})
	}, [])

	return (
		<div>
			<NotesScreen />
			<ToastContainer />
		</div>
	)
}

export default HomePageScreen
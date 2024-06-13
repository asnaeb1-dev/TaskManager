import React, { useContext, useEffect, useState } from 'react'
import NotesScreen from '../NotesScreen/NotesScreen'
import ToastContainer from '../../UIComponents/ToastContainer/ToastContainer'
import { getUserDetailsFromDB, isUserLoggedIn } from '../../../data/Services/Api'
import { useNavigate } from 'react-router-dom'
import { PATHS, ResponseType } from '../../../data/Utils/Strings'
import { TaskerAppContext } from '../../../data/AppContext/AppContext'

const HomePageScreen = () => {
	const navigate = useNavigate();
	const { userDetails, setUserDetails } = useContext(TaskerAppContext);

	useEffect(() => {
		isUserLoggedIn(user => {
			if(!user) {
				navigate(PATHS.LOGIN_PATH, { replace: true });
			} else {
				setUserDetails(user);
				(async () => {
					const dbResponse = await getUserDetailsFromDB(user?.displayName)
					setUserDetails({...user, dbResponse: dbResponse?.response});
				})()
			}
		})
	}, []);

	return (
		<>
			<NotesScreen />
			<ToastContainer />
		</>
	)
}

export default HomePageScreen
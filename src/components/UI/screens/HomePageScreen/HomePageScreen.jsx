import React, { useContext, useEffect, useState } from 'react'
import NotesScreen from '../NotesScreen/NotesScreen'
import ToastContainer from '../../UIComponents/ToastContainer/ToastContainer'
import { getUserDetailsFromDB, isUserLoggedIn } from '../../../data/Services/Api'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../data/Utils/Strings'
import { TaskerAppContext } from '../../../data/AppContext/AppContext'

const HomePageScreen = () => {
	const navigate = useNavigate();
	const { userDetails, setUserDetails } = useContext(TaskerAppContext);
	const [isCallEnabled, setCallEnabled] = useState(false);

	useEffect(() => {
		isUserLoggedIn(user => {
			// console.log("user", user);
			if(!user) {
				navigate(PATHS.LOGIN_PATH, { replace: true });
			} else {
				setUserDetails(user);
				(async () => {
					const dbResponse = await getUserDetailsFromDB(user?.displayName)
					console.log(dbResponse);
				})()
			}
		})
	}, [])

	useEffect(() => {
		if(userDetails) {
			console.log("userx", userDetails);
			setCallEnabled(true);
		}
	}, [userDetails]);

	useEffect(() => {
        if(isCallEnabled) {
            // getUserDetailsFromDB();
			console.log(isCallEnabled);
        }
    }, [isCallEnabled]);

	return (
		<>
			<NotesScreen />
			<ToastContainer />
		</>
	)
}

export default HomePageScreen
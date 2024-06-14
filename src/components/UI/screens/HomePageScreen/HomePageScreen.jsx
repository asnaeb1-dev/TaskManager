import { useContext, useEffect, useState } from 'react'
import NotesScreen from '../NotesScreen/NotesScreen'
import ToastContainer from '../../UIComponents/ToastContainer/ToastContainer'
import { getUserDetailsFromDB, isUserLoggedIn } from '../../../data/Services/Api'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../../data/Utils/Strings'
import { TaskerAppContext } from '../../../data/AppContext/AppContext'

const HomePageScreen = () => {
	const { setUserDetails, setUserTaskDetails } = useContext(TaskerAppContext);

	return (
		<>
			<NotesScreen />
			<ToastContainer />
		</>
	)
}

export default HomePageScreen
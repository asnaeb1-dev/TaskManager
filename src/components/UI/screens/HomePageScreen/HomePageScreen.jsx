import React, { useContext, useEffect } from 'react'
import SideBar from '../../UIComponents/SideBar/SideBar'
import NotesScreen from '../NotesScreen/NotesScreen'
import AddNotes from '../../UIComponents/AddNotes/AddNotes'
import AppContext, { TaskerAppContext } from '../../../data/AppContext/AppContext'
import ToastContainer from '../../UIComponents/ToastContainer/ToastContainer'

const HomePageScreen = () => {
	return (
		<div>
			<NotesScreen />
			<ToastContainer />
		</div>
	)
}

export default HomePageScreen
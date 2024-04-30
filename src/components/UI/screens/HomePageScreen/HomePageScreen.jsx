import React from 'react'
import SideBar from '../../UIComponents/SideBar/SideBar'
import NotesScreen from '../NotesScreen/NotesScreen'
import AddNotes from '../../UIComponents/AddNotes/AddNotes'

const HomePageScreen = () => {
	return (
		<div>
			<SideBar />
			<NotesScreen />
			<AddNotes />
		</div>
	)
}

export default HomePageScreen
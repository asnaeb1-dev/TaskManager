import React, { useEffect, useState } from 'react'
import LoginComponent from '../../UIComponents/LoginComponent/LoginComponent';
import SignupComponent from '../../UIComponents/SignupComponent/SignupComponent';
import { createAccountWithEmailAndPassword, loginUserWithEmailAndPassword } from '../../../data/Services/Api';
import ToastContainer from '../../UIComponents/ToastContainer/ToastContainer';

const LoginSignupScreen = () => {

	const [userCredentialsForLogin, setUserCredentialsForLogin] = useState({
		emailAddress: "",
		password: ""
	});

	const [userCredentialsForCreateAccount, setUserCredentialsForCreateAccount] = useState({
		emailAddress: "",
		password: "",
		username: "",
		dob: ""
	});

	const [currentPage, setCurrentPage] = useState("createaccount"); //createaccount | login
	const [showToast, setShowToast] = useState(true);

	useEffect(() => {
		if(!userCredentialsForLogin.emailAddress || !userCredentialsForLogin.password) return;
		(async () => {
			const loginResponse = await loginUserWithEmailAndPassword(userCredentialsForLogin.emailAddress, userCredentialsForLogin.password);
			console.log(loginResponse);
		})()
	}, [userCredentialsForLogin])

	useEffect(() => {
		if(!userCredentialsForCreateAccount.emailAddress || !userCredentialsForCreateAccount.password) return;
		(async () => {
			const createResponse = await createAccountWithEmailAndPassword(userCredentialsForCreateAccount.emailAddress, userCredentialsForCreateAccount.password);
			console.log(createResponse);
		})()
	}, [userCredentialsForCreateAccount])

	return (
		<div className='w-full h-full'>
			{
				currentPage === "login" ?
				<LoginComponent
					swapLoginSignup={current => setCurrentPage(current)}
					submitUserCredentialsForLogin={(email, password) => setUserCredentialsForLogin({ emailAddress: email, password })}
				/>
				:
				<SignupComponent
					swapLoginSignup={current => setCurrentPage(current)}
					submitUserCredentialsToCreateAccount={(email, password, username, dob) => setUserCredentialsForCreateAccount({emailAddress: email, password, username, dob})}
				/>
			}
			<ToastContainer showToast={showToast} type={2} duration={3000} onClose={() => setShowToast(false)} />
		</div>
	)
}

export default LoginSignupScreen
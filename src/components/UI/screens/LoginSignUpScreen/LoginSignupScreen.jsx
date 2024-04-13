import React, { useEffect, useState } from 'react'
import LoginComponent from '../../UIComponents/LoginComponent/LoginComponent';
import SignupComponent from '../../UIComponents/SignupComponent/SignupComponent';
import { authenticateUsingGoogle, createAccountWithEmailAndPassword, loginUserWithEmailAndPassword } from '../../../data/Services/Api';
import ToastContainer from '../../UIComponents/ToastContainer/ToastContainer';
import { ResponseType } from '../../../data/Utils/Strings';

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

	const [currentPage, setCurrentPage] = useState("login"); //createaccount | login
	const [showToast, setShowToast] = useState(true);
	const [isLoading, setLoading] = useState(false);
	const [toastProps, setToastProps] = useState({
		type: 0,
        message: "Hello World",
        duration: 1000,
	})
	useEffect(() => {
		if(!userCredentialsForLogin.emailAddress || !userCredentialsForLogin.password) return;
		setLoading(true);
		(async () => {
			const loginResponse = await loginUserWithEmailAndPassword(userCredentialsForLogin.emailAddress, userCredentialsForLogin.password);
			// console.log(loginResponse);
			setShowToast(true);
			if(loginResponse.responseType === ResponseType.SUCCESS) {
				setToastProps({
					type: 1,
                    message: "Login Success",
                    duration: 1000
				})
			} else {
				setToastProps({
					type: 2,
                    message: "Sorry! Login failed",
                    duration: 1000
				})
			}
			setLoading(false)
		})()
	}, [userCredentialsForLogin])

	useEffect(() => {
		if(!userCredentialsForCreateAccount.emailAddress || !userCredentialsForCreateAccount.password) return;
		(async () => {
			const createResponse = await createAccountWithEmailAndPassword(userCredentialsForCreateAccount.emailAddress, userCredentialsForCreateAccount.password);
			console.log(createResponse);
			// setShowToast(true);
		})()
	}, [userCredentialsForCreateAccount])

	const handleLoginThroughGoogle = async() => {
        const result = await authenticateUsingGoogle();
		setShowToast(true)
		if(result.responseType === ResponseType.Success) {
			setToastProps({
				type: 1,
                message: "Google Authentication successful",
                duration: 1000
			})
		} else {
			setToastProps({
				type: 2,
                message: "Sorry! Google Authentication Failed.",
                duration: 1000
			})
		}
        console.log(result);
    }

	return (
		<div className='w-full h-full'>
			{
				currentPage === "login" ?
				<LoginComponent
					isLoading={isLoading}
					handleGoogleLogin={handleLoginThroughGoogle}
					swapLoginSignup={current => setCurrentPage(current)}
					submitUserCredentialsForLogin={(email, password) => setUserCredentialsForLogin({ emailAddress: email, password })}
				/>
				:
				<SignupComponent
					swapLoginSignup={current => setCurrentPage(current)}
					submitUserCredentialsToCreateAccount={(email, password, username, dob) => setUserCredentialsForCreateAccount({emailAddress: email, password, username, dob})}
				/>
			}
			<ToastContainer
				showToast={showToast}
				message={toastProps.message}
				type={toastProps.type}
				duration={3000}
				onClose={() => setShowToast(false)} 
			/>
		</div>
	)
}

export default LoginSignupScreen
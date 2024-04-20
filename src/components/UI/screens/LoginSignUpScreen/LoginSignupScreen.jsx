import React, { useEffect, useState } from 'react'
import LoginComponent from '../../UIComponents/LoginComponent/LoginComponent';
import SignupComponent from '../../UIComponents/SignupComponent/SignupComponent';
import { authenticateUsingGoogle, createAccountWithEmailAndPassword, isUserLoggedIn, loginUserWithEmailAndPassword } from '../../../data/Services/Api';
import ToastContainer from '../../UIComponents/ToastContainer/ToastContainer';
import { PATHS, ResponseType } from '../../../data/Utils/Strings';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const LoginSignupScreen = () => {
	const navigate = useNavigate();
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
			setUserCredentialsForLogin(LOGIN_OBJECT);
		})()
	}, [userCredentialsForLogin])

	useEffect(() => {
		// if(!userCredentialsForCreateAccount.emailAddress || !userCredentialsForCreateAccount.password) return;
		// (async () => {
		// 	const createResponse = await createAccountWithEmailAndPassword(userCredentialsForCreateAccount.emailAddress, userCredentialsForCreateAccount.password);
		// 	console.log(createResponse);
		// 	// setShowToast(true);
		// })()
	}, [userCredentialsForCreateAccount])


	const { 
		mutate: createAccountMutation,
		isError: createAccountHasError,
		error: createAccountError
	} = useMutation({
		mutationFn: createAccountWithEmailAndPassword,
		onSuccess: (data) => {
			alert("create account success", data)
		},
		onError: (e) => {
			console.log(e);
		} 
	})

	const { mutate: googleAuthMutation, isPending: googleLoginPending } = useMutation({
		mutationFn: authenticateUsingGoogle,
		onSuccess: (data) => {
			// if(data?.responseType === ResponseType.SUCCESS) {
			// 	if(data?.response?.token) {
			// 		navigate(PATHS.DASHBOARD, { replace: true })
			// 	}
			// }
			console.log("login done using google", data)
		},
		onError: (err) => {
			console.log(err);
		}
	})

	const handleUserCreateAccount = ({email, password, username, dob}) => {
		createAccountMutation({
			email,
			password
		})
	}

	return (
		<div className='w-full h-full'>
			{
				currentPage === "login" ?
				<LoginComponent
					isLoading={googleLoginPending}
					handleGoogleLogin={() => googleAuthMutation()}
					swapLoginSignup={current => setCurrentPage(current)}
					submitUserCredentialsForLogin={(email, password) => setUserCredentialsForLogin({ emailAddress: email, password })}
				/>
				:
				<SignupComponent
					swapLoginSignup={current => setCurrentPage(current)}
					submitUserCredentialsToCreateAccount={(email, password, username, dob) => handleUserCreateAccount({email, password, username, dob})}
				/>
			}
			<ToastContainer
				showToast={showToast}
				message={toastProps.message}
				type={toastProps.type}
				duration={3000}
				onClose={() => setShowToast(true)} 
			/>
		</div>
	)
}

export default LoginSignupScreen
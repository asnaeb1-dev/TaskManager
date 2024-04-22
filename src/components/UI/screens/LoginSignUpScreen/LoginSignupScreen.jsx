import React, { useEffect, useLayoutEffect, useState } from 'react'
import LoginComponent from '../../UIComponents/LoginComponent/LoginComponent';
import SignupComponent from '../../UIComponents/SignupComponent/SignupComponent';
import { authenticateUsingGoogle, createAccountWithEmailAndPassword, isUserLoggedIn, loginUserWithEmailAndPassword } from '../../../data/Services/Api';
import ToastContainer from '../../UIComponents/ToastContainer/ToastContainer';
import { PATHS, ResponseType } from '../../../data/Utils/Strings';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import BackImage from "../../../../assets/back.svg";

const LoginSignupScreen = () => {
	const navigate = useNavigate();
	const [userCredentialsForLogin, setUserCredentialsForLogin] = useState({
		emailAddress: "",
		password: ""
	});

	const [loginStatus] = useState(isUserLoggedIn);

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

	useLayoutEffect(() => {
		if(loginStatus) {
			navigate(PATHS.DASHBOARD, { replace: true })
		}
	}, [loginStatus])


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

	//sign up 
	const { 
		mutate: createAccountMutation,
		isError: createAccountHasError,
		error: createAccountError,
		isPending: createAccountPending
	} = useMutation({
		mutationFn: createAccountWithEmailAndPassword,
		onSuccess: (data) => {
			console.log("create account success", data)
			setShowToast(true);
			setToastProps({
				type: 1,
				message: "Account creation successful!",
				duration: 1000
			})
			if(data?.responseType === ResponseType.SUCCESS) {
				if(data?.response?.user?.accessToken) {
					navigate(PATHS.DASHBOARD, { replace: true })
				}
			}
		},
		onError: (e) => {
			console.log(e);
			setShowToast(true);
			setToastProps({
				type: 1,
				message: "Account creation failed!",
				duration: 1000
			})
		} 
	})

	//GOOGLE Auth
	const { mutate: googleAuthMutation, isPending: googleLoginPending } = useMutation({
		mutationFn: authenticateUsingGoogle,
		onSuccess: (data) => {
			console.log("login done using google", data)
			setShowToast(true);
			setToastProps({
				type: 1,
				message: "Google Login successful!",
				duration: 1000
			})
			if(data?.responseType === ResponseType.SUCCESS) {
				if(data?.response?.token) {
					navigate(PATHS.DASHBOARD, { replace: true })
				}
			}
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
		<div style={{ backgroundImage: `url(${BackImage})` }} className='w-full flex  bg-no-repeat bg-center bg-blend-overlay bg-white/70'>
			<div className='w-full'>
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
						isLoading={createAccountPending}
						swapLoginSignup={current => setCurrentPage(current)}
						submitUserCredentialsToCreateAccount={(email, password, username, dob) => handleUserCreateAccount({email, password, username, dob})}
					/>
				}
			</div>
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
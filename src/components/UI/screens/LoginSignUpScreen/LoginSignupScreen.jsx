import React, { useEffect, useLayoutEffect, useState } from 'react'
import LoginComponent from '../../UIComponents/LoginComponent/LoginComponent';
import SignupComponent from '../../UIComponents/SignupComponent/SignupComponent';
import { authenticateUsingGoogle, createAccountWithEmailAndPassword, createDatabaseInstanceForUser, isUserLoggedIn, loginUserWithEmailAndPassword } from '../../../data/Services/Api';
import ToastContainer, { ToastTypes } from '../../UIComponents/ToastContainer/ToastContainer';
import { APP_TITLE, PATHS, ResponseType } from '../../../data/Utils/Strings';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import BackImage from "../../../../assets/back.svg";
import { TaskerAppContext } from '../../../data/AppContext/AppContext';

const LoginSignupScreen = () => {
	const navigate = useNavigate();
	const [userCredentialsForLogin, setUserCredentialsForLogin] = useState({
		emailAddress: "",
		password: ""
	});

	const [userCredentialsForSignUp, setUserCredentialsForSignUp] = useState({
		email: "",
        password: "",
        username: "",
        dob: ""
	})

	const [loginStatus] = useState(isUserLoggedIn);

	const [currentPage, setCurrentPage] = useState("login"); //createaccount | login
	const [showToast, setShowToast] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [toastProps, setToastProps] = useState({
		type: 0,
        message: "Hello World",
        duration: 1000,
	})

	//check if user is logged in
	useLayoutEffect(() => {
		
	}, [])


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
		const { username, email, password, dob } = userCredentialsForSignUp;
		if(!username || !email || !password || !dob) return;
		createAccountMutation({
			email,
			password,
		})
	}, [userCredentialsForSignUp])


	//create account 
	const { 
		mutate: createAccountMutation,
		isError: createAccountHasError,
		error: createAccountError,
		isPending: createAccountPending,
		
	} = useMutation({
		mutationFn: createAccountWithEmailAndPassword,
		onSuccess: (data) => {
			console.log("create account success", data)
			if(data?.responseType === ResponseType.SUCCESS) {
				if(data?.response?.response?.user?.accessToken) {
					setShowToast(true)
					setToastProps({
						type: ToastTypes.SUCCESS,
						message: "Account creation Successfull!",
						duration: 3000
					});
					setTimeout(() => {
						navigate(PATHS.DASHBOARD, { replace: true })
					}, 2000)
					return;
				}
			} 
			setShowToast(true);
			setToastProps({
				type: ToastTypes.ERROR,
				message: "Account creation Failed!",
				duration: 1000
			});
		}
	})

	useEffect(() => {
		if(showToast) {
			setTimeout(() => {
				setShowToast(false)
			}, 3000)
		}
	}, [showToast])

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
			password,
			username,
			dob
		})
	}

	return (
		<div style={{ backgroundImage: `url(${BackImage})` }} className='w-full h-full md:bg-white bg-no-repeat bg-bottom bg-blend-overlay bg-white/70'>
			<div className='w-full h-full md:flex md:flex-row md:justify-center flex-auto'>
				<div className='flex-1 h-full flex items-center pb-[8rem]'>
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
				<div className='hidden flex-1 h-full md:flex bg-yellow-500/20 pt-20'>
					<div className='w-full h-full flex flex-col gap-2'>
						<img className='p-10 max-h-[60vh]' src={BackImage} />
						<h1 className=' text-yellow-500 font-bold text-2xl text-center'>{APP_TITLE}</h1>
						<h1 className='text-center'>Your daily note taking and task management app!</h1>
					</div>
				</div>
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
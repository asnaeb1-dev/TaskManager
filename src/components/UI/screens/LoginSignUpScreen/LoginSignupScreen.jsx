import React, { useEffect, useLayoutEffect, useState } from 'react'
import LoginComponent from '../../UIComponents/LoginComponent/LoginComponent';
import SignupComponent from '../../UIComponents/SignupComponent/SignupComponent';
import { authenticateUsingGoogle, createAccountWithEmailAndPassword, isUserLoggedIn, loginUserWithEmailAndPassword } from '../../../data/Services/Api';
import ToastContainer, { ToastTypes } from '../../UIComponents/ToastContainer/ToastContainer';
import { ACCOUNT_CREATION_FAILED, ACCOUNT_CREATION_SUCCESS, APP_TITLE, GOOGLE_LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_SUCCESS, PATHS, ResponseType } from '../../../data/Utils/Strings';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import BackImage from "../../../../assets/back.svg";

const LoginSignupScreen = () => {
	const navigate = useNavigate();

	const [currentPage, setCurrentPage] = useState("login"); //createaccount | login
	const [showToast, setShowToast] = useState(false);
	const [toastProps, setToastProps] = useState({})

	//check if user is logged in
	useLayoutEffect(() => {
		isUserLoggedIn(user => {
			if(user) {
				navigate(PATHS.DASHBOARD, {replace: true});
			}
		})
	}, [])

	const {
		mutate: loginUserMutation,
		isError: loginUserHasError,
		error: loginUserError,
        isPending: loginUserIsPending
	} = useMutation({
		mutationFn: loginUserWithEmailAndPassword,
        onSuccess: (data) => {
            console.log("login success", data)
            if(data?.responseType === ResponseType.SUCCESS) {
                if(data?.response?.user?.accessToken) {
                    setShowToast(true)
                    setToastProps({
                        type: ToastTypes.SUCCESS,
                        message: LOGIN_SUCCESS,
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
                message: LOGIN_FAILED,
                duration: 3000
            });
        },
	})

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
						message: ACCOUNT_CREATION_SUCCESS,
						duration: 3000
					});
					setTimeout(() => {
						// navigate(PATHS.DASHBOARD, { replace: true })
					}, 2000)
					return;
				}
			} 
			setShowToast(true);
			setToastProps({
				type: ToastTypes.ERROR,
				message: ACCOUNT_CREATION_FAILED,
				duration: 1000
			});
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
				message: GOOGLE_LOGIN_SUCCESS,
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

	const handleUserLogin = (email, password) => {
		if(!email || !password) return; 
		loginUserMutation({email, password})
	}

	return (
		<div style={{ backgroundImage: `url(${BackImage})` }} className='w-full h-full md:bg-white bg-no-repeat bg-bottom bg-blend-overlay bg-white/70'>
			<div className='w-full h-full md:flex md:flex-row md:justify-center flex-auto'>
				<div className='flex-1 h-full flex items-center pb-[8rem]'>
				{
					currentPage === "login" ?
					<LoginComponent
						isLoading={googleLoginPending || loginUserIsPending}
						handleGoogleLogin={() => googleAuthMutation()}
						swapLoginSignup={current => setCurrentPage(current)}
						submitUserCredentialsForLogin={(email, password) => handleUserLogin(email, password)}
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
				onClose={() => setShowToast(false)} 
			/>
		</div>
	)
}

export default LoginSignupScreen
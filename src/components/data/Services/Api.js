import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { firebaseConfig } from "./firebaseConfig";
import { ResponseType } from "../Utils/Strings";
import Response from "../Utils/Response";
initializeApp(firebaseConfig);

const auth = getAuth();

export const loginUserWithEmailAndPassword = async ({email = "", password =""}) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response
    } catch (e) {
        return e;
    }
}

export const createAccountWithEmailAndPassword = async({email = "", password = ""}) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const responseObject = new Response(ResponseType.SUCCESS, response);
        return responseObject;
    } catch(e) {
        const responseObject = new Response(ResponseType.SUCCESS, e);
        return responseObject;

    }
}

export const isUserLoggedIn = () => {
    const user = auth.currentUser;
    console.log("current-", user);
    return user;
}

export const authenticateUsingGoogle = async () => {
    const provider = new GoogleAuthProvider();
    let authResponse;
    try {
        const response = await signInWithPopup(auth, provider);
        const credentials = GoogleAuthProvider.credentialFromResult(response);
        const token = credentials.accessToken;
        const userInfo = response.user;
        authResponse = new Response(ResponseType.SUCCESS,{ token, userInfo })
    }catch (e) {
        authResponse = new Response(ResponseType.ERROR, e)

    }
    return authResponse;
}
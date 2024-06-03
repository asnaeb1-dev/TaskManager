import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { DB_INSTANCES, ResponseType, TODO_TYPES } from "../Utils/Strings";
import Response from "../Utils/Response";
import firebase from "firebase/compat/app";

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getFirestore(app);


export const loginUserWithEmailAndPassword = async ({email = "", password =""}) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return new Response(ResponseType.SUCCESS, response);
    } catch (e) {
        return new Response(ResponseType.ERROR, e);
    }
}

// export const updateDisplayNameForUser = async (username = "", signUpResponse) => {
//     const updationResponse = await signUpResponse.
// }

export const createDatabaseInstanceForUser = async (email = "", username = "", dob = "", phoneNumber = 0) => {
    const userObject = {
        username,
        email,
        dob,
        displayPictureURL: "",
        todoList: {
            [TODO_TYPES.TASK]: [],
            [TODO_TYPES.HABIT]: [],
            [TODO_TYPES.CHORE]: [],
            [TODO_TYPES.MISC]: [],
            [TODO_TYPES.REMINDER]: []
        },
        phoneNumber,
        settings: {
            isDarkMode: false,
            isEmailVerified: false,
            allowPushNotifications: false
        }
    }
    try {
        const responseDocRef = await addDoc(collection(database, DB_INSTANCES.USERS_INSTANCE), userObject);
        return new Response(ResponseType.SUCCESS, responseDocRef);
    } catch (e) {
        return new Response(ResponseType.ERROR, e);
    }
}

export const logoutUser = async() => {
    try {
        const logoutResponse = await signOut(auth);
        console.log(logoutResponse);
        return new Response(ResponseType.SUCCESS, logoutResponse);
    } catch (e) {
        return new Response(ResponseType.ERROR, e);
    }
}

export const createAccountWithEmailAndPassword = async({email = "", password = "", username = "", dob = ""}) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const updationResponse = await updateProfile(auth.currentUser, {displayName: username})
        const dbInstanceResponse = await createDatabaseInstanceForUser(email, username, dob);
        const responseObject = new Response(ResponseType.SUCCESS, { response, dbInstanceResponse, updationResponse});
        return responseObject;
    } catch(e) {
        const responseObject = new Response(ResponseType.ERROR, e);
        return responseObject;

    }
}

export const isUserLoggedIn = (cb) => {
    onAuthStateChanged(auth, user => {
        cb(user);
    })
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

// export const addUser = ()
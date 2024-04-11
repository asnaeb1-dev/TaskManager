import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { firebaseConfig } from "./firebaseConfig";
initializeApp(firebaseConfig)
const auth = getAuth();

export const loginUserWithEmailAndPassword = async (email = "", password ="") => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (e) {
        console.log(e.code, e.message);
    }
}

export const createAccountWithEmailAndPassword = async(email = "", password = "") => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch(e) {
        console.log(e.code, e.message);
    }
}
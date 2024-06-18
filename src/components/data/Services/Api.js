import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile, sendSignInLinkToEmail } from "firebase/auth"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, setDoc, where } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { DB_INSTANCES, ResponseType, TODO_TYPES, TaskPriority } from "../Utils/Strings";
import Response from "../Utils/Response";
import firebase from "firebase/compat/app";

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getFirestore(app);

//AUTHENTICATION
export const loginUserWithEmailAndPassword = async ({email = "", password =""}) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return new Response(ResponseType.SUCCESS, response);
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

//-------------------------->>><<<----------------------------
//DB 
export const getUserDetailsFromDB = async (username = "") => {
    try {
        const docSnapshotResponse = await getDoc(doc(database, DB_INSTANCES.USERS_INSTANCE, username));
        if(docSnapshotResponse.exists()) {
            const responseData = await docSnapshotResponse.data()
            return new Response(ResponseType.SUCCESS, responseData);
        } else {
            return new Response(ResponseType.INFO, { details: "User details unavailable" });
        }
    } catch (e) {
        return new Response(ResponseType.ERROR, e);
    }
}

export const createDatabaseInstanceForUser = async (email = "", username = "", dob = "", phoneNumber = 0) => {
    const userObject = {
        username,
        email,
        dob,
        displayPictureURL: "",
        phoneNumber,
        settings: {
            isDarkMode: false,
            isEmailVerified: false,
            allowPushNotifications: false
        }
    }

    const testDoc = {
        taskTitle: "Go for walk",
        taskType: "0",
        taskId: `${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000)}`,
        isTaskPrivate: false,
        taskPriority: TaskPriority.HIGH,
        taskNoteColor: "#fff",
        taskTags: ["walk", "fitness", "run"],
        taskStartTime: {},
        taskEndTime: {},
        taskDescription: "go for a walk. complete 10k steps",
        taskProgress: {}
    }

    try {
        const responseDocRef = await setDoc(doc(database, DB_INSTANCES.USERS_INSTANCE, username), userObject);
        const todoListDocRef = await setDoc(doc(database, DB_INSTANCES.USERS_INSTANCE, username, "todoList", "testdocid"), testDoc);
        return new Response(ResponseType.SUCCESS, {responseDocRef, todoListDocRef});
    } catch (e) {
        return new Response(ResponseType.ERROR, e);
    }
}

export const getTaskFromDB = async (username = "") => {
    console.log("HERE");
    try {
        const docSnapshotResponse = await getDoc(doc(database, DB_INSTANCES.TASKS_INSTANCE, username));
        if(docSnapshotResponse.exists()) {
            query(docSnapshotResponse, limit(3));
            // console.log("", query(docSnapshotResponse, limit(3)));
            const responseData = await docSnapshotResponse.data()
            return new Response(ResponseType.SUCCESS, responseData);
        } else {
            return new Response(ResponseType.ERROR, { details: "Task details unavailable" });
        }
    } catch (e) {
        return new Response(ResponseType.ERROR, e);
    }
}

export const getTaskFromDBPaginate = async (username = "") => {
    try{
        const dbPaginateResponse = query(collection(database, DB_INSTANCES.USERS_INSTANCE, username ,"todoList"), limit(20));
        const docsResponse = await  getDocs(dbPaginateResponse);
        return new Response(ResponseType.SUCCESS, docsResponse);
    }catch (e) {
        return new Response(ResponseType.ERROR, e)
    }
}

export const addNewTaskToDB = async ({username, taskData}) => {
    console.log("username", username);
    try {
        const todoListDocRef = await setDoc(doc(database, DB_INSTANCES.USERS_INSTANCE, username, "todoList", taskData.taskId), taskData);
        return new Response(ResponseType.SUCCESS, todoListDocRef);
    } catch (e) {
        return new Response(ResponseType.ERROR, e);
    }
}


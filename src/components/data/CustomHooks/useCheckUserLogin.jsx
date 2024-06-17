import { getAuth, onAuthStateChanged } from 'firebase/auth';

const useCheckUserLogin = (response) => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        console.log(user);
        response(user);
    })
}

export default useCheckUserLogin
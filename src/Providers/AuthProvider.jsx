import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Utils/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // const navigate = useNavigate();
	const [user, setUser] = useState(null);

	const createUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const signInUser = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log("oberving", currentUser);
		});
		return () => unsubscribe();
	}, []);

    const handleSignOut = () => {
		signOut(auth)
			.then((result) => {
                toast.success("successfully Logged Out")
				setUser(null);
                // navigate('/')
			})
			.catch((error) => console.log(error));
	};

	const authInfo = { user, createUser, signInUser, handleSignOut };

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;

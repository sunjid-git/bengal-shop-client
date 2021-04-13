import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext } from 'react';
import  {UserContext} from '../../App';
import './Login.css';
import google from '../../images/google.png';



const Login = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {

            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            console.log(signedInUser);
            setLoggedInUser(signedInUser);

        }).catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;
    
            var email = error.email;
   
            var credential = error.credential;
    
        });
    }
    return (
        <div className="container text-center p-5">
            <h1>Login</h1>
            <button onClick={handleGoogleSignIn} className="googleBtn">
                <img className="googleImg" src={google} alt=""/> Google Sign in
            </button>
        </div>
    );
};

export default Login;
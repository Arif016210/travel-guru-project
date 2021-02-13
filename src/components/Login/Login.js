import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import google from '../../resources/Icon/google.png';
import Header from '../../components/Shared/Header/Header2';
// firebase Authentication Import File
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';



const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        displayName: '',
        firstName: '',
        newUser: false,
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    // Google Account Authentication Part

    const googleSignIn = () => {
        // console.log("Work Handeler!!!")
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                console.log(displayName, email, photoURL)

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }

    const signOutUser = () => {

        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                }
                setUser(signedOutUser)

                setLoggedInUser(signedOutUser);
            }).catch((error) => {

            });
    }

    const handleSubmit = (e) => {

        if (!newUser) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }

                    const { displayName } = res.user;

                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    newUserInfo.name = displayName;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    // console.log(newUserInfo);
                    console.log('sign in user info', res.user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        e.preventDefault()
    }

    const handleBlur = (e) => {

        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordHasValid = /\d{1}/.test(e.target.value)

            isFieldValid = isPasswordValid && isPasswordHasValid;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }







    return (
        <section className="login">
            {/* Header 2 File Added from Shared Component */}
            <Header user={user} signOutUser={signOutUser}></Header>

            <div className="container container-login">
                {/* User Login Part */}
                <div className="login-section">
                    <h3>Login</h3>

                    <p style={{ color: 'red' }} > {user.error} </p>
                    {
                        user.success && <p style={{ color: 'green' }} > User {newUser ? 'Created' : 'logged in'} successfully </p>
                    }



                    <form onSubmit={handleSubmit}>

                        <input onBlur={handleBlur} type="text" name="email" placeholder="UserName or Email..." className="form-control" required />
                        <input onBlur={handleBlur} type="Password" name="password" placeholder="Password" className="form-control" required />

                        <div className="row">
                            <div className="col-md-6">
                                <input type="checkbox" name="" /> <span className="pl-1">Remember Me</span>
                            </div>
                            <div className="col-md-6 text-right ">
                                <p className=" text-warning">Forgot Password</p>
                            </div>
                        </div>

                        <button className="loginBtn form-control">Login</button>

                        <p className="text-center">Dont't have an account? <Link to="regi" className="text-warning" >Create an account</Link></p>

                    </form>
                </div>

                <p className="text-center mt-3">or</p>

                {/* Google Button Signin Part */}
                <div className="text-center">
                    <button onClick={googleSignIn} className="googleBtn"> <img className="googleImg" src={google} alt="Google Icon" /> <span>Continue with Google</span></button>
                </div>

            </div>

        </section>
    );
};

export default Login;
import React, { Component, useState } from 'react';
import './Login.css';
import google from '../../resources/Icon/google.png';
import Header from '../../components/Shared/Header/Header2';
// firebase Authentication Import File
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link } from 'react-router-dom';

const Registration = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        firstName: '',
        newUser: false,
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    })

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
                // console.log("Log Out Successfully!")
            }).catch((error) => {

            });
        // console.log('Log Out')
    }

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updatedUserName(user.name)
                })
                .catch(error => {

                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);

                });
        }
        e.preventDefault()
    }

    const handleBlur = (e) => {
        console.log(e.target.value)

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

    const updatedUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log('User Name updated Successfully')
        }).catch(function (error) {
            console.log(error)
        });
    }





    return (
        <section className="login">
            {/* Header 2 File Added from Shared Component */}
            <Header user={user} signOutUser={signOutUser}></Header>

            <div className="container container-login">
                {/* User Login Part */}
                <div className="login-section">
                    <h3>Create an account</h3>

                    <p style={{ color: 'red' }} > {user.error} </p>
                    {
                        user.success && <p style={{ color: 'green' }} > User Created successfully now login please! </p>
                    }



                    <form onSubmit={handleSubmit}>


                        <input type="text" name="name" onBlur={handleBlur} placeholder="Enter Your Name..." className="form-control" />


                        <input onBlur={handleBlur} type="text" name="email" placeholder="UserName or Email..." className="form-control" required />
                        <input onBlur={handleBlur} type="Password" name="password" placeholder="Password" className="form-control" required />

                        <button className="loginBtn form-control mt-5">Create an account</button>

                        <p className="text-center">Already have an account? <Link to="/login" className="text-warning" name="newUser">Login</Link></p>

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

export default Registration;
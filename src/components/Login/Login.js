import React, { Component } from 'react';
import './Login.css';
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

    // Google Account Authentication Part

    const googleSignIn = () => {
        // console.log("Work Handeler!!!")
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user)

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }






    return (
        <section className="login">
            {/* Header 2 File Added from Shared Component */}
            <Header></Header>

            <div class="container container-login">
                {/* User Login Part */}
                <div class="login-section">
                    <h3>Login</h3>

                    <form>

                        <input type="text" name="UserName" placeholder="UserName or Email..." class="form-control" autoComplete="off" />
                        <input type="Password" name="Password" placeholder="Password" class="form-control" />
                        <div className="row">
                            <div className="col-md-6">
                                <input type="checkbox" name="" /> <span className="pl-1">Remember Me</span>
                            </div>
                            <div className="col-md-6 text-right ">
                                <p className=" text-warning">Forgot Password</p>
                            </div>
                        </div>

                        <button className="loginBtn form-control">Login</button>
                        <p className="text-center">Dont't have an account? <span className="text-warning">Create an account</span></p>

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
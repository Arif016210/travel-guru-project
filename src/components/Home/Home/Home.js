import React, { useContext } from 'react';
import './Home.css';
import Header from '../../Shared/Header/Header';
import Slider from '../Slider/Slider';
import { UserContext } from '../../../App';
// Firebase import file
import "firebase/auth";
import firebase from "firebase/app";

const Home = () => {

    // signout function
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const signOutUser = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                }
                setLoggedInUser(signedOutUser);

            }).catch((error) => {

            });
    }

    return (
        <section className="home">
            <Header signOutUser={signOutUser}></Header>
            <Slider></Slider>
        </section>
    );
};

export default Home;
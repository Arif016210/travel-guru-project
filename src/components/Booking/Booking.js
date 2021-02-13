import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData';
import Header from '../Shared/Header/Header';
import './Booking.css';
// Firebase import file
import "firebase/auth";
import firebase from "firebase/app";

const Booking = () => {

    // Sign Out Function
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



    // Location Information
    const { areaID } = useParams();
    const bookingArea = fakeData.find(area => area.id === areaID)



    const { name, description, id } = bookingArea;


    // calender Form part

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        // Background Image Added by home className from home component
        <section className="booking home">
            {/* Header Section Import to Shared folder */}
            <Header signOutUser={signOutUser}></Header>

            <div className="container">
                <div className="row">
                    {/* Location Info Part */}
                    <div className="col-md-6">
                        <div className="locationInfo">
                            <h1> {name} </h1>
                            <p> {description} </p>
                        </div>
                    </div>
                    {/* Calender Form Added Part */}
                    <div className="col-md-6">
                        <div className="calenderForm">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <p >Origin</p>
                                    <input type="text" defaultValue="" ref={register({ required: true })} name="orging" placeholder="Enter Your Location... " className="form-control" />
                                    {errors.origin && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="form-group">
                                    <p>Destination</p>
                                    <input type="text" defaultValue={name} ref={register({ required: true })} name="destination" className="form-control" />
                                    {errors.destination && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <p>To</p>
                                        <input type="date" defaultValue={name} ref={register({ required: true })} name="date" className="form-control" />
                                        {errors.date && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <p>From</p>
                                        <input type="date" defaultValue={name} ref={register({ required: true })} name="date" className="form-control" />
                                        {errors.date && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <Link to={`/hotel/${id}`}>
                                    <button className="form-control submitBtn" type="submit">Start Booking</button>
                                </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Booking;
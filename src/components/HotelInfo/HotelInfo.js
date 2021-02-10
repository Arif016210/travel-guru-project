import React, { useContext } from 'react';
import './HotelInfo.css';
import Header from '../../components/Shared/Header/Header2'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const HotelInfo = () => {

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


    const { hotelID } = useParams();

    const locationInfo = fakeData.find(location => location.id === hotelID);

    // console.log(hotelInfo.hotels?.name)



    return (
        <section>
            <Header signOutUser={signOutUser} ></Header>


            <div className="container">
                {
                    locationInfo.hotels.map(hotel => {
                        return (
                            <div className="row mb-3" >

                                <div className="col-md-7" >
                                    <div className="row">
                                        <div className="col-md-5" >
                                            <img style={{ width: "260px", height: "300px" }} src={hotel.img} alt="" />
                                        </div>

                                        <div className="col-md-7" >
                                            <h2> {hotel.hotel} </h2>
                                            <p> Info:  {hotel.hotelInfo} </p>
                                            <p>Rate {hotel.rate} </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5" >
                                    <iframe style={{ width: "350px", height: "300px" }} src={hotel.map} frameborder="0"></iframe>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </section>
    );
};

export default HotelInfo;
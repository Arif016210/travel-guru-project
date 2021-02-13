import React, { useContext } from 'react';
import './Header.css';
import logo from '../../../resources/logo2.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Header = ({ signOutUser }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <section className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">

                    {/* Logo Section */}
                    <a className="navbar-brand" href="/home"> <img className="logo" src={logo} alt="Logo" /> </a>



                    {/* Toogle Section */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    {/* Menu Section */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item ">
                                <Link to="/home" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Booking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Destination</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> {loggedInUser.name} </a>
                            </li>
                        </ul>

                        {
                            loggedInUser.isSignedIn ?
                                <button onClick={() => signOutUser()} className="login">Log out</button>
                                :
                                <Link to="/login">
                                    <button className="login">Login</button>
                                </Link>
                        }
                    </div>

                </nav>
            </div>
        </section>
    );
};

export default Header;
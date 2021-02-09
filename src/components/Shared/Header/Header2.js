import React, { useContext } from 'react';
import './Header.css';
import logo from '../../../resources/Logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Header2 = ({ signOutUser }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)



    return (
        <section className="header2">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">

                    {/* Logo Section */}
                    <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="Logo" /> </a>

                    {/* Search Bar Section */}
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

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
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Destination</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li> */}
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

export default Header2;
import React from 'react';
import './Home.css';
import Header from '../../Shared/Header/Header';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <section className="home">
            <Header></Header>
            <h2> This is Home page!!!</h2>
            <Slider></Slider>
        </section>
    );
};

export default Home;
import React from 'react';
import './Home.css';
import Header from '../../Shared/Header/Header';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <section className="home">
            <Header></Header>
            <Slider></Slider>
        </section>
    );
};

export default Home;
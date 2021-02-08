import React, { useState } from 'react';
import './Slider.css';
import fakeData from '../../../fakeData';
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {

    const homeSlider = fakeData;
    const [slider, setSlider] = useState(homeSlider);

    return (
        <section className="slider" >

            <Carousel >
                {
                    slider.map(item =>
                        <Carousel.Item  >
                            <div className="container">

                                <div className="row">
                                    <div className=" col-md-7 slider-info ">
                                        <h1 > {item.name} </h1>
                                        <p> {item.shortInfo} </p>
                                        <button className="booking">Booking Now <i class="fas fa-arrow-right"></i></button>
                                    </div>

                                    <div className="col-md-5 text-right">
                                        <img className=" slider-img" src={item.img} alt="First slide" />
                                    </div>
                                </div>


                            </div>
                        </Carousel.Item>
                    )
                }

            </Carousel>
        </section >
    );
};

export default Slider;
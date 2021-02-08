import React from 'react';
import './SliderCart.css';
import Carousel from 'react-bootstrap/Carousel'

const SliderCart = (props) => {
    // console.log(props.items);
    // const { id, name, shortInfo, img } = props.items

    return (
        <section>

            <Carousel >
                {
                    props.items.map(item =>
                        <Carousel.Item >
                            <div className="row">
                                <div className="col-md-6">
                                    <h3> {item.name} </h3>
                                    <p> {item.shortInfo} </p>
                                </div>
                                <div className="col-md-6">
                                    <img className="d-block  slider-img" src={item.img} alt="First slide" />
                                </div>
                            </div>

                        </Carousel.Item>
                    )
                }


            </Carousel>


        </section >
    );
};

export default SliderCart;
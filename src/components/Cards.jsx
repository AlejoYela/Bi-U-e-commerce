import React from 'react';
import CardFav from './CardFav';
import Carousel from 'react-bootstrap/Carousel';

function Cards() {
    return ( 
    <Carousel>
        <Carousel.Item>
            <CardFav/>
        </Carousel.Item>
        <Carousel.Item>
            <CardFav/>
        </Carousel.Item>
        <Carousel.Item>
            <CardFav/>
        </Carousel.Item>
        <Carousel.Item>
            <CardFav/>
        </Carousel.Item>
      </Carousel> );
}

export default Cards;
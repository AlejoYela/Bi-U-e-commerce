import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import CardFav from './CardFav';

function CarouserCards() {
    return (
        <Carousel>
            <Carousel.Item class="carousel g-4">
                <CardGroup >
                    <CardFav />
                    <CardFav />
                    <CardFav />
                    <CardFav />
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item class="carousel g-4">
                <CardGroup >
                    <CardFav />
                    <CardFav />
                    <CardFav />
                    <CardFav />
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item class="carousel g-4">
                <CardGroup >
                    <CardFav />
                    <CardFav />
                    <CardFav />
                    <CardFav />
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouserCards;
import { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import CardFav from './CardFav';
import useScreenSize from '../hooks/useScreenSize';
import axios from 'axios';

function CarouserCards() {
    const { width } = useScreenSize();

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios(`http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.8`).then(({ data }) => {
            const favProducts = data.slice(0, 8)
            setProductos(favProducts);
        });
    }, []);

    // Helper function to group recipes based on responsive breakpoints
    const groupRecipes = (productos, breakpointItems) => {
        const groupedRecipes = [];
        let currentGroup = [];

        for (let i = 0; i < productos.length; i++) {
            currentGroup.push(productos[i]);

            if (currentGroup.length === breakpointItems || i === productos.length - 1) {
                groupedRecipes.push(currentGroup);
                currentGroup = [];
            }
        }

        return groupedRecipes;
    };

    const responsive = {
        items: width >= 1189 && width < 2000 ? 3 : width >= 2000 ? 4 : 1,
    };

    return (
        <div>
            <Carousel interval={null} responsive={responsive} indicators={false} nextIcon={<Button className='rounded-pill'><img src="icons/next.svg" alt="" /></Button>} prevIcon={<Button className='rounded-pill'><img src="icons/prev.svg" alt="" /></Button>}>

                {groupRecipes(productos, responsive.items).map(
                    (item, index) => (
                        <Carousel.Item key={index}>
                            <div className="d-flex justify-content-center gap-4 px-4">
                                {item.map((product, index) => (
                                    <CardFav key={index} name={product.name} price={product.price} stars={product.rating} img={product.api_featured_image} stock={true} colors={product.product_colors} />
                                ))}
                            </div>
                        </Carousel.Item>
                    )
                )}
            </Carousel>
        </div>
    );
}

export default CarouserCards;

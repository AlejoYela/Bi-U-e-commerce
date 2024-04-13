import { Carousel, Button } from 'react-bootstrap';
import CardFav from './CardFav';
import useScreenSize from '../hooks/useScreenSize';

function CarouserCards({ productos }) {
    const { width } = useScreenSize();

    // Helper function to group productos based on responsive breakpoints
    const groupProductos = (productos, breakpointItems) => {
        const groupedProductos = [];
        let index = 0;

        while (index < productos.length) {
            groupedProductos.push(productos.slice(index, index + breakpointItems));
            index += breakpointItems;
        }

        return groupedProductos;
    };

    const responsive = {
        items: width >= 1189 && width < 2000 ? 3 : width >= 2000 ? 4 : 1,
    };

    return (
        <div>
            <Carousel interval={null} responsive={responsive} indicators={false} nextIcon={<Button className='rounded-pill'><img src="icons/next.svg" alt="" /></Button>} prevIcon={<Button className='rounded-pill'><img src="icons/prev.svg" alt="" /></Button>}>
                {groupProductos(productos, responsive.items).map((group, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center gap-4 px-4">
                            {group.map((product) => (
                                <CardFav key={index} id={product.id} name={product.name} price={product.price} stars={product.rating} img={product.api_featured_image} stock={true} colors={product.product_colors} description={product.description} type={product.product_type} />
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouserCards;

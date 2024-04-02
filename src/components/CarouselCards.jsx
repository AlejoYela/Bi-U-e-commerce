import Carousel from 'react-bootstrap/Carousel';
import CardFav from './CardFav';
import products from '../productos.json'
import useScreenSize from '../hooks/useScreenSize';

function CarouserCards() {

  const { width } = useScreenSize();

// Helper function to group recipes based on responsive breakpoints
const groupRecipes = (products, breakpointItems) => {
  const groupedRecipes = [];
  let currentGroup = [];

  for (let i = 0; i < products.length; i++) {
    currentGroup.push(products[i]);

    if (currentGroup.length === breakpointItems || i === products.length - 1) {
      groupedRecipes.push(currentGroup);
      currentGroup = [];
    }
  }

  return groupedRecipes;
};

const responsive = {
  items: width >= 1289 ? 4 : 1, // Show 4 cards on desktops
};

return (
  <div>
      <Carousel responsive={responsive}>
        {groupRecipes(products, responsive.items).map(
          (item, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center gap-4 px-4">
                {item.map((product, index) => (
                  <CardFav key={index} name={product.nombre} description={product.descripcion} price={product.precio} stars={product.estrellas} img={product.imagen}/>
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
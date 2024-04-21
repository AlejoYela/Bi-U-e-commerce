import { useFav } from "../hooks/useFav";
import { useCart } from "../hooks/useCart";
import { Button, Container, ListGroup, Image } from "react-bootstrap";
import { CartIcon, FavFillIcon } from "../icons/Icons";
import { Link } from "react-router-dom";

function Favoritos() {

    const { fav, clearFav, addToFav, removeFromFav } = useFav()
    const { addToCart, } = useCart()

    return (
        <Container fluid='md mb-5'>
            <h2 className='text-center my-5 text-uppercase fw-light fs-3'>productos favoritos</h2>

            {fav.length <= 0 && <h2 className="text-center fw-light">No tienes productos favoritos</h2>}

            <ListGroup>

                {fav.map(product => (
                    <ListGroup.Item className="d-inline-flex justify-content-between align-items-center">
                        <div className="">
                            <Link to={`/producto/${product.product_type}/${product.id}`}>
                                <Image fluid className='border-0 rounded' src={product.api_featured_image} width={100}></Image>
                            </Link>
                        </div>
                        <div className="w-50">
                            <h2 className="text-truncate text-uppercase fs-5">{product.name}</h2>

                            {product.stock ? (
                                <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-success fw-light mb-2'><img width="15" className="d-inline-block align-text-bottom" src="icons/check.svg" alt="" /> Producto disponible</p>
                            ) : (
                                <p style={{ fontSize: '0.9rem' }} className='d-inline-block text-danger fw-light mb-2'><img width="15" className="d-inline-block align-text-bottom" src="icons/alert.svg" alt="" /> Producto agotado</p>
                            )}
                        </div>

                        <div>
                            <h3 className="fw-light">$ {product.price}</h3>
                        </div>
                        <div>
                            <Button variant="outline-dark d-inline-flex" className="fw-light" size="lg" onClick={() => addToCart(product)}><CartIcon />Agregar al carrito</Button>
                        </div>
                        <div>
                            <Button className='bg-transparent border-0' onClick={() => removeFromFav(product)}>
                                <FavFillIcon />
                            </Button>

                        </div>
                    </ListGroup.Item>
                ))}

            </ListGroup>

        </Container>
    );
}

export default Favoritos;
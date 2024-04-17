import { useState } from "react";
import { Button, Offcanvas, Badge, OverlayTrigger, ListGroup, Image } from "react-bootstrap";
import { renderTooltip, tooltipText } from '../hooks/renderTooltip.js';
import { useCart } from "../hooks/useCart.js";


function Cart() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { cart, clearCart, addToCart } = useCart()

    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 100, hide: 100 }}
            overlay={renderTooltip(tooltipText, 'cart')}>
            <div>

                <Button className="boton" variant="outline-primary border-0 bg-transparent" onClick={handleShow}>
                    <a href="#"><img src='icons/cart.svg' alt="Carrito" /><Badge bg="primary">0</Badge></a>
                </Button>

                <Offcanvas show={show} onHide={handleClose} backdrop={false} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className='fw-light fs-2'>Carrito</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ListGroup>
                            {cart.map(product => (
                                <ListGroup.Item className="d-flex">
                                    <Image src={product.api_featured_image} width={150} />
                                    <div>
                                        <h2>{product.name}</h2>
                                        <p>{product.quantity}</p>
                                        <Button onClick={() => addToCart(product)}>+</Button>
                                    </div>

                                </ListGroup.Item>
                            ))}
                        </ListGroup>


                        <Button variant="outline-primary" onClick={clearCart}>
                            Vaciar bolsa
                        </Button>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

        </OverlayTrigger>
    );
}

export default Cart;
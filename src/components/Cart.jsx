import { useState } from "react";
import { Button, Offcanvas, Badge, ListGroup, Image, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { useCart } from "../hooks/useCart.js";
import { CartIcon } from "../icons/Icons.jsx";


function Cart() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { cart, clearCart, addToCart, removeFromCart } = useCart()

    return (
        <div>

            <Button className="boton" variant="outline-primary border-0 bg-transparent" onClick={handleShow}>
                <CartIcon></CartIcon><Badge bg="primary">{cart.length}</Badge>
            </Button>

            <Offcanvas show={show} onHide={handleClose} scroll backdrop={false} placement="end">
                <Offcanvas.Header closeButton>

                    <Offcanvas.Title className='fw-light fs-2 d-inline-flex gap-1'>
                        <CartIcon />
                        Bolsa
                        <h5>

                            <Badge className="d-flex align-items-center" bg="primary">
                                {cart.length}
                            </Badge>
                        </h5>
                    </Offcanvas.Title>

                </Offcanvas.Header>
                <hr className="mt-0" />
                <Offcanvas.Body>
                    <ListGroup className="mb-5">
                        {cart.map(product => (
                            <ListGroup.Item className="d-flex justify-content-start gap-3">
                                <Image className='border-0 rounded' src={product.api_featured_image} width={80} height={80} />
                                <div className="m-0 p-0">
                                    <small className="text-uppercase fw-normal w-100">{product.name}</small ><br />
                                    <small className="text-body-tertiary">$ {product.price} </small><br />
                                    {product.product_colors && product.product_colors.length > 0 && (
                                        <Button className='rounded-pill border-primary border-0 p-1 mb-2' style={{ backgroundColor: product.product_colors[0].hex_value, height: '1rem', width: '1rem' }} />
                                    )}{' '}
                                    <ButtonToolbar>
                                        <ButtonGroup className="border border-1 border-primary me-2">
                                            <Button className="border-0" variant="outline-primary">-</Button>
                                            <Button className="border-0 fw-light" variant="outline-primary">{product.quantity}</Button>
                                            <Button className="border-0" variant="outline-primary" onClick={() => addToCart(product)}>+</Button>
                                        </ButtonGroup>
                                        <ButtonGroup>
                                            <Button className='fw-light' onClick={() => removeFromCart(product)} variant="outline-primary">Eliminar</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </div>

                            </ListGroup.Item>
                        ))}
                    </ListGroup>


                </Offcanvas.Body>
                <Button variant="outline-primary mx-4 my-3" onClick={clearCart}>
                    Vaciar bolsa
                </Button>
            </Offcanvas>
        </div>

    );
}

export default Cart;
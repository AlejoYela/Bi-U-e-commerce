import { useState } from "react";
import { useFilters } from '../hooks/useFilters';
import { Button, ButtonGroup, Offcanvas, Container, Form } from "react-bootstrap";
import Buscador from "./Buscador";
import { OrderIcon } from "../icons/Icons";

function FilterPrice({ loading }) {

    const { filters, handlePrecioMaxChange, handlePrecioMinChange } = useFilters()

    const [showOrder, setShowOrder] = useState(false);
    const [toggle, setToggle] = useState(true)

    const handleCloseOrder = () => setShowOrder(false);
    const handleShowOrder = () => setShowOrder(true);

    const handleToggle = () => setToggle(!toggle)

    return (
        <>
            <Button variant="outline-primary mb-3" className="d-lg-none" onClick={handleShowOrder}>
                <OrderIcon />
            </Button>
            <Offcanvas show={showOrder} responsive="lg" onHide={handleCloseOrder}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Ordenar por:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {!loading && <Container className={showOrder ? 'd-grid gap-3 mb-5 align-items-center px-0' : 'd-flex justify-content-end gap-3 mb-5 align-items-center px-0'}>


                        <ButtonGroup>
                            <Button variant='outline-primary fw-light fs-5 border' active={toggle} onClick={handleToggle}>Maquillaje</Button>
                            <Button variant='outline-primary fw-light fs-5 border' active={!toggle} onClick={handleToggle}>Skincare</Button>
                        </ButtonGroup>

                        <h3 className='fw-light fs-5 m-0 align-middle'>Precio:</h3>

                        <Form.Control type="number" value={filters.minPrice} onChange={handlePrecioMinChange} className='w-auto fw-light fs-5' />
                        <span className="fw-light fs-5 m-0">-</span>
                        <Form.Control type="number" value={filters.maxPrice} onChange={handlePrecioMaxChange} className='w-auto fw-light fs-5' />


                        <vr />

                        <Form.Select aria-label="Default select example" className={showOrder ? 'w-100 fw-light fs-5' : 'w-25 fw-light fs-5'}>

                            <option className='fw-light' value="1">Más vendidos</option>
                            <option className='fw-light' value="3">Alfabéticamente: A-Z</option>
                            <option className='fw-light' value="4">Alfabéticamente: Z-A</option>
                            <option className='fw-light' value="5">Precio: menor a mayor</option>
                            <option className='fw-light' value="6">Precio: mayor a menor</option>
                            <option className='fw-light' value="7">Fecha: antiguo a reciente</option>
                            <option className='fw-light' value="8">Fecha: reciente a antiguo</option>
                        </Form.Select>
                        <Buscador />

                    </Container>}

                    {showOrder && <Button variant='outline-primary' className='fw-light fs-4' onClick={handleCloseOrder}>Aplicar</Button>}

                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
}

export default FilterPrice;
import { useState } from "react";
import { useFilters } from '../hooks/useFilters';
import { Button, Offcanvas, Container, Form } from "react-bootstrap";

function FilterPrice({ loading }) {

    const { filters, handlePrecioMaxChange, handlePrecioMinChange } = useFilters()

    const [showOrder, setShowOrder] = useState(false);

    const handleCloseOrder = () => setShowOrder(false);
    const handleShowOrder = () => setShowOrder(true);

    return (
        <>
            <Button variant="outline-primary mb-3" className="d-lg-none" onClick={handleShowOrder}>
                <img src="/icons/order.svg" alt="Filtrar" />
            </Button>
            <Offcanvas show={showOrder} responsive="lg" onHide={handleCloseOrder}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Ordenar por:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {!loading && <Container className={showOrder ? 'd-grid gap-4 mb-4 align-items-center px-0' : 'd-flex justify-content-end gap-4 mb-4 align-items-center px-0'}>


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

                    </Container>}

                    {showOrder && <Button variant='outline-primary' className='fw-light fs-4' onClick={handleCloseOrder}>Aplicar</Button>}

                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
}

export default FilterPrice;
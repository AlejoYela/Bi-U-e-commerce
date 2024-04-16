import { ListGroup, Form, Button, Offcanvas, Placeholder, Spinner } from "react-bootstrap";
import { useState } from "react";

function Filters({ productos, filters, setFilters, loading }) {

    const categories = []

    const [showFilter, setShowFilter] = useState(false);

    const handleCloseFilter = () => setShowFilter(false);
    const handleShowFilter = () => setShowFilter(true);

    productos.forEach(element => {
        if (element.category && !categories.includes(element.category)) {
            categories.push(element.category);
        }
    });

    const handleCategoryFilter = (event) => {
        const { checked } = event.target;
        const category = event.target.getAttribute('data-category');

        setFilters(prevFilters => {
            if (checked) {
                return { ...prevFilters, category };
            } else {
                return prevFilters.category === category ? { ...prevFilters, category: 'all' } : prevFilters;
            }
        });
    }

    return (
        <>
            <div className=' mb-3 fw-normal fs-5 d-none d-xl-block d-lg-block d-xl-block'>
                <img
                    alt=""
                    src="icons/filter.svg"
                    width="40"
                    height="30"
                    className="d-inline-block align-top"
                />
                {loading ? 'Cargando filtros' : 'Filtrar por:'}

            </div>

            <Button variant="outline-primary mb-3" className="d-lg-none" onClick={handleShowFilter}>
                <img src="/icons/filter.svg" alt="Filtrar" />
            </Button>

            <Offcanvas show={showFilter} onHide={handleCloseFilter} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="d-lg-none">Filtrar productos:</Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body className='d-grid'>
                    <ListGroup className='mb-4'>
                        {!loading && <h4 className='fw-light fs-5 mb-3'>Categorías</h4>}

                        {loading && [1, 2, 3, 4, 5].map(() => (
                            <ListGroup.Item className='fs-5 fw-light'>
                                <Placeholder as={Form.Check} animation="glow">
                                    <Spinner animation="grow" size="sm" />
                                </Placeholder>
                            </ListGroup.Item>
                        ))}


                        {categories.map((category) => (
                            <ListGroup.Item className='fs-5 fw-light'>
                                <Form.Check
                                    key={category}
                                    type='checkbox'
                                    id={`category-${category}`}
                                    label={category}
                                    name='category'
                                    data-category={category}
                                    checked={filters.category === category}
                                    onChange={handleCategoryFilter}
                                />
                            </ListGroup.Item>
                        ))}

                        {showFilter && <Button variant='outline-primary' className='fw-light fs-4 my-5' onClick={handleCloseFilter}>Aplicar</Button>}
                    </ListGroup>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Filters;
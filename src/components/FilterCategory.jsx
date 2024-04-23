import { ListGroup, Form, Button, Offcanvas, Placeholder, Spinner } from "react-bootstrap";
import { useState, useMemo } from "react";
import { useFilters } from '../hooks/useFilters';
import { FilterIcon } from "../icons/Icons";

function FilterCategory({ productos, loading }) {

    const categories = useMemo(() => {
        const uniqueCategories = [];
        productos.forEach(element => {
            if (element.categoria && !uniqueCategories.includes(element.categoria)) {
                uniqueCategories.push(element.categoria);
            }
        });
        return uniqueCategories;
    }, [productos]);


    const [showFilter, setShowFilter] = useState(false);

    const { filters, handleCategoryFilter } = useFilters()

    const handleCloseFilter = () => setShowFilter(false);
    const handleShowFilter = () => setShowFilter(true);


    return (
        <>
            <div className=' mb-3 fw-normal fs-5 d-none d-xl-block d-lg-block d-xl-block'>
                <FilterIcon size={25} />
                {loading ? 'Cargando filtros' : 'Filtrar por:'}

            </div>

            <Button variant="outline-primary mb-3" className="d-lg-none" onClick={handleShowFilter}>
                <FilterIcon />
            </Button>

            <Offcanvas show={showFilter} onHide={handleCloseFilter} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="d-lg-none">Filtrar productos:</Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body className='d-grid'>
                    <ListGroup className='mb-4'>
                        {!loading && <h4 className='fw-light fs-5 mb-3'>Categorías</h4>}

                        {categories.length <= 0 && [1, 2, 3, 4, 5].map(() => (
                            <ListGroup.Item className='fs-5 fw-light'>
                                <Placeholder as={Form.Check} animation="glow">
                                    <Spinner animation="grow" size="sm" />
                                </Placeholder>
                            </ListGroup.Item>
                        ))}

                        <ListGroup.Item className='fs-5 fw-light'>
                            <Form.Check
                                type='checkbox'
                                label='Todas'
                                name='category'
                                data-category='all'
                                checked={filters.categoria === 'all'}
                                onChange={handleCategoryFilter}
                            />
                        </ListGroup.Item>


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

export default FilterCategory;
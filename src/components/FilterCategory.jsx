import { ListGroup, Form, Button, Offcanvas, Placeholder, Spinner } from 'react-bootstrap'
import { useState, useMemo } from 'react'
import { useFilters } from '../hooks/useFilters'
import { FilterIcon } from '../icons/Icons'

function FilterCategory ({ productos, loading }) {
  const categories = useMemo(() => {
    if (!productos) return [] // Verificar si productos es undefined
    const uniqueCategories = []
    productos.forEach(element => {
      if (element.categoria && !uniqueCategories.includes(element.categoria)) {
        uniqueCategories.push(element.categoria)
      }
    })
    return uniqueCategories
  }, [productos])

  const subcategories = useMemo(() => {
    if (!productos) return [] // Verificar si productos es undefined
    const uniqueSubCategories = []
    productos.forEach(element => {
      if (element.subcategoria && !uniqueSubCategories.includes(element.subcategoria)) {
        uniqueSubCategories.push(element.subcategoria)
      }
    })
    return uniqueSubCategories
  }, [productos])

  const [showFilter, setShowFilter] = useState(false)

  const { filters, handleCategoryFilter, handleSubcategoryFilter } = useFilters()

  const handleCloseFilter = () => setShowFilter(false)
  const handleShowFilter = () => setShowFilter(true)

  return (
    <>
      <div className='fw-normal fs-5 d-none d-lg-inline-flex d-xl-inline-flex'>
        <FilterIcon size={25} color='#000000' />
        {loading ? <p>Cargando filtros</p> : <p>Filtrar por:</p>}

      </div>

      <Button variant='outline-primary mb-3' className='d-lg-none' onClick={handleShowFilter}>
        <FilterIcon />
      </Button>

      <Offcanvas show={showFilter} onHide={handleCloseFilter} responsive='lg'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='d-lg-none'>Filtrar productos:</Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body className='d-grid'>
          <ListGroup className='mb-4'>
            {!loading && <h4 className='fw-light fs-5 mb-3'>Categorías</h4>}

            {categories.length <= 0 && [1, 2, 3, 4, 5].map(() => (
              <ListGroup.Item className='fs-5 fw-light' key={categories.id}>
                <Placeholder as={Form.Check} animation='glow'>
                  <Spinner animation='grow' size='sm' />
                </Placeholder>
              </ListGroup.Item>
            ))}

            {categories.length > 0 &&
              <ListGroup.Item className='fs-5 fw-light'>
                <Form.Check
                  type='checkbox'
                  label='Todas'
                  name='category'
                  data-category='all'
                  checked={filters.categoria === 'all'}
                  onChange={handleCategoryFilter}
                />
              </ListGroup.Item>}

            {categories.map((category) => (
              <ListGroup.Item className='fs-5 fw-light' key={category}>
                <Form.Check
                  key={category}
                  type='checkbox'
                  id={`category-${category}`}
                  label={category}
                  name='category'
                  data-category={category}
                  checked={filters.categoria === category}
                  onChange={handleCategoryFilter}
                />
              </ListGroup.Item>
            ))}

            {!loading && <h4 className='fw-light fs-5 my-3'>Subcategorías</h4>}

            {subcategories.length > 0 &&
              <ListGroup.Item className='fs-5 fw-light'>
                <Form.Check
                  type='checkbox'
                  label='Todas'
                  name='subcategory'
                  data-category='all'
                  checked={filters.subcategoria === 'all'}
                  onChange={handleSubcategoryFilter}
                />
              </ListGroup.Item>}

            {subcategories.map((subcategory) => (
              <ListGroup.Item className='fs-5 fw-light' key={subcategory}>
                <Form.Check
                  key={subcategory}
                  type='checkbox'
                  id={`subcategory-${subcategory}`}
                  label={subcategory}
                  name='subcategory'
                  data-category={subcategory}
                  checked={filters.subcategoria === subcategory}
                  onChange={handleSubcategoryFilter}
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

export default FilterCategory

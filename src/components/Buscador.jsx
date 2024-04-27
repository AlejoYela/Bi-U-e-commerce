import { Form, Button } from 'react-bootstrap'
import { SearchIcon } from '../icons/Icons'
import { useFilters } from '../hooks/useFilters'

function Buscador () {
  const { handleSearchChange } = useFilters()

  return (
    <Form className='d-flex'>
      <Form.Control type='text' className='bg-transparent border fw-light fs-5' placeholder='Buscar productos o categorías' onChange={handleSearchChange} />
      <Button
        variant='outline-primary border-0 bg-transparent'
        aria-label='Abrir buscador'
      >
        <SearchIcon />
      </Button>
    </Form>
  )
}

export default Buscador

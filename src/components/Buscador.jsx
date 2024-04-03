import { useState } from 'react';
import { Offcanvas, Nav, Form, Button } from 'react-bootstrap';


function Buscador() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Nav.Link className='text-primary fs-5 fw-light' href="#action2" onClick={handleShow}><Button
        className="boton"
        variant="outline-primary border-0 bg-transparent"
      >
        <a href="#">
          <img src='icons/search-vine.svg' alt="Buscar" />
        </a>
      </Button></Nav.Link >

      <Offcanvas show={show} onHide={handleClose} placement='top' className='h-25'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Buscar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Escribe el producto o categoría a buscar" className="me-2 fs-5 fw-light border-primary bg-transparent text-start" aria-label="Search" />
            <Button
              className="boton bg-transparent"
              variant="outline-primary border-1"
            >
              <a href="#">
                <img src='icons/search-vine.svg' alt="Buscar" />
              </a>
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Buscador;
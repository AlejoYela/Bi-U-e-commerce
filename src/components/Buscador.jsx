import { useState } from 'react';
import { Offcanvas, Form, Button, OverlayTrigger } from 'react-bootstrap';
import { renderTooltip, tooltipText } from '../hooks/renderTooltip.js';

function Buscador() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 100, hide: 100 }}
      overlay={renderTooltip(tooltipText, 'search')}>

      <div>
        <Button
          variant="outline-primary border-0 bg-transparent"
          onClick={handleShow}
          aria-label="Abrir buscador"
        >
          <img src='icons/search-vine.svg' alt="Buscar" />
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement='top'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Buscar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Escribe el producto o categoría a buscar"
                className="me-2 fs-5 fw-light border-primary bg-transparent text-start"
                aria-label="Buscar"
              />
              <Button
                className="boton bg-transparent"
                variant="outline-primary border-1"
                aria-label="Buscar"
              >
                <img src='icons/search-vine.svg' alt="Buscar" />
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </OverlayTrigger>
  );
}

export default Buscador;

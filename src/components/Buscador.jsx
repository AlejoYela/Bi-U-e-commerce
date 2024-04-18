import { useState } from 'react';
import { Form, Button, Fade } from 'react-bootstrap';

function Buscador() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setOpen(!open)
  }

  return (
    <div>
      <div className='d-flex'>


        <Fade in={open}>
          <Form.Control type='text' className='bg-transparent border-primary' />
        </Fade>

        <Button
          variant="outline-primary border-0 bg-transparent"
          onMouseEnter={handleShow}
          aria-label="Abrir buscador"
        >
          <img src='icons/search-vine.svg' alt="Buscar" />
        </Button>
      </div>
    </div>
  );
}

export default Buscador;

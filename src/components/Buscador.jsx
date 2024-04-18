import { useState } from 'react';
import { Form, Button, Fade } from 'react-bootstrap';
import { SearchIcon } from '../icons/Icons';

function Buscador() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);


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
          <SearchIcon/>
        </Button>
      </div>
    </div>
  );
}

export default Buscador;

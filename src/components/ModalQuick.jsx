import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalQuick({ state, name }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                className={state ? "visible boton bg-transparent position-absolute top-50 start-50 translate-middle" : "invisible boton bg-transparent position-absolute top-50 start-50 translate-middle"}
                variant="outline-primary border-0"
                onClick={handleShow}
            >
                <img src={state ? 'icons/search-vine.svg' : 'icons/search-white.svg'} alt="Buscar" width={80} />
                <p className='fs-5 text-primary'>Vista rápida</p>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalQuick;
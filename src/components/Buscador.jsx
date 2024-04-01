import React from 'react';
import { Form } from 'react-bootstrap';

function Buscador() {
    return (
        <Form className="d-flex">
            <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
            <a className="icon-link" href="#">
                {/* Cambia la URL de src por la ruta de la imagen externa */}
                <img src="search.svg" alt="Buscar" />
            </a>
        </Form>
    );
}

export default Buscador;

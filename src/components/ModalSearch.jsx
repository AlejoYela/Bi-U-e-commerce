import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { SearchIcon } from "../icons/Icons";

function ModalSearch() {

    const [search, setSearch] = useState(false)
    const handleClose = () => setSearch(false)
    const handleShow = () => setSearch(true)

    return (
        <>
            <Button
                variant="outline-primary border-0 bg-transparent"
                onClick={handleShow}
                aria-label="Abrir buscador"
            >
                <SearchIcon />
            </Button>
            <Modal show={search} onHide={handleClose} centered>
                <Modal.Header>
                    <InputGroup>
                        <InputGroup.Text className="bg-secondary">
                            <SearchIcon strokeWidth={0.5} />
                        </InputGroup.Text>
                        <Form.Control className="fw-light" type='text' placeholder='Buscar productos o categorías' />
                    </InputGroup>
                </Modal.Header>
                <Modal.Body>
                    Cuerpo
                </Modal.Body>
                <Modal.Footer>
                    Pie
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalSearch;
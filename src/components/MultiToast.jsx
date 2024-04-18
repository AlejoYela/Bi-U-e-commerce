import { Toast } from "react-bootstrap";
import { CartIcon } from "../icons/Icons";

function MultiToast({ showToast, setShowToast }) {

    return (
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className="position-fixed bottom-0 end-0 p-3 m-3 z-3 ">
            <Toast.Header>
                <CartIcon />
                <strong className="me-auto">Gracias</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Producto agregado al carrito.</Toast.Body>
        </Toast>
    );
}

export default MultiToast;
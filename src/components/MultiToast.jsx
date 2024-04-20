import { Toast } from "react-bootstrap";
import { CartIcon } from "../icons/Icons";

function MultiToast({ titulo, texto, icono, showToast, setShowToast }) {

    return (
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide className="position-fixed bottom-0 end-0 p-3 m-3 z-3 ">
            <Toast.Header>
                {icono}
                <strong className="me-auto">{titulo}</strong>

            </Toast.Header>
            <Toast.Body>{texto}</Toast.Body>
        </Toast>
    );
}

export default MultiToast;
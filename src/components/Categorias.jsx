import { useState } from 'react'
import { Offcanvas, Nav, Accordion, Container, Col } from 'react-bootstrap'
import TargetCategoria from './TargetCategoria'
import { useFilters } from '../hooks/useFilters'

function Categorias () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { selectSubcategory } = useFilters()

  return (
    <div>
      <Nav.Link className='fs-5 fw-light' href='#action2' onClick={handleShow}>Categorías</Nav.Link>

      <Offcanvas show={show} onHide={handleClose} placement='start'> {/* Añade opciones de configuración */}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fw-light fs-2'>Categorías</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Accordion flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header><p className='m-0 fs-5 fw-light'>Maquillaje</p></Accordion.Header>
              <Accordion.Body>
                <Container fluid='bg'>
                  <Col>
                    <TargetCategoria title='Piel' src='categorias/1.png' selectSubcategory={selectSubcategory} setShow={setShow} />
                    <TargetCategoria title='Labios' src='categorias/2.png' selectSubcategory={selectSubcategory} setShow={setShow} />
                    <TargetCategoria title='Ojos' src='categorias/3.png' selectSubcategory={selectSubcategory} setShow={setShow} />
                  </Col>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header><p className='m-0 fs-5 fw-light'>Skincare</p>
              </Accordion.Header>
              <Accordion.Body>
                <Container fluid='bg'>
                  <Col>
                    <TargetCategoria title='Limpiadores' src='categorias/4.png' selectSubcategory={selectSubcategory} setShow={setShow} />
                    <TargetCategoria title='Hidratantes' src='categorias/5.png' selectSubcategory={selectSubcategory} setShow={setShow} />
                    <TargetCategoria title='Exfoliantes' src='categorias/6.png' selectSubcategory={selectSubcategory} setShow={setShow} />
                    <TargetCategoria title='Protectores solares' src='categorias/7.png' selectSubcategory={selectSubcategory} setShow={setShow} />
                    <TargetCategoria title='Tónicos' src='categorias/8.png' selectSubcategory={selectSubcategory} setShow={setShow} />
                    <TargetCategoria title='Serums' src='categorias/9.png' selectSubcategory={selectSubcategory} setShow={setShow} />
                  </Col>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='m-3'>
              <a href='#' className='fs-5 fw-light' style={{ textDecoration: 'none' }}>Accesorios</a>

            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Categorias

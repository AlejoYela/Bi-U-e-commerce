import React from 'react'
import { Navbar, Nav, Button, Form, InputGroup, Accordion, Col, Row, Container } from 'react-bootstrap'
import { WhatsappIcon, InstagramIcon, GithubIcon, LinkedinIcon } from '../icons/Icons'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <Container id='Contacto' fluid className='bg-primary m-0 p-0 text-light w-100'>
      <Row className='fw-light py-5 justify-content-md-center w-100'>
        <Col className='mb-3 mx-3' md={3}>
          <h2 className='m-0 fw-normal'>BiU Cosmetics</h2>
          <Navbar variant='dark' className='justify-content-start py-0'>
            <Nav>
              <Nav.Item>
                <Nav.Link href='https://api.whatsapp.com' target='_blank' rel='noopener noreferrer'>
                  <WhatsappIcon />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                  <InstagramIcon />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='https://github.com' target='_blank' rel='noopener noreferrer'>
                  <GithubIcon />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                  <LinkedinIcon />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          <p className='fs-5 text-uppercase my-3'>Ingresa al grupo VIP</p>
          <p>Regístrate y sé el primero en enterarte de los últimos lanzamientos y promociones exclusivas, además recibe un 15% de descuento en tu primer pedido.</p>
          <InputGroup>
            <Form.Control className='fw-light' placeholder='Correo electrónico' />
            <Button variant='outline-light fw-light'>Suscribirse</Button>
          </InputGroup>
        </Col>
        <Accordion className='d-block d-md-none pe-0 ps-4' flush data-bs-theme='primary'>
          <Accordion.Item eventKey={0}>

            <Accordion.Header>
              <h4 className='fw-light text-uppercase fs-5'>Contáctanos</h4>
            </Accordion.Header>
            <Accordion.Body className='bg-primary text-light'>
              <p className='m-0'>El horario de atención al cliente es de:</p>
              <ul>
                <li className='m-0'>Lunes a Viernes: 6 am - 7 pm</li>
                <li className='mt-0'>Sábado y domingo: 6 am - 2 pm</li>
              </ul>
              <Link to='https://heroicons.com/outline' className='text-light fs-5'>servicioalcliente@biu.com</Link>
              <p className='mb-0 mt-3'>El horario del Live Chat es:</p>
              <ul>
                <li className='m-0'>Lunes a Viernes: 6 am - 2 pm</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey={1}>
            <Accordion.Header>
              <h4 className='fw-light text-uppercase fs-5'>servicio al cliente</h4>
            </Accordion.Header>
            <Accordion.Body className='bg-primary'>
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Devoluciones</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Información de envío</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Ayuda y preguntas frecuentes</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Mi cuenta</Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={2}>
            <Accordion.Header>
              <h4 className='fw-light text-uppercase fs-5'>Tienda</h4>
            </Accordion.Header>
            <Accordion.Body className='bg-primary'>
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Todos</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Cuerpo</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Ojos</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Rostro</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Labios</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Herramientas</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey={3}>
            <Accordion.Header>
              <h4 className='fw-light text-uppercase fs-5'>Acerca de</h4>
            </Accordion.Header>
            <Accordion.Body className='bg-primary'>
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Acerca de Biu</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Técnicas de Biu</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Eventos</Link><br />
              <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Empleos</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Col className='d-none d-md-block mx-3' md='auto'>
          <h4 className='fw-light text-uppercase fs-5'>Contáctanos</h4>
          <p className='m-0'>El horario de atención al cliente es de:</p>
          <ul>
            <li className='m-0'>Lunes a Viernes: 6 am - 7 pm</li>
            <li className='mt-0'>Sábado y domingo: 6 am - 2 pm</li>
          </ul>
          <Link to='https://heroicons.com/outline' className='text-light fs-5'>servicioalcliente@biu.com</Link>
          <p className='mb-0 mt-3'>El horario del Live Chat es:</p>
          <ul>
            <li className='m-0'>Lunes a Viernes: 6 am - 2 pm</li>
          </ul>
        </Col>

        <Col className='d-none d-md-block mx-3' md='auto'>
          <h4 className='fw-light text-uppercase fs-5'>servicio al cliente</h4>
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Devoluciones</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Información de envío</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Ayuda y preguntas frecuentes</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Mi cuenta</Link>
        </Col>
        <Col className='d-none d-md-block mx-3' md='auto'>
          <h4 className='fw-light text-uppercase fs-5'>Tienda</h4>
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Todos</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Cuerpo</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Ojos</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Rostro</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Labios</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Herramientas</Link>
        </Col>

        <Col className='d-none d-md-block mx-3' md='auto'>
          <h4 className='fw-light text-uppercase fs-5'>Acerca de</h4>
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Acerca de Biu</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Técnicas de Biu</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Eventos</Link><br />
          <Link to='' className='text-light fs-5' style={{ textDecoration: 'none' }}>Empleos</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer

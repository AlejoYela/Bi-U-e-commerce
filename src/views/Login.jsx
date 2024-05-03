import { Button, Form, Container, Row, Col } from 'react-bootstrap'

function Login () {
  return (
    <Container className='align-content-center my-5' style={{ height: '70vh' }}>
      <Row className='justify-content-center'>
        <Col md={4} className='mb-4 m-md-0'>
          <Form>
            <h2 className='mb-4 fw-light'>Ingresar</h2>
            <Form.Group className='mb-3 fw-light'>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control className='fw-light' type='email' placeholder='Ingresa tu correo electrónico' />
            </Form.Group>
            <Form.Group className='mb-3 fw-light'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control className='fw-light' type='email' placeholder='Ingresa una contraseña válida' />
            </Form.Group>
            <Button className='w-100 mt-3 fw-light'>Ingresar</Button>
          </Form>
        </Col>
        <Col className='vr mx-5 p-0 d-none d-md-block' xs='auto' />
        <Col className='d-md-none'>
          <hr />
        </Col>
        <Col md={4} className='mt-4 m-md-0'>
          <h2 className='fw-light mb-4'>Nueva Cuenta</h2>
          <Button className='w-100 fw-light'>Crear cuenta</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Login

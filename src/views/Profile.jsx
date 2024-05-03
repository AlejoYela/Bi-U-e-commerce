import { useAuth0 } from '@auth0/auth0-react'
import { Container, Image, Button, Row, Col } from 'react-bootstrap'
import { CheckIcon } from '../icons/Icons'
import { Link } from 'react-router-dom'

function Profile () {
  const { user, logout } = useAuth0()
  return (
    <Container className='py-5' style={{ minHeight: '90vh' }}>
      <Row>
        <Col xs={10} md>
          <div className='mb-5'>
            <h2 className='fw-normal text-uppercase'>Tu cuenta</h2>
            <p className='fw-light'>Ve todas tus compras y gestiona la información de tu cuenta</p>
          </div>
          <div>
            <p className='fw-normal text-uppercase fs-5'>Tus compras</p>
            <p className='fw-light m-'>Aún no has realizado ninguna compra</p>
            <Link to='/productos'>
              <Button variant='outline-primary' className='fw-light'>Continuar comprando</Button>
            </Link>
          </div>
        </Col>
        <Col xs='auto' className='border rounded-3 py-3 position-relative'>
          <div className='border rounded p-2'>
            <div className='d-flex gap-3'>
              <Image src={user.picture} roundedCircle style={{ width: '52px', height: '52px' }} />
              <div>
                <p className='fw-light m-0'>{user.name}</p>
                <small className='fw-light m-0'>{user.email}</small>
              </div>
            </div>
            <div className='text-end position-absolute bottom-0 end-0 m-3'>
              <small className='text-success d-inline-flex mb-3'><CheckIcon size={18} />Usuario autenticado</small><br />
              <div className='d-flex gap-2'>
                <Button variant='primary' className='fw-light text-end' onClick={() => logout()}>Administrar</Button>
                <Button variant='outline-primary' className='fw-light text-end' onClick={() => logout()}>Cerrar sesión</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile

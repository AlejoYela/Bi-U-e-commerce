import { Button, Container } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

function Login () {
  const { loginWithRedirect } = useAuth0()
  return (
    <Container className='align-content-center my-5 text-center' style={{ height: '70vh' }}>
      <p className='fw-light fs-5'>¡No has iniciado sesión!</p>
      <Button className='fw-light' onClick={() => loginWithRedirect()}>Iniciar Sesión</Button>
    </Container>
  )
}

export default Login

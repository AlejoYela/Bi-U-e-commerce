import { useState } from 'react'
import { ChatIcon, UserIcon, MailboxIcon } from '../icons/Icons'
import { Button, ToastContainer, Toast, Image, Form, InputGroup } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

function LiveChat () {
  const [showToast, setShowToast] = useState(false)
  const { isAuthenticated, user } = useAuth0()

  const handleShowToast = () => setShowToast(!showToast)
  return (
    <>
      <div className='position-fixed end-0 bottom-0 z-3 m-3'>
        <Button variant='info' className='rounded-pill' onClick={() => handleShowToast()}>
          <ChatIcon size={40} color='#FFFFFF' />
        </Button>
      </div>
      <ToastContainer
        className='position-fixed end-0 bottom-0 m-3 pb-5 mb-5'
      >
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header className='d-inline-flex gap-2'>
            {isAuthenticated ? <Image src={user.picture} style={{ width: '32px' }} roundedCircle color='#000000' width={32} /> : <UserIcon />}
            Hola {isAuthenticated ? user.name : '!'}
          </Toast.Header>
          <Toast.Body>
            <p className='m-0'>Bienvenido</p>
            <p className='fs-5'>Soy el LiveChat de Biu</p>
            <div>

              <InputGroup>
                <Form.Control className='border border-primary' placeholder='Escribe tu pregunta' />
                <Button variant='outline-primary'><MailboxIcon /></Button>
              </InputGroup>
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}

export default LiveChat

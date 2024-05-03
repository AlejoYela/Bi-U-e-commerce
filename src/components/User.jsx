import { Button, Image } from 'react-bootstrap'
import { UserIcon } from '../icons/Icons'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function User () {
  const { user, isAuthenticated } = useAuth0()

  return (
    <>
      <Link to={isAuthenticated ? '/profile' : '/login'}>
        <Button className='boton' variant='outline-primary border-0 bg-transparent'>
          {isAuthenticated ? <Image src={user.picture} style={{ height: '32px' }} roundedCircle /> : <UserIcon />}
        </Button>
      </Link>
    </>
  )
}

export default User

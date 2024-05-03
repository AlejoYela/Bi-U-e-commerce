import { Button } from 'react-bootstrap'
import { UserIcon } from '../icons/Icons'
import { Link } from 'react-router-dom'

function User () {
  return (
    <>
      <Link to='/login'>
        <Button className='boton' variant='outline-primary border-0 bg-transparent'>
          <UserIcon />
        </Button>
      </Link>
    </>
  )
}

export default User

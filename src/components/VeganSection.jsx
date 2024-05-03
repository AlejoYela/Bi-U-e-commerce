import React from 'react'
import { Container } from 'react-bootstrap'
import { LeafIcon, PawIcon, RecyclableIcon, FlaskOffIcon } from '../icons/Icons'

function VeganSection () {
  return (
    <Container className='d-flex flex-row justify-content-center align-items-center gap-5 text-center my-5'>
      <div>
        <LeafIcon size={50} />
        <p>Vegano</p>
      </div>
      <div>
        <PawIcon size={50} />
        <p>Sin crueldad animal</p>
      </div>
      <div>
        <RecyclableIcon size={50} />
        <p>Reciclable</p>
      </div>
      <div>
        <FlaskOffIcon size={50} />
        <p>Sin parabenos</p>
      </div>
    </Container>
  )
}

export default VeganSection

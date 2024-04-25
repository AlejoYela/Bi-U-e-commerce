import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { WhatsappIcon, InstagramIcon, GithubIcon, LinkedinIcon } from '../icons/Icons'

function Footer () {
  return (
    <Navbar bg='primary' variant='dark' className='justify-content-center'>
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
  )
}

export default Footer

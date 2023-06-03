import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/nurulislam411/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
      <a href="https://github.com/nurulcse7" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
      <a href="https://www.facebook.com/nurul.bd.775" target="_blank" rel="noopener noreferrer"><FaFacebook></FaFacebook></a>

    </div>
  )
}

export default HeaderSocials

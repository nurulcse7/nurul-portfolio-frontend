import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaReddit } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/nurulbd75/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
      <a href="https://github.com/nurulcse7" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
      <a href="https://www.reddit.com/user/nurulbd75" target="_blank" rel="noopener noreferrer"><FaReddit></FaReddit></a>

    </div>
  )
}

export default HeaderSocials
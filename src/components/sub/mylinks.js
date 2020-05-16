import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Links () {
  return (
    <>
      <ul className='nav-list vertical'>
        <li>
          <a href='https://github.com/xxblincolnxx' title='Github'>
            <FaGithub color='rgb(189, 189, 189)' size={40} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/benprothe/' title='Linkedin'>
            <FaLinkedin color='rgb(189, 189, 189)' size={40} />
          </a>
        </li>
        <li>
          <a href='https://res.cloudinary.com/deodwfxkn/image/upload/v1589671341/portfolio/ben_prothe_resume_avrdah.pdf' title='Download Resume (pdf)' download>
            <BsDownload color='rgb(189, 189, 189)' size={30} />
          </a>
        </li>
      </ul>
    </>
  )
}

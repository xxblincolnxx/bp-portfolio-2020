import React from 'react'
import Tooltip from '../../utils/Tooltip'
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiAttachment } from 'react-icons/ti'

export default function Links () {
  return (
    <div>
      <ul className='nav-list'>
        <li>
          <Tooltip text='See my github'>
            <TiSocialGithubCircular color='rgb(189, 189, 189)' size={50} />
          </Tooltip>
        </li>
        <li>
          <Tooltip text='See my Linkedin'>
            <TiSocialLinkedinCircular color='rgb(189, 189, 189)' size={50} />
          </Tooltip>
        </li>
        <li>
          <Tooltip text='Download Resume (pdf)'>
            <TiAttachment color='rgb(189, 189, 189)' size={50} />
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}

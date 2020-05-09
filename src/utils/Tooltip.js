import React from 'react'
import Hover from './hover'
import PropTypes from 'prop-types'

export default function Tooltip ({ text, children }) {
  return (
    <Hover>
      {(hovering) => (
        <div className='container'>
          {hovering === true &&
            <div className='tooltip'>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired
}

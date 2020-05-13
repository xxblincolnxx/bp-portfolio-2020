import React from 'react'

export default function Card ({ title, image, symbol, href }) {
  const style = {
    backgroundImage: URL(image),
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <>
      <a href={href}>
        <div className='card' style={style}>
          {symbol}
        </div>
        <h1>{title}</h1>
      </a>
    </>
  )
}

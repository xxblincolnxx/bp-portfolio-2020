import React from 'react'

export default function Card ({ project }) {
  const style = {
    backgroundImage: `url(${project.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  const { title, href, category } = project
  return (
    <>
      <a href={href}>
        <div className='card' style={style}>
          Symbol
        </div>
        <h1>{title}</h1>
      </a>
    </>
  )
}

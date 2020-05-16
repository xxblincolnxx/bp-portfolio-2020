import React from 'react'
import Card from './card'
import { v4 as uuidv4 } from 'uuid'

export default function Grid ({ projects, display }) {
  const filteredProjects = display === 'All' ? projects : projects.filter(project => project.filters.includes(display))

  return (
    <div className='container align-items-start wd-100'>
      {filteredProjects.map((project, index) => {
        return (
          <Card key={uuidv4()} project={project} display={display} animationIndex={index} />
        )
      })}
    </div>
  )
}

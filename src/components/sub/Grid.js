import React from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'

export default function Grid ({ projects, display }) {
  const filteredProjects = display === 'All' ? projects : projects.filter(project => project.filters.includes(display))

  return (
    <div className='container'>
      {filteredProjects.map((project) => {
        return (
          <Card key={uuidv4()} project={project} display={display} />
        )
      })}
    </div>
  )
}

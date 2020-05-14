import React from 'react'
import Card from './Card'

export default function Grid ({ projects, display }) {
  const filteredProjects = display === 'All' ? projects : projects.filter(project => project.category === display)

  return (
    <div>
      {filteredProjects.map((project) => {
        return (
          <Card key={project.id} project={project} />
        )
      })}
    </div>
  )
}

import React from 'react'
import { Code, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Torre de Control Aerolínea",
      description: "API que simula el funcionamiento de una aerolínea, proporcionando endpoints para interactuar con aviones, aeropuertos y pasajeros.",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/HabunoGD1809/TorreDeControlAerolinea"
    }
  ]

  return (
    <section id="projects" className="my-16">
      <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Code className="mr-2 text-blue-600" />
              {project.title}
            </h3>
            <p className="mb-4">{project.description}</p>
            <div className="mb-4">
              <strong>Tecnologías:</strong> {project.technologies.join(", ")}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Ver proyecto <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
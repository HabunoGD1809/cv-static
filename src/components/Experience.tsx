import React from 'react'
import { Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador de Software",
      company: "Empresa Actual",
      period: "Presente",
      description: "Desarrollo de aplicaciones web utilizando Node.js, Express y MongoDB."
    }
  ]

  return (
    <section id="experience" className="my-16">
      <h2 className="text-3xl font-bold mb-6">Experiencia Laboral</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="mr-2 text-blue-600" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
            </div>
            <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
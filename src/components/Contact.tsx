import React from 'react'
import { Mail, GitHub, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="my-16">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="mb-4">
          ¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Mail className="mr-2 text-blue-600" />
            <a href="mailto:tu.email@ejemplo.com" className="hover:underline">
              tu.email@ejemplo.com
            </a>
          </li>
          <li className="flex items-center">
            <GitHub className="mr-2 text-blue-600" />
            <a href="https://github.com/HabunoGD1809" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          </li>
          <li className="flex items-center">
            <Linkedin className="mr-2 text-blue-600" />
            <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
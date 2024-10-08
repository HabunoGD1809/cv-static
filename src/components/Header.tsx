import React from 'react'
import { User } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <User size={32} className="mr-2" />
          <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">Sobre mí</a></li>
            <li><a href="#experience" className="hover:underline">Experiencia</a></li>
            <li><a href="#projects" className="hover:underline">Proyectos</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
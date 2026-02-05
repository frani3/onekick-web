import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Redes', to: '/redes' },
  { label: 'Horarios', to: '/horarios' },
  { label: 'Contacto', to: '/contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md relative">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/10">
            <img
              src={logo}
              alt="Onekick logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/400">Academia</p>
            <p className="text-xs uppercase tracking-[0.4em] text-white/400">Onekick</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.4em] text-gray-300 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? 'text-onekick-red' : 'hover:text-onekick-red'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://wa.me/569957932469?text=Hola,%20vengo%20de%20la%20web%20y%20quiero%20agendar%20mi%20clase%20de%20prueba."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-onekick-red px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition duration-200 ease-out transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-onekick-red md:inline-flex"
        >
          Clase de Prueba
        </a>

        <div className="relative md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition duration-200 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-onekick-red"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {isOpen && (
            <div
              className="absolute -right-1 top-full z-40 mt-3 w-[calc(100vw-1.5rem)] max-w-sm rounded-3xl border border-white/10 bg-black/90 px-6 py-6 shadow-2xl shadow-black/50 backdrop-blur-lg"
              role="menu"
            >
              <nav className="flex flex-col gap-4 text-[0.95rem] font-semibold uppercase tracking-[0.35em] text-white">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${
                        isActive ? 'text-onekick-red' : 'text-white/80 hover:text-onekick-red'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>

    </header>
  )
}

export default Navbar
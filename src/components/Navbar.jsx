import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Disciplinas', to: '/disciplinas' },
  { label: 'Horarios', to: '/horarios' },
  { label: 'Contacto', to: '/contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
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

        <Link
          to="/clase-de-prueba"
          className="hidden rounded-full bg-onekick-red px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition duration-200 ease-out transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-onekick-red md:inline-flex"
        >
          Clase de Prueba
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition duration-200 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-onekick-red lg:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden pointer-events-auto">
          <div
            className="absolute inset-0 bg-black/85"
            aria-hidden
            onClick={handleLinkClick}
          />

          <div
            className="absolute inset-y-0 right-0 z-40 flex w-full max-w-xs flex-col rounded-l-3xl border border-white/5 bg-[#050505]/95 px-6 py-8 shadow-2xl shadow-black/70"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="text-lg font-semibold text-white" onClick={handleLinkClick}>
                Onekick
              </Link>
              <button
                type="button"
                className="rounded-full border border-white/10 p-2 text-white transition duration-200 hover:border-white/40"
                aria-label="Cerrar menú"
                onClick={handleLinkClick}
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col gap-6 text-lg font-semibold uppercase tracking-[0.35em] text-white">
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

            <Link
              to="/clase-de-prueba"
              onClick={handleLinkClick}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-onekick-red px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition duration-200 hover:scale-105"
            >
              Clase de Prueba
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
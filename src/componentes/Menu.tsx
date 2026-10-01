import { NavLink } from 'react-router-dom'

const enlaces = [
  { ruta: '/inicio', texto: 'Inicio' },
  { ruta: '/sumadora', texto: 'Sumadora' },
  { ruta: '/traductor', texto: 'Traductor' },
  { ruta: '/tabla-multiplicar', texto: 'Tabla de multiplicar' },
  { ruta: '/experiencia', texto: 'Experiencia' },
]

export function Menu() {
  return (
    <nav className="menu" aria-label="Menú principal">
      <ul className="menu__lista">
        {enlaces.map((enlace) => (
          <li key={enlace.ruta}>
            <NavLink
              to={enlace.ruta}
              className={({ isActive }) => (isActive ? 'menu__enlace menu__enlace--activo' : 'menu__enlace')}
            >
              {enlace.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

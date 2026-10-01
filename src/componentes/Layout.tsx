import { Outlet } from 'react-router-dom'

import { Menu } from './Menu'

export function Layout() {
  return (
    <div className="app">
      <header className="app__cabecera">
        <p className="app__titulo">Introducción al Desarrollo Móvil</p>
        <Menu />
      </header>

      <main className="app__contenido">
        <Outlet />
      </main>

      <footer className="app__pie">
        <p>ITLA — Introducción al Desarrollo Móvil</p>
      </footer>
    </div>
  )
}

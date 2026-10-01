import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Layout } from './componentes/Layout'
import { Inicio } from './paginas/Inicio'
import { Sumadora } from './paginas/Sumadora'
import { Traductor } from './paginas/Traductor'
import { TablaMultiplicar } from './paginas/TablaMultiplicar'
import { Experiencia } from './paginas/Experiencia'

function NoEncontrada() {
  return (
    <section className="pagina">
      <div className="tarjeta">
        <h2 className="encabezado__titulo">Página no encontrada</h2>
        <p className="pista">La ruta que buscas no existe. Usa el menú para navegar.</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/inicio" replace />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="sumadora" element={<Sumadora />} />
          <Route path="traductor" element={<Traductor />} />
          <Route path="tabla-multiplicar" element={<TablaMultiplicar />} />
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

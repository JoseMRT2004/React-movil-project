type EncabezadoProps = {
  titulo: string
  descripcion?: string
}

export function Encabezado({ titulo, descripcion }: EncabezadoProps) {
  return (
    <div className="encabezado">
      <h2 className="encabezado__titulo">{titulo}</h2>
      {descripcion ? <p className="encabezado__descripcion">{descripcion}</p> : null}
    </div>
  )
}

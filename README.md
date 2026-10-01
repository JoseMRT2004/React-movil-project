# Proyecto 1 - Introducción al Desarrollo Móvil

Aplicación web de una sola página con cinco secciones y un menú lateral para navegar entre ellas.

## Secciones

| Sección | Qué hace |
| --- | --- |
| **Inicio** | Muestra mis datos personales y una foto de perfil cuadrada de 2x2. |
| **Sumadora** | Suma dos números; el resultado se calcula mientras se escribe. |
| **Traductor** | Convierte un número del 1 al 1000 a su escritura en español. Toda la conversión está hecha en código, sin APIs externas. |
| **Tabla de multiplicar** | Genera la tabla del 1 al 13 para el número que se ingrese. |
| **Experiencia** | Reproduce un video de YouTube con mi experiencia. |

## Tecnologías

React 19, TypeScript, Vite, React Router y Vitest. Es una aplicación web: se ejecuta en el navegador, no en un dispositivo móvil.

## Puesta en marcha

```bash
npm install       # Instalar las dependencias
npm run dev       # Levantar el servidor de desarrollo
npm run build     # Compilar para producción
npm run test      # Ejecutar las pruebas
```

## Dónde editar mis datos

Todo lo personal está en un solo archivo: **`src/datos.ts`**.

- **`perfil`** — `nombre`, `apellido`, `correo` y `foto`. Los tres primeros tienen el valor `PENDIENTE`; reemplázalo con tus datos.
- **`YOUTUBE_ID`** — también está en `PENDIENTE`. Coloca aquí el identificador del video de YouTube, es decir, el texto que aparece entre `watch?v=` y `&` en la URL. Ese video se muestra en la sección *Experiencia*.

La foto de perfil 2x2 es **`public/foto.png`**. Para cambiarla, reemplaza ese archivo por tu imagen o actualiza `perfil.foto` en `src/datos.ts` con la ruta de la nueva.

## Estructura

```
src/
  logica/      Lógica de dominio pura, sin React (normalización, validación, operaciones)
  hooks/       Adaptador entre la lógica y React
  paginas/     Una página por sección
  componentes/ Componentes de presentación compartidos
  datos.ts     Mis datos
```

La separación es intencional: `src/logica/` no importa React, así que se puede probar por separado (`*.test.ts` vive junto a ella). Los hooks son el único puente entre esa lógica y la interfaz.

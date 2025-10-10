 # Project Pokedex

 Analisis para implementación
-----------
Al ser una prueba técnica enfocada en Vue, elegí Vue 3 como base y lo creé con Vite, ya que considero que ofrece un entorno de desarrollo más rápido y óptimo.
Primero realicé un análisis sobre cómo debía funcionar la aplicación: las interacciones del usuario, las funcionalidades principales y las tecnologías necesarias.

Al revisar el diseño, noté que existían diferentes vistas, por lo que al tratarse de una SPA, decidí utilizar Vue Router para gestionarlas.
Para los estilos opté por TailwindCSS, ya que trabajar con clases utilitarias me resulta muy cómodo y eficiente al crear componentes modulares.

Una vez instaladas las herramientas, comencé a desarrollar la lógica y las funcionalidades de la aplicación.
Al identificar elementos repetidos, opté por crear componentes reutilizables, lo que me permitió implementar las funciones de manera más organizada y mantener un código más limpio.

Finalmente, tras completar la lógica, pasé a la fase de estilos. Gracias a Tailwind y a la componentización de la app, la implementación del diseño resultó mucho más ágil y sencilla.

 Características
----------------

- Listado de pokémones con paginación (si aplica en la vista).
- Búsqueda por nombre.
- Modal o detalle rápido de cada pokémon.
- Carga y manejo de estados (loader / items no encontrados).
- Componentes reutilizables (botones, barra de búsqueda, lista, modal, loader).

 Tecnologías
-----------

- Vue 3
- Vite
- Vue Router
- TailwindCSS

 Instalación y ejecución
-----------------------

Clona el repositorio y ejecuta los comandos siguientes para instalar dependencias y levantar el servidor de desarrollo:

```bash
# instalar dependencias
npm install

# levantar servidor en modo desarrollo
npm run dev

# compilar para producción
npm run build

# previsualizar build de producción
npm run preview
```

Estructura principal del proyecto
-------------------------------

Rutas y archivos relevantes:

- `index.html` — HTML de entrada.
- `src/main.js` — Punto de entrada de la aplicación.
- `src/App.vue` — Componente raíz.
- `src/views/HomeView.vue` — Vista principal.
- `src/views/PokemonList.vue` — Vista con la lista de pokémones.
- `src/components/` — Componentes reutilizables (SearchBar, Modal, Loader, etc.).
- `src/services/pokemonService.js` — Lógica para consumir API de pokémones.

Autor
-----

FelipeAlvarad63

Licencia
--------

Este repositorio está disponible bajo la licencia MIT (ajusta si usas otra).

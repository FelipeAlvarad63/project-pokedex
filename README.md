 # Project Pokedex

 Descripción
 ---------------
 App web desarrollada con vite y vue 3, que permite buscar, listar y marcar como favoritos diferentes pokemons, así como visualizar las caracteristicas de cada uno.

 Características
----------------

- Listado de pokémones.
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

Este repositorio está disponible bajo la licencia MIT.

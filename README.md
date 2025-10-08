 # Project Pokedex

 Description
-----------

 Project Pokedex is a web application built with Vue 3 and Vite that displays a list of Pokémon. It allows searching and exploring entries with a responsive UI and reusable components. The project is intended as a frontend exercise to practice Vue 3, Vue Router and styling with TailwindCSS.

 Features
--------

- Pokémon listing (with pagination where applicable).
- Search by name.
- Quick detail modal for each Pokémon.
- Loading and empty states (loader / items not found).
- Reusable components (buttons, search bar, list, modal, loader).

 Technologies
------------

- Vue 3
- Vite
- Vue Router
- TailwindCSS

 Installation & Running
----------------------

Clone the repository and run the following commands to install dependencies and start the development server:

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

Project structure (key files)
-----------------------------

- `index.html` — App entry HTML.
- `src/main.js` — Application entry point.
- `src/App.vue` — Root component.
- `src/views/HomeView.vue` — Main view.
- `src/views/PokemonList.vue` — View with the Pokémon list.
- `src/components/` — Reusable components (SearchBar, Modal, Loader, etc.).
- `src/services/pokemonService.js` — Service to fetch Pokémon data.

Author
------

FelipeAlvarad63

License
-------

This repository is available under the MIT License (adjust if you use a different one).


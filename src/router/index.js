import { createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonList from '../views/PokemonList.vue'

const router = createRouter({
  history: createWebHashHistory (),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
        path: '/pokemon-list',
        name: 'pokemon lista',
        component: PokemonList
    }
  ],
})

export default router

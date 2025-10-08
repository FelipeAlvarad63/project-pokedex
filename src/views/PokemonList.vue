<template>
    <header v-if="!loading" class="sticky top-0">
        <SearchBar @update:search="onSearch" class="max-w-xl mx-auto px-6 md:px-0 py-6" />
    </header>

    <main class="pokemon-list-page">
        <section v-if="loading" class="flex items-center justify-center h-screen">
            <Loader />
        </section>

        <section v-else class="max-w-xl min-h-[80vh] m-auto px-6 md:px-0">

            <div v-if="filteredPokemons.length" class="flex flex-col gap-[10px] mb-4">
                <ItemList v-for="pokemon in filteredPokemons" :key="pokemon.name"
                    :pokemon="pokemon" @toggle-Favorite="toggleFavorite(pokemon)"
                    @open-modal="openModal(pokemon.name)" />
            </div>

            <ItemsNotFound v-else />

            <Modal :show="modalOpen" :pokemon-selected="pokemonSelected" @close="modalOpen = false" />
        </section>
    </main>

    <footer class="sticky bottom-0 bg-white w-full mt-auto mb-0 px-6 md:px-0 py-4">
        <div class="flex gap-4 max-w-xl m-auto">
            <BtnIconComponent 
                class="w-full"
                :class="!showFavorites ? '' : 'disabled'" 
                :src-icon="'/src/assets/icon_list.svg'"
                :alt-icon="'icon list'"
                :text-btn="'All'" 
                @click="showFavorites = false" />
            <BtnIconComponent 
                class="w-full text-red-10"
                :class="!showFavorites ? 'disabled' : ''"
                :src-icon="'/src/assets/icon_star_white.svg'"
                :alt-icon="'icon star'"
                textBtn="Favorites" 
                @click="showFavorites = true" />
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { pokeApi } from '../services/pokemonService';
import Loader from '../components/Loader.vue'
import SearchBar from '../components/SearchBar.vue';
import ItemList from '../components/ItemList.vue';
import Modal from '../components/Modal.vue';
import BtnIconComponent from '../components/BtnIconComponent.vue';
import ItemsNotFound from '../components/ItemsNotFound.vue';

const loading = ref(true)
const pokemons = ref([])
const searchTerm = ref('')
const modalOpen = ref(false)
const pokemonSelected = ref(null)
const showFavorites = ref(false)

const onSearch = (value) => {
    searchTerm.value = value
}

const toggleFavorite = (pokemon) => {
    pokemon.favorite = !pokemon.favorite
}

const openModal = (pokemon) => {
    getPokemon(pokemon)
}

const filteredPokemons = computed(() => {
    let filtered = pokemons.value

    if (showFavorites.value) {
        filtered = filtered.filter(pok => pok.favorite)
    }

    if (searchTerm.value) {
        filtered = filtered.filter(pok =>
            pok.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
    }

    return filtered
})

const getPokemon = async (poke) => {
    try {
        const res = await fetch(`${pokeApi}/${poke}`)
        if (!res.ok) throw new Error('Error get data')
        const resPokemon = await res.json()
        pokemonSelected.value = resPokemon
    } catch (error) {
        console.error(error)
    } finally {
        modalOpen.value = true
    }
}

const fetchPokemons = async () => {
    try {
        const res = await fetch(`${pokeApi}`)
        if (!res.ok) throw new Error('Error get data')
        const resPokemons = await res.json()

        pokemons.value = resPokemons.results.map(pok => ({
            name: pok.name,
            favorite: false,
            url: pok.url
        }))

    } catch (error) {
        console.error(error, 'Pokemons was not found')
    } finally {
        if (pokemons) loading.value = false
    }
}

onMounted(() => {
    fetchPokemons()
})
</script>
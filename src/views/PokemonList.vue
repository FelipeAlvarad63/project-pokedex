<template>
    <Loader v-if="loading" />

    <main v-else class="max-w-xl w-full flex flex-col items-center justify-center">
        <div class="">
            <SearchBar @update:search="onSearch" />
        </div>

        <h2 class="text-lg font-bold mt-4 mb-4">Pokemon List</h2>

        <div>
            <ItemList 
                v-if="filteredPokemons.length" 
                v-for="pokemon in filteredPokemons" 
                :key="pokemon.name"
                :pokemon="pokemon" 
                @toggle-Favorite="toggleFavorite(pokemon)"
                @open-modal="openModal(pokemon.name)" />

            <ItemsNotFound v-else />
        </div>

        <Modal :show="modalOpen" :pokemon-selected="pokemonSelected" @close="modalOpen = false" />

        <div class="flex gap-4 mt-8 mb-8">
            <BtnComponent class="" text-btn="All" @click="showFavorites = false" />
            <BtnComponent class="text-red-10" textBtn="Favorites" @click="showFavorites = true" />
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { pokeApi } from '../services/pokemonService';
import Loader from '../components/Loader.vue'
import SearchBar from '../components/SearchBar.vue';
import ItemList from '../components/ItemList.vue';
import Modal from '../components/Modal.vue';
import BtnComponent from '../components/BtnComponent.vue';
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
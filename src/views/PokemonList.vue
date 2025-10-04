
<template>
    <Loader v-if="loading"/>

    <main v-else class="home-page max-w-xl flex flex-col items-center justify-center">
        <h2>Pokemon List</h2>

        <p v-for="pokemon in pokemons" :key="pokemon.id">
            {{pokemon.name}}
        </p>
    </main>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { pokeApi } from '../services/pokemonService';
    import Loader from '../components/Loader.vue'

    const loading = ref(true)
    const pokemons = ref([])

    const fetchPokemons = async () => {
        try {
            const res = await fetch(`${pokeApi}?limit=5000&offset=0`)
            if (!res.ok) throw new Error('Error get data')
            const resPokemons = await res.json()
            pokemons.value = resPokemons.results
        } catch (error) {
            console.error(error, 'Pokemons was not found')
        } finally {
            // if (pokemons) loading.value = false
        }
    }

    onMounted(() => {
        fetchPokemons()
    })
</script>
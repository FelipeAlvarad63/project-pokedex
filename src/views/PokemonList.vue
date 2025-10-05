<template>
    <Loader v-if="loading"/>

    <main v-else class="home-page max-w-xl w-full flex flex-col items-center justify-center">
        <SearchBar @update:search="onSearch"/>

        <h2 class="text-lg font-bold mt-4 mb-4">Pokemon List</h2>

        <item-list
            v-for="pokemon in filteredPokemons"
            :key="pokemon.name"
            :pokemon="pokemon"
        />
    </main>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { pokeApi } from '../services/pokemonService';
    import Loader from '../components/Loader.vue'
    import SearchBar from '../components/SearchBar.vue';
    import ItemList from '../components/ItemList.vue';

    const loading = ref(true)
    const pokemons = ref([])
    const searchTerm = ref('')

    const onSearch = (value) => {
        searchTerm.value = value
    }

    const filteredPokemons = computed(() => {
        if (!searchTerm.value) {
            return pokemons.value
        }

        return pokemons.value.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
    })

    const fetchPokemons = async () => {
        try {
            const res = await fetch(`${pokeApi}`)
            if (!res.ok) throw new Error('Error get data')
            const resPokemons = await res.json()
            pokemons.value = resPokemons.results
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
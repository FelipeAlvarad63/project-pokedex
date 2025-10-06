
<template>
    <div class="flex justify-between items-center w-full p-3 border-gray-200 hover:bg-gray-100">
        <p>{{ pokemon.name }}</p>

        <button @click.stop="toggleFavorite">
            <img v-if="!pokemon.favorite" src="../assets/img_star_disabled.svg" alt="imagen de estrella para favoritos" />
            <img v-else src="../assets/img_star_active.svg" alt="imagen de estrella para favoritos" />
        </button>
    </div>
</template>

<script setup>
defineProps({
    pokemon: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['toggle-favorite'])

const toggleFavorite = () => emit('toggle-favorite')
</script>
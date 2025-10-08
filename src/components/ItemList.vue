
<template>
    <div @click="openModal" class="bg-white flex justify-between items-center w-full p-3 border-gray-200 rounded-md">
        <p class="text-[22px] text-dark-10 capitalize font-medium">{{ pokemon.name }}</p>

        <button @click.stop="toggleFavorite">
            <img v-if="!pokemon.favorite" src="../assets/img_star_disabled.svg" alt="imagen de estrella para favoritos" />
            <img v-else src="../assets/img_star_active.svg" alt="imagen de estrella para favoritos" />
        </button>
    </div>
</template>

<script setup>
import { camelize } from 'vue';

defineProps({
    pokemon: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['toggle-favorite', 'open-modal'])

const toggleFavorite = () => emit('toggle-favorite')
const openModal = () => emit('open-modal')
</script>
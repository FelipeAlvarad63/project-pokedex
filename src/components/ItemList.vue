<script setup>
defineProps({
    pokemon: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="flex justify-between items-center w-full p-3 border-gray-200 hover:bg-gray-100">
        <p>{{ pokemon.name }}</p>

        <button>
            <img src="../assets/img_star_disabled.svg" alt="imagen de estrella para favoritos" />
        </button>
    </div>
</template>
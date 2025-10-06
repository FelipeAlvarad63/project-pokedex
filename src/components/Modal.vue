<template>
    <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div class="bg-white p-4 rounded-lg w-80">
            <div class="mt-4">
                <button @click="$emit('close')" class="text-blue-500 font-medium">Cerrar</button>
            </div>
            <div class="">
                <img :src="pokemonSelected.sprites.front_default" alt="">
                <h3 class="text-lg font-semibold mb-2">Name: {{ pokemonSelected.name }}</h3>
                <p>Weight: {{ pokemonSelected.weight }}</p>
                <p>Height: {{ pokemonSelected.height }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    show: Boolean,
    pokemonSelected: {
        type: Object,
        required: true
    }
})

defineEmits(['close'])
</script>
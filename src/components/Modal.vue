<template>
    <div v-if="show" class="fixed inset-0 z-3 bg-black/50 flex items-center justify-center">
        <div class="modal-content bg-white overflow-hidden rounded-lg w-full max-w-xs md:max-w-xl">
            <div class="modal-header relative bg-[url('src/assets/img_bg_pokemons.jpg')] bg-cover bg-center p-4">
                <button @click="$emit('close')" class="absolute right-4 text-blue-500 cursor-pointer font-medium">
                    <img src="../assets/icon_close.svg" alt="icon close" class="w-[26] h-[26] hover:opacity-70">
                </button>
                <figure class="max-w-[180px] max-h-[180px] m-auto">
                    <img :src="pokemonSelected.sprites.other['official-artwork'].front_default" class="w-full h-full object-contain" alt="">
                </figure>
            </div>

            <div class="modal-body p-6">
                <h3 class="text-gray-30 text-lg font-bold capitalize">Name: <span class="font-medium">{{ pokemonSelected.name }}</span></h3>
                <span class="divider"></span>
                <p class="text-gray-30 text-lg font-bold">Weight: <span class="font-medium">{{ pokemonSelected.weight }}</span></p>
                <span class="divider"></span>
                <p class="text-gray-30 text-lg font-bold">Height: <span class="font-medium">{{ pokemonSelected.height }}</span></p>
                <span class="divider"></span>
                <p class="text-gray-30 text-lg font-bold">Types: <span class="font-medium capitalize">{{ pokemonSelected.types.map(t => t.type.name).join(', ') }}</span></p>
            </div>
            <div class="modal-footer flex px-6 pb-6">
                <btn-icon-component class="" text-btn="Share"/>
                <btn-icon-component class="" :src-icon="pokemonSelected.favorite ? iconStarActive : iconStarDisabled"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import iconStarActive from '../assets/img_star_active.svg';
import iconStarDisabled from '../assets/img_star_disabled.svg';
import BtnIconComponent from './BtnIconComponent.vue';

defineProps({
    show: Boolean,
    pokemonSelected: {
        type: Object,
        required: true
    }
})

defineEmits(['close'])
</script>
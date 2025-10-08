<template>
    <div>
        <label for="search" class="flex items-center gap-[10px] bg-white border border-gray-300 rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-[10px] w-full">
            <img src="../assets/icon_search.svg" class="w-[18px]" alt="">
            <input class="w-full text-dark-10 outline-none placeholder:text-gray-20"
                type="text" v-model="searchQuery" id="search" @input="handleSearch" placeholder="Search" />
        </label>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');

const emit = defineEmits(['update:search']);

const handleSearch = () => {
    emit('update:search', searchQuery.value);
};

</script>
<template>
    <div>
        <input
            type="text"
            v-model="searchQuery"
            @input="handleSearch"
            placeholder="Search"
        />
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
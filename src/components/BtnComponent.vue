<template>
    <button class="btn-primary cursor-pointer">
        {{ textBtn }}
    </button>
</template>

<script setup>

defineProps({
    textBtn: {
        type: String,
        required: true
    }
})
</script>
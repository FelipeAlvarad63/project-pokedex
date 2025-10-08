<template>
    <button class="btn-primary cursor-pointer flex items-center justify-center gap-2">
        <img :src="srcIcon" :alt="altIcon">
        {{ textBtn }}
    </button>
</template>

<script setup>

defineProps({
    textBtn: {
        type: String,
        required: true
    },

    srcIcon: {
        type: String,
        required: false
    },

    altIcon: {
        type: String,
        required: false
    }
})
</script>
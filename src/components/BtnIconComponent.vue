<template>
    <button class="btn-primary cursor-pointer flex items-center justify-center gap-2">
        <img v-if="srcIcon" :src="srcIcon" :alt="altIcon">
        <p v-if="textBtn">{{ textBtn }}</p>
    </button>
</template>

<script setup>

defineProps({
    textBtn: {
        type: String,
        required: false
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
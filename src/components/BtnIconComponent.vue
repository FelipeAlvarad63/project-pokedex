<template>
    <button :class="[baseButton, buttonType, customClass]">
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    baseButton: {
        type: String,
        default: 'px-4 py-2 rounded-[60px] transition-colors duration-200'
    },
    type: {
        type: String,
        default: 'PRIMARY'
    },
    customClass: {
        type: [String, Array],
        default: ''
    },
})

const buttonType = computed(() => {
  switch (props.type) {
    case 'PRIMARY':
      return 'bg-red-10 text-white-10 hover:bg-red-20 disabled:bg-gray-20'
    case 'ICON':
      return 'p-0! text-gray-70'
    case 'OUTLINE':
      return 'border border-gray-400 text-gray-700 hover:bg-gray-100'
    default:
      return ''
  }
})

</script>
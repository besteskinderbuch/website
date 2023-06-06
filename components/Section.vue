<script setup>
defineProps({
    color: {
        type: String,
        default: 'bg-white'
    }
})
</script>
<template>
    <div :class=[color] class="py-24 sm:py-32">
        <slot></slot>
    </div>
</template>

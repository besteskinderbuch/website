<template>
    <div class="fixed bottom-0 h-11 bg-gray-400 w-full">
        Volume | Play - Pause - Stop | Fontsize <button @click="increaseFontsize">+</button> <button
            @click="decreaseFontsize">-</button>
    </div>
</template>
<script setup>

const fontsizeChange = ref(1)

const emit = defineEmits(['changeFontsize', 'decreaseFontsize'])

function decreaseFontsize() {
    emit("changeFontsize", -fontsizeChange.value)
}

function increaseFontsize() {
    emit("changeFontsize", fontsizeChange.value)
}

</script>
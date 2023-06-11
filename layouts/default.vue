<script setup>

const showNavbar = ref(true)
const lastScrollPosition = ref(0)

onMounted(() => {
    useEventListener(document, 'scroll', () => {
        const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
        // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
            return
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
            return
        }
        // Here we determine whether we need to show or hide the navbar
        showNavbar.value = currentScrollPosition < lastScrollPosition.value
        // Set the current scroll position as the last scroll position
        lastScrollPosition.value = currentScrollPosition
    })
})
</script>
<template>
    <Navbar :hidden="!showNavbar"/>
    <NuxtPage class="mt-16"/>
    <LazyFooter />s
</template>
<style>
:root {
    @apply bg-backgroundColor1
}
</style>

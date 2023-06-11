<script setup>

const showNavbar = ref(true)
const lastScrollPosition = ref(0)

onMounted(() => {
    useEventListener(document, 'scroll', () => {
        const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
            return
        }
        if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
            return
        }
        showNavbar.value = currentScrollPosition < lastScrollPosition.value
        lastScrollPosition.value = currentScrollPosition
    })
})
</script>
<template>
    <Navbar :hidden="!showNavbar"/>
    <NuxtPage class="mt-16"/>
    <LazyFooter />
</template>
<style>
:root {
    @apply bg-backgroundColor1
}
</style>

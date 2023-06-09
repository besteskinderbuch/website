<script setup>
defineProps({
    breadcrumb: {
        type: Array,
        required: true,
    },
})

</script>
<template>
    <main class="flex-1 bg-white">
        <Container class="mt-8">
            <Breadcrumb v-if="breadcrumb" :data="breadcrumb"></Breadcrumb>
        </Container>
        <slot></slot>
        <LazyConvinced />
    </main>
</template>

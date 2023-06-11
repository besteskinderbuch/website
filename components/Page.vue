<script setup>
defineProps({
    breadcrumb: {
        type: Array,
        required: true,
    },
    showConvinced: {
        type: Boolean,
        default: true,
    },
})

</script>
<template>
    <main class="flex-1 bg-white">
        <Container class="mt-8">
            <Breadcrumb v-if="breadcrumb" :data="breadcrumb"></Breadcrumb>
        </Container>
        <slot></slot>
        <LazyConvinced v-if="showConvinced"/>
    </main>
</template>

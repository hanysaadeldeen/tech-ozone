<template>
    <div class="border border-[rgba(255, 255, 255, 0.04)] rounded-3xl  boxShadow">
        <IconContainer :background="background">
            <img :src="img" :alt="title" width="24" height="24" />
        </IconContainer>
        <h1 class="text-2xl font-medium text-white mb-2">{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    description: string
    img: string
    background: string
}>()
</script>

<style scoped></style>
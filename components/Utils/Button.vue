<template>
    <button class="block rounded-full text-base font-medium py-2 px-12 text-white"
        :style="{ 'backgroundColor': background }">
        {{ title }}
    </button>
</template>

<script setup lang="ts">

defineProps<{
    title: string,
    background?: string
    link?: string
}>()

</script>

<style scoped></style>
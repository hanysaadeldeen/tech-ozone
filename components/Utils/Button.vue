<template>
    <!-- <nuxt-link :to="link"> -->
    <button class="block rounded-full text-base font-medium py-2 px-12 text-white mx-auto"
        :style="{ 'backgroundColor': background }">
        {{ title }}
    </button>
    <!-- </nuxt-link> -->
</template>

<script setup lang="ts">

defineProps<{
    title: string,
    background?: string
    link?: string
}>()

</script>

<style scoped></style>
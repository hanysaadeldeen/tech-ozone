<template>
    <nuxt-link :to="link">
        <button
            class="  rounded-full text-base font-medium py-2 px-12 text-white mx-auto flex items-center justify-center gap-3"
            :class="reverse ? 'flex-row-reverse' : ''" :style="{ 'backgroundColor': background }">
            <slot />
            {{ title }}
        </button>
    </nuxt-link>
</template>

<script setup lang="ts">

defineProps<{
    title: string,
    background?: string
    link?: string
    reverse?: boolean
}>()

</script>

<style scoped></style>
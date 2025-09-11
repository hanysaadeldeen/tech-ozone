<template>
    <div
        class=" WhyUsCard  glassyW boxShadow border border-[#FFFFFF0A] rounded-3xl py-6 px-4 md:py-10  md:px-8 flex flex-col gap-4 md:gap-6 max-sm:w-full md:w-1/2 max-w-[376px] max-md:mx-auto">
        <div class="boxShadow numberCard p-3 w-fit mx-auto  rounded-2xl  flex items-center justify-center"
            :style="{ background: background }">
            <slot />
        </div>
        <div>
            <h1 class="text-white text-xl md:text-2xl font-medium text-center mb-1 md:mb-2">{{ title }}</h1>
            <p class="text-base md:text-lg font-normal text-[#B2BFE2] text-center">{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    description: string
    background: string
}>()
</script>

<style scoped></style>
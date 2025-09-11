<template>
    <div class="boxShadow flex flex-col  items-center justify-start rounded-3xl bg-white ">
        <div class="bg-BG2 py-6 rounded-3xl w-full  flex justify-center items-center  relative">
            <img :src="img" :alt="imgAlt" width="80" height="80"
                class="w-full h-full max-w-[80px] max-h-[80px] object-contain">
        </div>
        <div class="p-4 md:py-5 lg:py-7  lg:px-6">
            <h1 v-if="title" class="text-TextD text-base lg:text-lg font-medium mb-1 md:mb-2 text-center">{{ title }}
            </h1>
            <h1 v-if="description" class="text-TextMD text-lg font-normal text-center">{{ description }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title?: string
    description?: string
    img: string,
    imgAlt: string
}>()

</script>

<style scoped></style>
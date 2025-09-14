<template>
    <div class="gradientBg py-[200px] flex justify-center items-center relative">
        <div class="gradientBg2 absolute top-0 left-0 w-full h-full "></div>
        <div class="max-w-[1000px] mx-auto  relative  max-md:px-6 ">
            <h1 class="text-white text-3xl md:text-5xl font-semibold text-center md:leading-[72px] mb-2">{{ title }}
            </h1>
            <p class="text-TextL text-lg md:text-xl font-normal max-w-[584px] mx-auto text-center">{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">


defineProps<{
    title: string,
    description: string
}>()
</script>

<style scoped>
.gradientBg2 {
    background-image: url("../../assets/img/Utils/GredientHeroPattern.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
</style>
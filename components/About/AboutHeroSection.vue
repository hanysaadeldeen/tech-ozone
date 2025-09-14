<template>
    <div
        class="AboutHeroSection relative  md:min-h-[884px]  h-[calc(100vh-81px)] md:h-[calc(100vh-97px)] lg:h-[calc(100vh-128px)] flex justify-center items-center">
        <div class="absolute top-0 right-0 h-3/4  max-md:hidden">
            <img src="~/assets/img/Utils/sectorR.svg" alt="sectorR.svg" loading="lazy" width="345" height="631"
                class="w-full h-full">
        </div>
        <div class="absolute top-0 left-0  max-md:hidden">
            <img src="~/assets/img/Utils/sectorT.svg" alt="sectorT.svg" loading="lazy" width="120" height="120">
        </div>
        <div class="absolute top-1/2 -translate-y-1/2 left-0 max-w-[360px] max-h-[360px]   max-md:hidden">
            <img src="~/assets/img/Utils/sectorC.svg" alt="sectorC.svg" loading="lazy" width="360" height="360"
                class="w-full max-w-full max-h-full h-full">
        </div>
        <div class="absolute bottom-0 left-0  max-md:hidden">
            <img src="~/assets/img/Utils/sectorB.svg" alt="sectorB.svg" loading="lazy" width="120" height="120">
        </div>
        <div class="max-w-[1000px] mx-auto w-full relative">
            <div class="flex justify-center items-center flex-col">
                <h1 class="text-3xl md:text-5xl   lg:!leading-[72px] text-TextD font-semibold text-center mb-2">
                    ريادة سعودية في التعقيم المتكامل
                </h1>
                <p class="mx-auto max-w-[584px] text-lg md:text-xl text-TextMD font-normal text-center mb-8 md:mb-12">
                    منذ عام 2011 نقدم حلول تطهير آمنة ومعتمدة بتقنية الأوزون، برؤية وطنية وخبرة متخصصة تخدم القطاعات
                    الحيوية في المملكة.
                </p>
                <div class="flex justify-center items-center gap-10 max-md:flex-col max-md:gap-6">
                    <Button title=" تعرف على تقنيتنا" background="#ED2024" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style scoped></style>
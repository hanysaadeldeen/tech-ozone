<template>
    <div
        class="gradientBg CertificatesHeroSection relative  md:min-h-[884px]  h-[calc(100vh-81px)] md:h-[calc(100vh-97px)] lg:h-[calc(100vh-128px)] flex justify-center items-center">
        <div class="absolute top-0 right-0 h-full w-full  max-md:hidden">
            <img src="~/assets/img/Utils/CertificatesHeroSection.svg" alt="CertificatesHeroSection.svg" loading="lazy"
                class="w-full h-full">
        </div>

        <div class="max-w-[1000px] mx-auto w-full relative">
            <div class="flex justify-center items-center flex-col">
                <h1 class="text-3xl md:text-5xl   lg:!leading-[72px] text-white font-semibold text-center mb-2">
                    درع الثقة والاعتمادات الدولية
                </h1>
                <p class="mx-auto max-w-[584px] text-lg md:text-xl text-TextL font-normal text-center mb-10 md:mb-20">
                    خبرة موثقة وسجل حافل في تقديم حلول الأوزون المتطورة، مدعومة بشهادات عالمية، شراكات حكومية، وتحالفات
                    علمية قوية.
                </p>
                <div class="flex justify-center items-center gap-10 max-md:flex-col max-md:gap-6 ">
                </div>
            </div>

            <div class="flex justify-center items-center max-md:flex-wrap max-md:justify-center gap-6 md:gap-10 ">

                <div v-for="number in Numbers"
                    class="glassyW boxShadow  border border-[#FFFFFF0A]  rounded-3xl p-8 flex flex-col items-center justify-center gap-2 w-[168px]">
                    <h1 class="text-white text-3xl font-semibold text-center">{{ number.number }}</h1>
                    <p class="text-TextL text-sm font-normal text-center"> {{ number.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


const Numbers = [
    {
        number: "6+",
        title: "شهادة دولية"
    },
    {
        number: "9+",
        title: "شراكات حكومية"
    },
    {
        number: "100+",
        title: "عميل موثوق"
    },
    {
        number: '4+',
        title: "تحالفات علمية"
    },
]



</script>

<style scoped></style>
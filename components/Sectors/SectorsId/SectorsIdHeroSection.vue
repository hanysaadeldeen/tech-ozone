<template>
    <div class="py-[240px] flex justify-center items-center relative">
        <div class="gradientBg2 absolute top-0 left-0 w-full h-full "></div>
        <div class="absolute top-0 left-0 w-full h-full  bg-black opacity-60"></div>
        <div class="max-w-[1000px] mx-auto  relative  max-md:px-6 z-10 ">
            <div class="mb-6 md:mb-10 flex justify-center items-center gap-4 text-TextL font-normal">
                <nuxt-link to="/">
                    <p
                        class=" text-sm md:text-base lg:text-lg  transition-all hover:text-white duration-300 ease-in-out">
                        الرئيسية</p>
                </nuxt-link>
                <i class="fa-solid fa-chevron-left"></i>
                <nuxt-link to="/sectors">
                    <p
                        class="text-sm md:text-base    lg:text-lg  transition-all hover:text-white duration-300 ease-in-out">
                        القطاعات</p>
                </nuxt-link>
                <i class="fa-solid fa-chevron-left"></i>
                <p class="text-white text-sm md:text-base lg:text-lg ">القطاع الصحي</p>
            </div>
            <h1 class="text-white text-3xl md:text-5xl font-semibold text-center md:leading-[72px] mb-2">

                حلول تعقيم آمنة للمنشآت الصحية
            </h1>
            <p class="text-TextL text-lg md:text-xl font-normal max-w-[584px] mx-auto text-center">

                بتقنية الأوزون المتطورة، نوفر للمنشآت الطبية حلولًا فعالة لمكافحة الفيروسات والبكتيريا، مع ضمان بيئة
                صحية آمنة للمرضى والكادر الطبي.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

const route = useRoute()
console.log(route.params.id);




</script>

<style scoped>
.gradientBg2 {
    background-image: url("../../../assets/img/Projects/hospitalProject.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
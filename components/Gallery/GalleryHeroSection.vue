<template>
  <div
    class="GalleryHeroSection py-[240px] flex justify-center items-center relative"
  >
    <div class="gradientBg2 absolute top-0 left-0 w-full h-full"></div>
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    <div class="max-w-[1000px] mx-auto relative max-md:px-6 z-10">
      <h1
        class="text-white text-3xl md:text-5xl font-semibold text-center md:leading-[72px] mb-2"
      >
        الشركة السعودية للأوزون - للمشاريع والحلول البيئية والصحية
      </h1>
      <p
        class="text-TextL text-lg md:text-xl font-normal max-w-[584px] mx-auto text-center"
      >
        استعرض أبرز مشاريع الشركة السعودية للأوزون في مختلف القطاعات، مع حلول
        تعقيم متطورة وتقنيات أوزون موثوقة تعكس خبرتنا والتزامنا بالمعايير
        العالمية.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.gradientBg2 {
  background-image: url("../../assets/img/Projects/GalleryHospital.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
    <main class="gallery ">
        <GalleryHeroSection />
        <div class="max-w-[1208px] mx-auto">
            <div class="flex mt-[60px]  md:mt-[120px] pb-8 md:pb-12 border-b  border-[#E5E9F5]">
                <Swiper slidesPerView="auto" :spaceBetween="10" :modules="modules" class="mySwiper">

                    <SwiperSlide :class="FaqsFilter === 'photography' && 'active'" @click="FaqsFilter = 'photography'">
                        كل القطاعات
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'vidoeFilter' && 'active'" @click="FaqsFilter = 'vidoeFilter'">
                        الحج والعمرة
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'branding' && 'active'" @click="FaqsFilter = 'branding'">
                        الصحة
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'webDesign' && 'active'" @click="FaqsFilter = 'webDesign'">
                        الدواجن
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'socialMedia' && 'active'" @click="FaqsFilter = 'socialMedia'">
                        الزراعة
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'support' && 'active'" @click="FaqsFilter = 'support'">
                        التمور
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'support' && 'active'" @click="FaqsFilter = 'support'">
                        الفنادق والسياحة
                    </SwiperSlide>
                </Swiper>
            </div>
            <GalleryProjects />
        </div>

    </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];
const FaqsFilter = ref("photography");
</script>

<style scoped>
.swiper-slide {
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    color: #4A5568;
    background-color: white;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 50px;
    transition: all 0.3s ease;
    white-space: nowrap;
    width: fit-content;
}

@media (max-width: 768px) {
    .swiper-slide {
        padding: 8px 16px;
        font-size: 12px;
    }
}

.swiper-slide.active {
    background-color: #ED2024;
    color: white;
}

.swiper-slide:hover {
    background-color: #ED2024;
    color: white;
}
</style>
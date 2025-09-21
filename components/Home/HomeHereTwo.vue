<template>
    <div class="carousel relative">

        <div class="swiper tinyflow-slider relative bg-green-400" :data-speed="1000" :data-autoplay-delay="8000">
            <div
                class=" flex justify-center items-center gap-6 absolute bottom-[15%] right-0   w-full text-center z-10 ">
                <button type="button" aria-label="Prev" ref="prevEl"
                    class="tinyflow-slider__arrow2  glassyW boxShadow flex justify-center items-center size-10 rounded-full">
                    <i class="fa-solid fa-chevron-right text-white"></i>
                </button>
                <button type="button" aria-label="Next"
                    class="tinyflow-slider__arrow2 size-10 rounded-full glassyW boxShadow flex justify-center items-center "
                    ref="nextEl">
                    <i class="fa-solid fa-chevron-left text-white"></i>
                </button>

            </div>

            <!-- Swiper -->
            <Swiper :modules="modules" :slides-per-view="1" effect="fade" :loop="true" :autoplay="{
                delay: autoplayDelay,
                disableOnInteraction: false,
            }" :keyboard="{
                enabled: true,
                onlyInViewport: true,
            }" :navigation="{
                nextEl: nextEl,
                prevEl: prevEl,
            }" :speed="speed">
                <SwiperSlide v-for="(slide, i) in slides" :key="'thumb-' + i">
                    <div class="tinyflow-slide">
                        <img class="tinyflow-slide__background__element brightness-50" :src="slide.img"
                            :alt="slide.title" draggable="false" />
                        <div class="tinyflow-slide__card  max-w-[1208px] mx-auto max-2xl:px-6  z-20 relative">
                            <div class="container ">
                                <div class="max-w-[584px]">
                                    <h1
                                        class="text-3xl md:text-5xl   lg:!leading-[72px] font-semibold text-white text-center !mb-4">
                                        {{ slide.title }}
                                    </h1>
                                    <p class=" text-xl md:text-2xl lg:text-3xl font-normal text-center text-[#C3CAD3]">
                                        {{ slide.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                =
            </Swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Keyboard, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const modules = [Navigation, Autoplay, Keyboard, EffectFade];

import apple from "../../assets/img/Projects/apple.webp"
import checken from "../../assets/img/Projects/checken.webp"
import desert from "../../assets/img/Projects/desert.webp"
import mosq from "../../assets/img/Projects/mosq.webp"
import hospitalProject from "../../assets/img/Projects/hospitalProject.webp"
import tamr from "../../assets/img/Projects/tamr.webp"

const slides = [
    {
        img: apple,
        title: "قطاع الزراعة",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: checken,
        title: "قطاع الدواجن",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: desert,
        title: "قطاع الفنادق والسياحة ",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: mosq,
        title: "قطاع الحج والعمرة",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: hospitalProject,
        title: "القطاع الصحي",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: tamr,
        title: "قطاع التمور",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
];


// Refs for navigation
const nextEl = ref<HTMLElement | null>(null);
const prevEl = ref<HTMLElement | null>(null);

// Dynamic props (from dataset or fixed values)
const speed = 1000;
const autoplayDelay = 3000;

</script>
<style scoped>
:root {
    --color-primary: #e0fee6;
    --color-navigation-bg-rgb: 69, 71, 67;
    --easing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.carousel {
    height: 100vh;
    margin-top: -112px;
    width: 100vw;
    overflow: hidden;
    position: relative;
}



.tinyflow-slide {
    min-height: 100vh;
    min-height: 100svh;
    position: relative;
    isolation: isolate;
    display: -ms-grid;
    display: grid;
    -ms-flex-line-pack: center;
    align-content: center;
}

.tinyflow-slide__background__element {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
}


.tinyflow-slide__background__element {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-transition: -webkit-transform calc(var(--data-speed, 300) * 1ms) linear calc(var(--data-speed, 300) * 1ms);
    transition: -webkit-transform calc(var(--data-speed, 300) * 1ms) linear calc(var(--data-speed, 300) * 1ms);
    -o-transition: transform calc(var(--data-speed, 300) * 1ms) linear calc(var(--data-speed, 300) * 1ms);
    transition: transform calc(var(--data-speed, 300) * 1ms) linear calc(var(--data-speed, 300) * 1ms);
    transition: transform calc(var(--data-speed, 300) * 1ms) linear calc(var(--data-speed, 300) * 1ms), -webkit-transform calc(var(--data-speed, 300) * 1ms) linear calc(var(--data-speed, 300) * 1ms);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
}

.swiper-slide-active .tinyflow-slide__background__element {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition-delay: 0ms;
    -o-transition-delay: 0ms;
    transition-delay: 0ms;
}

/* 
.tinyflow-slide__card {
    color: var(--color-primary);
    padding-top: 5rem;
    padding-bottom: 5rem;
} */

.tinyflow-slide__content {
    position: relative;
    -webkit-transition: all calc((var(--data-speed, 300) / 2) * 1ms) var(--easing-function);
    -o-transition: all calc((var(--data-speed, 300) / 2) * 1ms) var(--easing-function);
    transition: all calc((var(--data-speed, 300) / 2) * 1ms) var(--easing-function);
}




.tinyflow-slider__arrow2:active {
    background-color: rgba(255, 255, 255, 0.90);
}

@media (hover:hover) {

    .tinyflow-slider__arrow2:hover,
    .tinyflow-slider__arrow2:focus-visible {
        background-color: rgba(255, 255, 255, 0.60);
    }
}
</style>
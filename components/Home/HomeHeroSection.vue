<template>
  <div
    class="carousel relative overflow-hidden h-[calc(100dvh-105px)] md:h-[calc(100dvh-117px)]"
  >
    <div
      class="swiper tinyflow-slider relative bg-[#F5F7FA] max-h-full"
      :data-autoplay-delay="9000"
    >
      <div
        :dir="locale === 'ar' ? 'rtl' : 'ltr'"
        class="flex justify-center items-center gap-6 absolute bottom-[10%] right-0 w-full text-center z-10"
      >
        <button
          type="button"
          aria-label="Prev"
          ref="prevEl"
          class="tinyflow-slider__arrow2 glassyW boxShadow flex justify-center items-center size-10 rounded-full"
        >
          <LucideChevronRight :size="24" class="text-white" />
        </button>
        <button
          type="button"
          aria-label="Next"
          class="tinyflow-slider__arrow2 size-10 rounded-full glassyW boxShadow flex justify-center items-center"
          ref="nextEl"
        >
          <LucideChevronLeft :size="24" class="text-white" />
        </button>
      </div>

      <Swiper
        :modules="modules"
        :slides-per-view="1"
        effect="fade"
        :loop="true"
        :autoplay="{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }"
        :keyboard="{
          enabled: true,
          onlyInViewport: true,
        }"
        :navigation="{
          nextEl: nextEl,
          prevEl: prevEl,
        }"
        :speed="speed"
      >
        <SwiperSlide v-for="(slide, i) in slides" :key="'thumb-' + i">
          <div class="tinyflow-slide">
            <div
              class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat object-cover"
              :style="{ backgroundImage: `url(${slide.img})` }"
            ></div>

            <picture class="absolute inset-0 w-full h-full block">
              <source :srcset="slide.img480" media="(max-width: 480px)" />
              <source :srcset="slide.img800" media="(max-width: 800px)" />
              <source :srcset="slide.img1200" media="(max-width: 1200px)" />
              <img
                :src="slide.img"
                :alt="slide.title"
                class="w-full h-full object-cover"
                draggable="false"
                loading="lazy"
              />
            </picture>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Keyboard, EffectFade } from "swiper/modules";

const { locale } = useI18n();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const modules = [Navigation, Autoplay, Keyboard, EffectFade];

const nextEl = ref<HTMLElement | null>(null);
const prevEl = ref<HTMLElement | null>(null);
const speed = 1000;
const autoplayDelay = 7000;

interface SliderResult {
  id: number;
  images: {
    size: string;
    url: string;
  }[];
}
interface SliderResponse {
  count: number;
  next: number;
  previous: number;
  results: SliderResult[];
}
import ozone from "/images/ozone.webp";
const defaultSlide = {
  img: ozone,
  img1200: ozone,
  img800: ozone,
  img480: ozone,
  title: "ozone-default-slide",
};

const { data: SliderImages } = await useFetch<SliderResponse>(
  "https://bk.saudiozone.com.sa/api/slider"
);

const slides = computed(() => {
  const results = SliderImages.value?.results;
  if (!results || results.length === 0) {
    return [defaultSlide];
  }
  return results.map((item: SliderResult) => {
    const get = (size: string) =>
      item.images?.find((x: any) => x.size === size)?.url || defaultSlide.img;
    return {
      img: get("1920px"),
      img1200: get("1200px"),
      img800: get("800px"),
      img480: get("400px"),
      title: `slider-${item.id}`,
    };
  });
});
</script>
<style scoped>
:root {
  --color-primary: #e0fee6;
  --color-navigation-bg-rgb: 69, 71, 67;
  --easing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.carousel {
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
  -webkit-transition: -webkit-transform calc(var(--data-speed, 300) * 1ms)
    linear calc(var(--data-speed, 300) * 1ms);
  transition: -webkit-transform calc(var(--data-speed, 300) * 1ms) linear
    calc(var(--data-speed, 300) * 1ms);
  -o-transition: transform calc(var(--data-speed, 300) * 1ms) linear
    calc(var(--data-speed, 300) * 1ms);
  transition: transform calc(var(--data-speed, 300) * 1ms) linear
    calc(var(--data-speed, 300) * 1ms);
  transition: transform calc(var(--data-speed, 300) * 1ms) linear
      calc(var(--data-speed, 300) * 1ms),
    -webkit-transform calc(var(--data-speed, 300) * 1ms) linear calc(var(
            --data-speed,
            300
          ) * 1ms);
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

.tinyflow-slide__content {
  position: relative;
  -webkit-transition: all calc((var(--data-speed, 300) / 2) * 1ms)
    var(--easing-function);
  -o-transition: all calc((var(--data-speed, 300) / 2) * 1ms)
    var(--easing-function);
  transition: all calc((var(--data-speed, 300) / 2) * 1ms)
    var(--easing-function);
}

.tinyflow-slider__arrow2:active {
  background-color: rgba(255, 255, 255, 0.9);
}

@media (hover: hover) {
  .tinyflow-slider__arrow2:hover,
  .tinyflow-slider__arrow2:focus-visible {
    background-color: rgba(255, 255, 255, 0.6);
  }
}

.tinyflow-slide {
  position: relative;
  width: 100%;
  height: 100vh; /* أو h-screen */
}

.tinyflow-slide__card {
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
}

/* تحسين Fade Effect */
.swiper-fade {
  transition-property: opacity, transform !important;
}
</style>

<template>
  <div class="section2 galleryImage">
    <h2
      class="text-TextD text-2xl lg:text-3xl lg:!leading-[54px] font-semibold text-center mb-4 lg:mb-4"
    >
      {{ title }}
    </h2>
    <div class="flex gap-2 justify-center flex-wrap">
      <span
        class="rounded-full galleryImage !py-2 !px-5 text-Secondary font-normal text-base"
      >
        {{ desc }}
      </span>
      <span
        class="rounded-full galleryImage !py-2 !px-5 text-Secondary font-normal text-base"
      >
        {{ date }}م
      </span>
    </div>
    <div class="flex gap-2 w-full overflow-hidden mt-8 lg:mt-10 max-lg:hidden">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="max-lg:hidden overflow-hidden group cursor-pointer rounded-3xl transition-all duration-500 h-[450px]"
        @mouseenter="setActive(i)"
        :class="[
          active === i ? 'flex-[4] max-w-[600px]' : 'flex-[1] max-w-[150px]',
        ]"
      >
        <img
          :src="img.image_url"
          :alt="img.caption"
          width="600"
          loading="lazy"
          height="450"
          class="w-full brightness-[0.7] group-hover:brightness-100 h-full object-cover transition-all duration-300"
        />
      </div>
    </div>

    <div class="lg:hidden mt-8 lg:mt-10">
      <Swiper
        :breakpoints="{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
        }"
        :spaceBetween="10"
        :modules="modules"
        :pagination="{ clickable: true }"
        class="mySwiper !pb-10 text-center"
      >
        <SwiperSlide
          v-for="product in images"
          :key="`${product.id}`"
          class="max-h-[450px]"
        >
          <img
            :src="product.image_url"
            :alt="product.caption"
            width="600"
            loading="lazy"
            height="450"
            class="w-full h-full object-cover max-w-[450px] rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];
const active = ref(0);

const setActive = (i: number) => {
  active.value = i;
};
interface GalleryImage {
  id: number;
  image: string;
  image_url: string;
  caption: string;
  order: number;
  uploaded_at: string;
}

defineProps<{
  title: string;
  desc: string;
  date: number;
  images: GalleryImage[];
}>();
</script>

<style scoped>
.galleryImage {
  box-shadow: 0px 0px 16.74px 8.37px #0928920a;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
}

.section2 {
  margin-bottom: 170px;
}

@media (max-width: 768px) {
  .section2 {
    margin-bottom: 100px;
  }
  .galleryImage {
    padding: 20px;
  }
}

:deep(.swiper-pagination-bullet) {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: black;
  margin-top: 40px !important;
  cursor: pointer;
}

:deep(.swiper-pagination-bullet-active) {
  width: 16px;
  background: #ed2024;
}

:deep(.swiper-pagination) {
  position: absolute;
  width: fit-content;
  bottom: 0px;
  right: 50%;
  transform: translateX(50%);
}
</style>

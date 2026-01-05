<template>
  <main class="projects" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <ProjectsHeroSection />
    <div class="max-w-[1208px] mx-auto">
      <div
        class="flex mt-[60px] md:mt-[120px] pb-8 md:pb-12 border-b border-[#E5E9F5]"
      >
        <Swiper
          slidesPerView="auto"
          :spaceBetween="10"
          :modules="modules"
          class="mySwiper"
        >
          <SwiperSlide
            :class="FaqsFilter === 'photography' && 'active'"
            @click="FaqsFilter = 'photography'"
          >
            بعض انجازاتنــا
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'photography' && 'active'"
            @click="FaqsFilter = 'photography'"
          >
            بعض اعملانا
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="mt-8 md:mt-12" v-for="project in data?.results">
        <ProjectsImageSection
          :title="project.title"
          :desc="project.description"
          :date="project.year"
          :images="project.images"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
const { locale } = useI18n();

import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];
const FaqsFilter = ref("photography");

export interface GalleryImage {
  id: number;
  image: string;
  image_url: string;
  caption: string;
  order: number;
  uploaded_at: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  city: string;
  year: number;
  date: string;
  description: string;
  order: number;
  is_active: boolean;
  images: GalleryImage[];
  images_count: number;
  created_at: string;
  updated_at: string;
}

export interface GalleryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: GalleryItem[];
}

const { data } = useFetch<GalleryResponse>(
  () => "https://bk.saudiozone.com.sa/api/events/"
);
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
  color: #4a5568;
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
  background-color: #ed2024;
  color: white;
}

.swiper-slide:hover {
  background-color: #ed2024;
  color: white;
}
</style>

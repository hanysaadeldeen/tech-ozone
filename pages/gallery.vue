<template>
  <main class="gallery">
    <GalleryHeroSection />
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
            كل القطاعات
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'vidoeFilter' && 'active'"
            @click="FaqsFilter = 'vidoeFilter'"
          >
            الحج والعمرة
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'branding' && 'active'"
            @click="FaqsFilter = 'branding'"
          >
            الصحة
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'webDesign' && 'active'"
            @click="FaqsFilter = 'webDesign'"
          >
            الدواجن
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'socialMedia' && 'active'"
            @click="FaqsFilter = 'socialMedia'"
          >
            الزراعة
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'support' && 'active'"
            @click="FaqsFilter = 'support'"
          >
            التمور
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'support' && 'active'"
            @click="FaqsFilter = 'support'"
          >
            الفنادق والسياحة
          </SwiperSlide>
        </Swiper>
      </div>
      <section class="GalleryProjects max-2xl:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div
            class="boxShadow rounded-3xl group overflow-hidden cursor-pointer relative"
            v-for="img in visibleItems"
          >
            <!-- <div class="absolute bottom-8 right-10 z-20">
              <h1 class="text-2xl font-medium text-white mb-2">
                تطهير الكعبة المشرفة بالكامل
              </h1>
              <div
                class="text-TextL text-base font-normal flex items-center gap-2"
              >
                <span>مكة المكرمة</span>
                <span>.</span>
                <span>2020م</span>
              </div>
            </div> -->
            <img
              :src="img.src"
              alt="gallery"
              width="584"
              loading="lazy"
              height="400"
              class="w-full h-full brightness-[0.8] group-hover:brightness-100 transition-all ease-in-out duration-300 rounded-3xl group-hover:scale-110"
              @click="openModal(img.src)"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-all duration-300"
    @click="closeModal"
  >
    <div
      class="relative w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center pt-14"
      @click.stop
    >
      <button
        @click="closeModal"
        class="absolute top-0 right-0 text-white text-2xl hover:text-gray-300 transition-colors duration-200 z-10"
      >
        ✕
      </button>
      <img
        :src="selectedImage"
        :alt="'Portfolio Photography'"
        loading="lazy"
        class="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];
const FaqsFilter = ref("photography");

// import one from "../assets/img/Gallery/one.svg";
import two from "~/assets/img/Gallery/two.svg";
import three from "~/assets/img/Gallery/three.svg";
import four from "~/assets/img/Gallery/four.svg";
import five from "~/assets/img/Gallery/five.svg";
import six from "~/assets/img/Gallery/six.svg";
import seven from "~/assets/img/Gallery/seven.webp";
import eight from "~/assets/img/Gallery/eight.webp";
import nine from "~/assets/img/Gallery/nine.svg";
import ten from "~/assets/img/Gallery/ten.svg";
import eleven from "~/assets/img/Gallery/eleven.svg";
import twelve from "~/assets/img/Gallery/twelve.webp";
import thirteen from "~/assets/img/Gallery/thrteen.webp";
import fourteen from "~/assets/img/Gallery/fourteen.svg";
import fifteen from "~/assets/img/Gallery/fivteen.webp";
// import sixteen from "~/assets/img/Gallery/sixteen.webp";
import seventeen from "~/assets/img/Gallery/seventeen.svg";
import eighteen from "~/assets/img/Gallery/eighteen.webp";
import nineteen from "~/assets/img/Gallery/ninteen.svg";
import twente from "~/assets/img/Gallery/twentee.webp";
import twenteOne from "~/assets/img/Gallery/twenteOne.svg";
import twenteTwo from "~/assets/img/Gallery/twenteTwo.svg";
import twenteThree from "~/assets/img/Gallery/twenteThree.webp";
import twenteFour from "~/assets/img/Gallery/twenteFour.svg";
// import twenteFive from "~/assets/img/Gallery/twenteFive.svg";

const photography = [
  // { id: 1, name: "one", src: one },
  { id: 2, name: "two", src: two },
  { id: 3, name: "three", src: three },
  { id: 4, name: "four", src: four },
  { id: 5, name: "five", src: five },
  { id: 6, name: "six", src: six },
  { id: 7, name: "seven", src: seven },
  { id: 8, name: "eight", src: eight },
  { id: 9, name: "nine", src: nine },
  { id: 10, name: "ten", src: ten },
  { id: 11, name: "eleven", src: eleven },
  { id: 12, name: "twelve", src: twelve },
  { id: 13, name: "thirteen", src: thirteen },
  { id: 14, name: "fourteen", src: fourteen },
  { id: 15, name: "fifteen", src: fifteen },
  // { id: 16, name: "sixteen", src: sixteen },
  { id: 17, name: "seventeen", src: seventeen },
  { id: 18, name: "eighteen", src: eighteen },
  { id: 19, name: "nineteen", src: nineteen },
  { id: 20, name: "twente", src: twente },
  { id: 21, name: "twenteOne", src: twenteOne },
  { id: 22, name: "twenteTwo", src: twenteTwo },
  { id: 23, name: "twenteThree", src: twenteThree },
  { id: 24, name: "twenteFour", src: twenteFour },
  // { id: 25, name: "twenteFive", src: twenteFive },
];

const isModalOpen = ref(false);
const selectedImage = ref("");

const openModal = (imageSrc: string) => {
  selectedImage.value = imageSrc;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = "auto";
};

// Close modal on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isModalOpen.value) {
      closeModal();
    }
  };
  document.addEventListener("keydown", handleEscape);
  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});

const INITIAL_COUNT = 30;
const visibleCount = ref(INITIAL_COUNT);
const visibleItems = computed(() => photography.slice(0, visibleCount.value));
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

.testAgain img {
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.testAgain .overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
}

.testAgain div:hover .overlay {
  opacity: 1;
}

.testAgain div:hover img {
  transform: scale(1.1);
}

.fixed {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.image-popup-animation {
  animation: imagePopup 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: center;
}

@keyframes imagePopup {
  0% {
    opacity: 0;
    transform: scale(0.1) translateY(20px);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.image-popup-animation {
  animation: imagePopup 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

@keyframes imagePopup {
  0% {
    opacity: 0;
    transform: scale(0.1) translateY(30px);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>

<template>
  <main class="faqs" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <GredientHero
      title="كل ما تحتاج معرفته عن حلول وتقنيات الأوزون"
      description="هنا ستجد إجابات وافية عن أبرز الأسئلة المتعلقة بتقنياتنا، أجهزتنا، وخدماتنا، لتتخذ قرارك بثقة واطمئنان."
    />

    <div class="max-w-[1208px] mx-auto">
      <!-- <div
        class="flex mt-[60px] md:mt-[120px] py-8 md:py-12 border-b border-t border-[#E5E9F5]"
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
            جميع الأسئلة
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'vidoeFilter' && 'active'"
            @click="FaqsFilter = 'vidoeFilter'"
          >
            التعقيم بتقنية الأوزون
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'branding' && 'active'"
            @click="FaqsFilter = 'branding'"
          >
            الأجهزة
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'webDesign' && 'active'"
            @click="FaqsFilter = 'webDesign'"
          >
            القطاعات
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'socialMedia' && 'active'"
            @click="FaqsFilter = 'socialMedia'"
          >
            الأسعار ومناطق الخدمة
          </SwiperSlide>
          <SwiperSlide
            :class="FaqsFilter === 'support' && 'active'"
            @click="FaqsFilter = 'support'"
          >
            الدعم الفني والصيانة
          </SwiperSlide>
        </Swiper>
      </div> -->
      <div class="mt-[60px] md:mt-[120px]">
        <FAQ
          v-for="(faq, index) in FAQs"
          :id="faq.id"
          :question="faq.question"
          :answer="faq.answer"
          :toggle="faq.toggle"
        />
        <FAQ
          v-for="(faq, index) in FAQs"
          :id="faq.id"
          :question="faq.question"
          :answer="faq.answer"
          :toggle="faq.toggle"
        />
        <FAQ
          v-for="(faq, index) in FAQs"
          :id="faq.id"
          :question="faq.question"
          :answer="faq.answer"
          :toggle="faq.toggle"
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

const faqs = [
  {
    id: 1,
    question: "ما هي تقنية تك أوزون؟",
    answer:
      "هي تقنية حديثة تعتمد على توليد غاز الأوزون (O₃) من الهواء الطبيعي، ويُستخدم هذا الغاز في تطهير وتعقيم الأسطح والهواء دون أي مواد كيميائية أو سوائل.",
  },
  {
    id: 2,
    question: "هل استخدام الأوزون آمن؟",
    answer:
      "نعم، آمن جدًا عند استخدامه وفق المعايير المحددة، إذ تتم عملية التطهير قبل تواجد الأشخاص في المكان، ويعود الهواء لطبيعته خلال فترة قصيرة بعد التشغيل.",
  },
  {
    id: 3,
    question: "هل الأوزون مادة سائلة أو كيميائية؟",
    answer:
      "لا، الأوزون غاز طبيعي ناتج عن الأكسجين، ولا يحتوي على أي مكونات كيميائية أو سوائل مضافة.",
  },
  {
    id: 4,
    question: "هل تقنية الأوزون معتمدة في المملكة العربية السعودية؟",
    answer:
      "نعم، تُستخدم تقنية الأوزون في المملكة ضمن أنظمة التطهير المعتمدة، وتُطبق في قطاعات حساسة مثل الصحة والفنادق والمنشآت العامة، تحت إشراف الجهات المختصة.",
  },
  {
    id: 5,
    question: "هل الأوزون معتمد من المنظمات العالمية؟",
    answer:
      "نعم، الأوزون معتمد من منظمات عالمية مثل منظمة الصحة العالمية (WHO) وهيئة الغذاء والدواء الأمريكية (FDA) كمطهر آمن وفعّال عند استخدامه بالتركيزات المسموح بها.",
  },
  {
    id: 6,
    question: "ما مدى قوة الأوزون كمطهر مقارنة بالمواد التقليدية؟",
    answer:
      "الأوزون أقوى من الكلور بحوالي 50 مرة، ويعمل بسرعة عالية على القضاء على الفيروسات والبكتيريا والميكروبات دون أن يترك أي بقايا أو روائح.",
  },
  {
    id: 7,
    question: "هل تختلف أجهزة تك أوزون حسب نوع الاستخدام؟",
    answer:
      "نعم، تتوفر أجهزة مخصصة لتطهير المنشآت الكبيرة وشبكات التكييف، وأخرى متنقلة وسريعة الاستخدام للمنازل والمكاتب والأماكن الصغيرة.",
  },
  {
    id: 8,
    question: "هل يحتاج جهاز تك أوزون إلى إضافة مواد أثناء التشغيل؟",
    answer:
      "لا، لا يحتاج إلى أي إضافات، إذ ينتج الأوزون مباشرة من الهواء الطبيعي، مما يجعله موفرًا ماليًا وآمنًا بيئيًا.",
  },
  {
    id: 9,
    question: "كيف تعمل تقنية تك أوزون؟",
    answer:
      "يتم توليد الأوزون من الهواء داخل الجهاز، ثم يُوزع في المكان ليقضي على الملوثات والفيروسات في الأسطح والجو، قبل أن يتحول مرة أخرى إلى أكسجين طبيعي.",
  },
  {
    id: 10,
    question: "هل الأوزون يسبب ضررًا على الأثاث أو الأجهزة؟",
    answer:
      "لا، عند استخدامه بالمعايير الصحيحة لا يسبب أي تلف أو تآكل، بل يساعد في إزالة الروائح والبكتيريا من المفروشات والأسطح.",
  },
  {
    id: 11,
    question: "ما الفرق بين المطهرات السائلة ومطهرات الأوزون؟",
    answer:
      "المطهرات السائلة محدودة على الأسطح الظاهرة وقد تترك بقايا أو رائحة، بينما الأوزون ينتشر في الهواء ويصل إلى جميع الزوايا والأسطح المخفية دون أي أثر أو رائحة.",
  },
  {
    id: 12,
    question: "لماذا تُعد تقنية تك أوزون أفضل من غيرها من وسائل التطهير؟",
    answer:
      "لأنها فعالة وسريعة وآمنة على الإنسان والبيئة، لا تحتاج لمواد كيميائية، ولا تترك أي بقايا بعد الاستخدام، وتتحول ببساطة إلى أكسجين طبيعي في غضون ساعة فقط.",
  },
];
const FAQs = faqs.map((faq, index) => ({
  id: faq.id,
  question: faq.question,
  answer: faq.answer,
  toggle: index < 1, // أول سؤالين مفتوحين، والباقي مغلقين
}));
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

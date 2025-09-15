<template>
    <main class="faqs ">
        <GredientHero title="كل ما تحتاج معرفته عن حلول وتقنيات الأوزون"
            description="هنا ستجد إجابات وافية عن أبرز الأسئلة المتعلقة بتقنياتنا، أجهزتنا، وخدماتنا، لتتخذ قرارك بثقة واطمئنان." />

        <div class="max-w-[1208px] mx-auto">
            <div class="flex mt-[60px]  md:mt-[120px] py-8 md:py-12 border-b border-t  border-[#E5E9F5]">
                <Swiper slidesPerView="auto" :spaceBetween="10" :modules="modules" class="mySwiper">
                    <SwiperSlide :class="FaqsFilter === 'photography' && 'active'" @click="FaqsFilter = 'photography'">
                        جميع الأسئلة
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'vidoeFilter' && 'active'" @click="FaqsFilter = 'vidoeFilter'">
                        التعقيم بتقنية الأوزون
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'branding' && 'active'" @click="FaqsFilter = 'branding'">
                        الأجهزة
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'webDesign' && 'active'" @click="FaqsFilter = 'webDesign'">
                        القطاعات
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'socialMedia' && 'active'" @click="FaqsFilter = 'socialMedia'">
                        الأسعار ومناطق الخدمة
                    </SwiperSlide>
                    <SwiperSlide :class="FaqsFilter === 'support' && 'active'" @click="FaqsFilter = 'support'">
                        الدعم الفني والصيانة
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="mt-[60px]  md:mt-[120px] ">
                <FAQ v-for="(faq, index) in FAQs" :id="faq.id" :question="faq.question" :answer="faq.answer"
                    :toggle="faq.toggle" />
                <FAQ v-for="(faq, index) in FAQs" :id="faq.id" :question="faq.question" :answer="faq.answer"
                    :toggle="faq.toggle" />
                <FAQ v-for="(faq, index) in FAQs" :id="faq.id" :question="faq.question" :answer="faq.answer"
                    :toggle="faq.toggle" />
            </div>
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


const faqs = {
    "questionOne": {
        "title": "كم يستغرق الرد على الرسائل؟",
        "answer": "نرد عادة خلال 24 ساعة عمل على الرسائل والاستفسارات."
    },
    "questionTwo": {
        "title": "هل يمكنني التواصل دون فكرة واضحة؟",
        "answer": "نعم، نحن هنا لمساعدتك من أول خطوة — حتى لو كانت فكرتك غير مكتملة."
    },
    "questionThree": {
        "title": "هل تعملون مع جهات خارج السعودية؟",
        "answer": "نحن شركة سعودية، ولكن نخدم عملاء محليين ودوليين عن بُعد بكفاءة واحترافية."
    },
    "questionFour": {
        "title": "ما تكلفة تصميم   في السعودية؟",
        "answer": "تختلف حسب المشروع. يمكنك طلب عرض سعر عبر نموذج التواصل."
    },
    "questionSix": {
        "title": "ما الفرق بين البرمجة المخصصة والتصميم الجاهز؟",
        "answer": "البرمجة المخصصة توفر مرونة أكبر. تصفح أعمالنا لتفهم الفرق."
    },
    "questionSeven": {
        "title": "هل يمكن تنفيذ المشروع بالكامل عن بُعد؟",
        "answer": "بالتأكيد، ونعمل بكفاءة عالية. تعرف علينا من خلال صفحة عن الشركة."
    },
}

const FAQs = [
    {
        id: 1,
        question: faqs.questionOne.title,
        answer: faqs.questionOne.answer,
        toggle: true,
    },
    {
        id: 2,
        question: faqs.questionTwo.title,
        answer: faqs.questionTwo.answer,
        toggle: true,
    },
    {
        id: 3,
        question: faqs.questionThree.title,

        answer: faqs.questionThree.answer,
        toggle: false,
    },
    {
        id: 4,
        question: faqs.questionFour.title,

        answer: faqs.questionFour.answer,
        toggle: false,
    }]



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
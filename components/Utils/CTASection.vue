<template>
  <section
    class="CTASection max-2xl:px-6 py-[120px] bg-[linear-gradient(to_right,#43236A_0%,#10278C_20%,#10278C_80%,#43236A_100%)]"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <div class="max-w-[1208px] mx-auto">
      <div
        class="mb-20 md:mb-[120px] max-w-[792px] mx-auto flex flex-col items-center justify-center gap-4"
      >
        <h1
          class="text-white text-center text-3xl md:text-5xl md:!leading-[72px] font-semibold"
        >
          ابدأ رحلتك مع الشركة السعودية للأوزون اليوم
        </h1>
        <p class="text-TextL text-base md:text-lg font-normal text-center">
          تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك.
        </p>
      </div>

      <div
        class="flex gap-6 md:gap-10 justify-center xl:justify-between flex-wrap relative"
      >
        <div
          v-for="contact in Contacts"
          class="max-md:mx-auto max-sm:w-full md:max-w-[376px] flex flex-col gap-4 md:gap-6 lg:gap-8 justify-center items-center px-10 md:px-[52px]"
        >
          <div
            class="rounded-2xl p-3 xl:p-5 flex justify-center items-center"
            :style="{ backgroundColor: contact.background }"
          >
            <img
              :src="contact.img"
              :alt="contact.title"
              width="32"
              height="32"
            />
          </div>
          <div>
            <h1
              class="text-white text-base md:text-lg font-medium text-center mb-1 md:mb-2"
            >
              {{ contact.title }}
            </h1>
            <p class="text-TextL text-sm md:text-base font-normal">
              {{ contact.description }}
            </p>
          </div>
          <a :href="contact.link" target="_blank">
            <button
              class="boxShadow2 block rounded-full text-lg font-medium py-2.5 px-12 w-full"
              :class="contact.id === 2 ? 'text-white' : ' text-Secondary'"
              :style="{ backgroundColor: contact.background }"
            >
              {{ contact.btnText }}
            </button>
          </a>
        </div>
      </div>

      <div
        class="glassyW boxShadow mt-20 md:mt-[120px] border border-[#FFFFFF0A] w-full rounded-3xl p-10 md:py-10 lg:px-20 flex justify-between items-center max-md:flex-wrap max-md:justify-center gap-6 md:gap-10 lg:gap-20"
      >
        <div
          v-for="number in Numbers"
          class="flex flex-col items-center justify-center gap-2 w-fit lg:w-[200px]"
        >
          <h1 class="text-white text-3xl font-semibold">{{ number.number }}</h1>
          <p class="text-TextL text-sm font-normal text-center">
            {{ number.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import telephone from "../../assets/img/Utils/telephone.svg";
import mail from "../../assets/img/Utils/mail.svg";
import whatsapp from "../../assets/img/Utils/whatsapp.svg";
const Contacts = [
  {
    id: 1,
    title: "تواصل معنا",
    btnText: "اتصل الآن",
    description: "استفساراتك تُجاب فورًا عبر الاتصال المباشر.",
    img: telephone,
    background: "#FFFFFF",
    link: "tel:+966540061616",
  },
  {
    id: 2,
    title: "اطلب عرض سعر",
    btnText: "اطلب الآن",
    description: "عرض مفصل يلبي احتياجات مشروعك بدقة",
    img: mail,
    background: "#ED2024",
    link: "https://mail.google.com/mail/?view=cm&to=info@saudiozone.com.sa",
  },
  {
    id: 3,
    title: "راسلنا علي الواتس اب",
    btnText: "احجز الآن",
    description: "تواصل سريع مع خبرائنا لمناقشة متطلباتك",
    img: whatsapp,
    background: "#FFFFFF",
    link: "http://wa.me/+966540061616",
  },
];

const Numbers = [
  {
    number: "+12",
    title: "عامًا من الخبرة الميدانية",
  },
  {
    number: "24/7",
    title: "استجابة ودعم فني متواصل",
  },
  {
    number: "+100",
    title: "شريك وعميل يثق بنا",
  },
  {
    number: "99 %",
    title: "رضا العملاء أولوية دائمة",
  },
];
</script>

<style scoped></style>

<template>
  <main class="contactPage" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <GredientHero
      title="تواصل معنا بكل سهولة"
      description="نحن في الشركة السعودية للأوزون جاهزون للرد على استفساراتك وتقديم الدعم لاحتياجاتك. تواصل معنا عبر النموذج أو وسائل الاتصال المتاحة، وسنكون سعداء بخدمتك."
    />
    <div
      class="w-full max-w-[1208px] mx-auto mt-[60px] md:mt-[120px] max-xl:px-6"
    >
      <ContactForm />
      <ContactLocation />
      <ContactFQ />
    </div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import type { SEODataFetch } from "~/types/seo";

const { data } = await useFetch<SEODataFetch>(
  () => "https://bk.saudiozone.com.sa/api/pages/contact-us"
);
usePageSeo(data, locale);
</script>

<style scoped>
.inputBack {
  background-color: transparent;
  border: 1px solid #a3adba;
  color: #1a1f2b;
  border-radius: 12px;
}
</style>

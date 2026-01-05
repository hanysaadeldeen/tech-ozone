<template>
  <main class="aboutUs" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <AboutHeroSection />
    <AboutQuote />
    <div class="max-w-[1208px] mx-auto">
      <AboutContent />
      <VisionAndMission />
      <StrategicGoals />
      <CoresSection />
    </div>
    <WhyUsSection />
    <div class="max-w-[1208px] mx-auto">
      <OurJourneySection />
    </div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import type { SEODataFetch } from "~/types/seo";

const { data } = await useFetch<SEODataFetch>(
  () => "https://bk.saudiozone.com.sa/api/pages/about-us"
);
usePageSeo(data, locale);
</script>

<style scoped></style>

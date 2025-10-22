<template>
  <main class="SectorsIdPage" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <SectorsIdHeroSection />
    <div class="max-w-[1208px] mx-auto">
      <SectorsQuoteId />
      <FeaturesSection />
    </div>
    <TargetAudience />
    <div class="max-w-[1208px] mx-auto">
      <DownloadCenter />
      <WordSection />
      <SectorClientsSection />
    </div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>

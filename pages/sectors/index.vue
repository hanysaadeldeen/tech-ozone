<template>
  <main class="SectorsPage" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <SectorsHeroSection />
    <SectorsQuote />
    <div class="max-w-[1208px] mx-auto">
      <SectorsSection />
    </div>
    <SectorsStatisticsSection />
    <div class="max-w-[1208px] mx-auto">
      <!-- <DevicesSection /> -->
      <!-- <SuccessPartenerClients /> -->
      <LocalCertificatesSection />
    </div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>

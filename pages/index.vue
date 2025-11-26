<template>
  <main
    class="MainPage overflow-hidden relative"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <h1 class="sr-only">
      "الشركة السعودية للأوزون للمشاريع والحلول البيئي والصحية
    </h1>
    <HomeHeroSection />
    <div class="max-w-[1208px] mx-auto">
      <CoresSection />
      <ScientificPartnershipsSection />
      <SectorsSection />
      <!-- <SuccessPartenerClients /> -->
      <LocalCertificatesSection />
      <DevicesSection />
    </div>
    <WhyUsSection />
    <div class="max-w-[1208px] mx-auto">
      <StatisticsSection />
      <!-- <ClientsSection /> -->
    </div>
  </main>
  <PhotoSection />
</template>

<script setup>
const { locale } = useI18n();
</script>
<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>

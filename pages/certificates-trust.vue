<template>
  <main class="CertificatesAndTrust" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <CertificatesHeroSection />
    <div class="max-w-[1208px] mx-auto">
      <InternationalCertificatesSection />
      <LocalCertificatesSection />
      <ScientificPartnershipsSection />
      <!-- <SuccessPartenerClients /> -->
      <OurTeamSection />
    </div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>

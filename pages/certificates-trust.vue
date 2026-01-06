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
import type { SEODataFetch } from "~/types/seo";

const { data } = await useFetch<SEODataFetch>(
  () => "https://bk.saudiozone.com.sa/api/pages/certificates-trust"
);
usePageSeo(data, locale);
</script>

<style scoped></style>

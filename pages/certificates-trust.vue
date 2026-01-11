<template>
  <main class="CertificatesAndTrust" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <CertificatesHeroSection />
    <div class="max-w-[1208px] mx-auto">
      <template v-for="item in sections" :key="item.category_id">
        <component
          v-if="sectionMap[item.category_slug]"
          :is="sectionMap[item.category_slug]"
          :section="item"
        />
      </template>

      <OurTeamSection />
    </div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
import type { SEODataFetch } from "~/types/seo";
import InternationalCertificatesSection from "../components/Certificates/International/InternationalCertificatesSection.vue";
import LocalCertificatesSection from "../components/Certificates/LocalCertificates/LocalCertificatesSection.vue";
import ScientificPartnershipsSection from "../components/Certificates/Scientific/ScientificPartnershipsSection.vue";
const sectionMap: Record<string, any> = {
  testimonial: InternationalCertificatesSection,
  partner: LocalCertificatesSection,
  alliance: ScientificPartnershipsSection,
};
const { data } = await useFetch<SEODataFetch>(
  () => "https://bk.saudiozone.com.sa/api/pages/certificates-trust"
);
usePageSeo(data, locale);

type PartnerCategorySlug = "testimonial" | "partner" | "alliance";
interface PartnerCategory {
  category_id: number;
  category_slug: PartnerCategorySlug;
  category_name_ar: string;
  category_name_en: string;
  category_description_ar: string;
  category_description_en: string;
  partners: any[];
}

interface PartnersType {
  Target: PartnerCategory[];
}
const { data: partners } = await useFetch<PartnersType>(
  "https://bk.saudiozone.com.sa/api/partners"
);

const sections = computed<PartnerCategory[]>(() => partners.value ?? []);
</script>

<style scoped></style>

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
      <ScientificPartnershipsSection :section="sections[0]" />
      <SectorsSection />
      <LocalCertificatesSection :section="sections[2]" />
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

<script setup lang="ts">
const { locale } = useI18n();
import type { SEODataFetch } from "~/types/seo";
const { data } = await useFetch<SEODataFetch>(
  () => "https://bk.saudiozone.com.sa/api/pages/home"
);
useHead(() => {
  if (!data.value) return {};

  const isAr = locale.value === "ar";
  const description = isAr
    ? data.value.meta_description_ar
    : data.value.meta_description_en;

  const url = data.value.slug
    ? `https://o3.saudiozone.com.sa/${data.value.slug}`
    : "https://o3.saudiozone.com.sa/";

  return {
    title: null,
    meta: [
      { name: "description", content: description },
      {
        property: "og:title",
        content: isAr ? data.value.title_ar : data.value.title_en,
      },
      { property: "og:description", content: description },
      {
        property: "og:image",
        content:
          data.value.banner_image_url ||
          "https://o3.saudiozone.com.sa/LogoTap.png",
      },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
    ],
  };
});

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

// console.log(sections?.value[0]);
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

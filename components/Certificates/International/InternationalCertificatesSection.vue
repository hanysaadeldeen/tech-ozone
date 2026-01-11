<template>
  <section class="InternationalCertificates mx-auto max-2xl:px-6">
    <section-title
      :btnText="section.category_name_ar"
      :description="section.category_description_ar"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative">
      <InternationalCertificatesCard
        v-for="certification in section.partners"
        :title="certification.name_ar"
        :description="certification.name_en"
        :img="certification.logo_url"
        :alt="certification.name_en"
        :imgAlt="certification.name_en"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
interface PartnerCategory {
  category_id: number;
  category_slug: string;
  category_name_ar: string;
  category_name_en: string;
  category_description_ar: string;
  category_description_en: string;
  partners: any[];
}
interface Props {
  section: PartnerCategory;
}

defineProps<Props>();
</script>

<style scoped></style>

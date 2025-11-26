<template>
  <section class="InternationalCertificates mx-auto max-2xl:px-6">
    <section-title
      btnText="الشهادات والاعتمادات الدولية"
      description="ملتزمون بأعلى معايير الجودة، البيئة، والسلامة"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative">
      <InternationalCertificatesCard
        v-for="certification in Certifications"
        :title="certification.title"
        :description="certification.description"
        :img="certification.img"
        :alt="certification.imgAlt"
        :imgAlt="certification.imgAlt"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import WORLDHEALTH from "~/assets/img/Certificates/International/WORLDHEALTH.svg";
import UNITEDSTATE from "~/assets/img/Certificates/International/UNITEDSTATE.svg";
import USDA from "~/assets/img/Certificates/International/USDA.svg";
import FDA from "~/assets/img/Certificates/International/FDA.svg";
import IOA from "~/assets/img/Certificates/International/IOA.svg";
import USDAORGANIC from "~/assets/img/Certificates/International/USDAORGANIC.svg";

const Certifications = [
  {
    title: "WORLD HEALTH",
    description: "الصحة العالمية",
    img: WORLDHEALTH,
    imgAlt: "الصحة العالمية",
  },
  {
    title: "UNITED STATES ENVIRONMENTAL PROTECTION AGENCY",
    description: "وكالة حماية البيئة",
    img: UNITEDSTATE,
    imgAlt: "وكالة حماية البيئة",
  },
  {
    title: "United States Department of Agriculture",
    description: "وزارة الزراعة في الولايات المتحدة الأمريكية",
    img: USDA,
    imgAlt: "وزارة الزراعة في الولايات المتحدة الأمريكية",
  },
  {
    title: "The Food and Drug Administration",
    description: " إدارة الغذاء والدواء",
    img: FDA,
    imgAlt: " إدارة الغذاء والدواء",
  },
  {
    title: "International Ozone Association",
    description:
      "منظمة غير ربحية تعمل على جمع ونشر المعلومات حول تقنيات الأوزون والأكسدة المتقدمة",
    img: IOA,
    imgAlt: "international ozone association",
  },
  {
    title: "USDA Organic",
    description: "اعتماد وزارة الزراعة الأمريكية للمنتجات العضوية",
    img: USDAORGANIC,
    imgAlt: "USDA Organic Logo",
  },
];
</script>

<style scoped></style>

<template>
  <section
    class="SectorsSection max-2xl:px-6"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <section-title
      btnText="أنظمة TechOzone"
      description="أجهزة تعقيم للمنشآت الحيوية"
    />
    <div class="mb-20 relative">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
      >
        <DeviceCard
          v-for="device in Devices"
          :title="device.title"
          :description="device.description"
          :details="device.details"
          :img="device.img"
        />
      </div>
    </div>

    <a href="https://techozone.sa/" target="_blank">
      <Button title="استعرض جميع أجهزة TechOzone" background="#092892" />
    </a>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import HVAC from "../../../assets/img/Devices/HVAC.webp";
import Air from "../../../assets/img/Devices/air.webp";
import Water from "../../../assets/img/Devices/water.webp";

const Devices = [
  {
    id: 1,
    title: "وحدة تطهير شبكات المكيّفات (HVAC)",
    description:
      "نظام متطور وفعّال يحافظ على نقاء وجودة الهواء عبر شبكات التكييف.",
    img: HVAC,
    details: [
      "تعقيم مستمر داخل مجرى الهواء",
      "يحسّن جودة الهواء الداخلي",
      "يعمل بدون مواد كيميائية",
      "مخصص للمساحات الكبيرة",
    ],
  },
  {
    id: 200231,
    title: "وحدة تعقيم الهواء الداخلي والأسطح",
    description: "تقنية مبتكرة وآمنة لتطهير الهواء والأسطح بكفاءة وسرعة عالية.",
    img: Air,
    details: [
      "انتشار سريع وتأثير قوي",
      "يقلل انتقال العدوى",
      "يقضي على الروائح الكريهة",
      "لا يترك أي أثر بعد التعقيم",
    ],
  },
  {
    id: 3,
    title: "وحدة تطهير خزانات المياه الداخلية",
    description: "حل متكامل وموثوق يضمن تعقيم ونقاء المياه داخل جميع الخزانات.",
    img: Water,
    details: [
      "يقضي على البكتيريا والفيروسات",
      "يحافظ على خصائص المياه الطبيعية",
      "يعمل بدون أي مواد كيميائية",
      "يقلل تكاليف الصيانة والاستهلاك",
    ],
  },
];
</script>

<style scoped></style>

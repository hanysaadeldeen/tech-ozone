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
    title: "جهاز تطهير المياه المنزلي",
    description:
      "جهاز تك أوزون لتنقية وتطهير المياه بفعالية عالية وتقنية حديثة.",
    img: HVAC,
    details: [
      "تطهير وتعقيم مياه الشرب وسهولة التركيب والإستخدام",
      "القضاء علي البكتريا والجراثيم بمياه الصنبور",
      "أقوي وأوسع مطهر ميكروبيولوجي متوفر حتي الأن",
    ],
  },
  {
    id: 2,
    title: "جهاز غسيل و تطهير الخضار و الفواكه و اللحوم",
    description:
      "جهاز تك اوزون لغسيل وتطهير الفاكهة والخضراوات واللحوم و المأكولات البحرية ",
    img: Air,
    details: [
      "القضاء علي البكتيريا والفطريات والاستافيلوكوكس وخفض المبيدات",
      "سهل وأمن الاستخدام",
      "القضاء علي ميكروب الليستريا",
    ],
  },
  {
    id: 3,
    title: "الجهاز المتنقل SO لتطهير الهواء و الأسطح",
    description:
      "جهاز لتطهير الهواء و الأسطح من الفيروسات و الميكروبات و لإزالة الروائح و الدخان من المنازل",
    img: Water,
    details: [
      "ضمان لمدة عام ، و لا يشمل الضمان سوء الاستخدام أو الكسر",
      "توفير قطع الغيار و الصيانة - على العميل اتباع إرشادات الاستخدام و التشغيل",
    ],
  },
];
</script>

<style scoped></style>

<template>
  <section
    class="ClientsSection max-2xl:px-6"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <section-title
      btnText="شركاؤنا وعملاؤنا"
      description="ثقة نعتز بها من شركائنا"
    />
    <div class="flex justify-center flex-wrap gap-6 md:gap-10 mb-20 relative">
      <div
        v-for="client in Clients"
        class="ClientsCard bg-white boxShadow rounded-3xl p-6 flex items-center justify-start gap-4 md:gap-6 w-full sm:w-[376px]"
      >
        <IconContainer background="#ED2024">
          <img :src="ClientsImg" alt="test" width="24" height="24" />
        </IconContainer>
        <div>
          <h1 class="text-TextD text-base md:text-lg font-medium mb-1 md:mb-2">
            {{ client.title }}
          </h1>
          <p class="text-TextMD text-sm md:text-base font-normal">
            {{ client.description }}
          </p>
        </div>
      </div>
    </div>
    <!-- <Button title="عرض المزيد من شركائنا" background="#092892" link="/" /> -->
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import ClientsImg from "../../../assets/img/Clients/Clients.svg";
const Clients = [
  {
    id: 1,
    title: "مصنع تمور الرمال الطبية",
    description: "الزراعة",
  },
  {
    id: 2,
    title: "نادي الوحدة الرياضي",
    description: "الترفيه",
  },
  {
    id: 3,
    title: "الحرم المكي",
    description: "الحج والعمرة",
  },
  {
    id: 4,
    title: "هيئة الطيران المدني",
    description: "المطارات",
  },
  {
    id: 5,
    title: "المركز الطبي الدولي",
    description: "المستشفيات",
  },
  {
    id: 6,
    title: "كافيهات أوراكافيه",
    description: "الترفيه",
  },
  {
    id: 7,
    title: "شركة أضواء لتأجير السيارات",
    description: "النقل العام",
  },
  {
    id: 8,
    title: "المشاعر المقدسة",
    description: "الحج والعمرة",
  },
  {
    id: 9,
    title: "مستشفى الشفاء في مكة المكرمة",
    description: "المستشفيات",
  },
];
</script>

<style scoped></style>

<template>
  <section class="TargetAudience gradientBg max-2xl:px-6 py-[120px]">
    <div class="max-w-[1208px] mx-auto">
      <div
        class="mb-20 md:mb-[120px] max-w-[792px] mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8"
      >
        <h2
          class="text-xl md:text-2xl lg:text-3xl text-white font-semibold text-center"
        >
          الفئات المستهدفة
        </h2>
      </div>
      <div class="flex justify-center flex-wrap gap-6 md:gap-10 mb-20 relative">
        <div
          v-for="client in Clients"
          class="ClientsCard bg-white glassyW boxShadow border border-[#FFFFFF0A] rounded-3xl p-6 flex items-center justify-start gap-4 md:gap-6 w-full sm:w-[376px]"
        >
          <span
            class="rounded-2xl text-white py-2 px-[18px] flex justify-center items-center bg-Primary text-lg md:text-xl font-medium md:font-semibold h-10 md:w-12 w-10 md:h-12"
          >
            {{ client.id }}
          </span>

          <p class="text-white text-base md:text-lg font-medium mb-1 md:mb-2">
            {{ client.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const Clients = [
  {
    id: 1,
    title: "غرف المرضى",
  },
  {
    id: 2,
    title: "غرف الطوارئ",
  },
  {
    id: 3,
    title: "غرف الرعاية",
  },
  {
    id: 4,
    title: "العيادات",
  },
  {
    id: 5,
    title: "المغاسل",
  },
  {
    id: 6,
    title: "سيارات الإسعاف",
  },
  {
    id: 7,
    title: "خزانات المياه",
  },
  {
    id: 8,
    title: "محطات الغسيل الكلوي",
  },
  {
    id: 9,
    title: "شبكات المكيفات",
  },
];
</script>

<style scoped></style>

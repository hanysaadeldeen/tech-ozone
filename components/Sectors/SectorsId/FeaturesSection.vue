<template>
  <section class="FeaturesSection max-2xl:px-6">
    <div
      class="mb-20 md:mb-[120px] max-w-[792px] mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8"
    >
      <h2
        class="text-xl md:text-2xl lg:text-3xl text-TextD font-semibold text-center"
      >
        مزايا الأوزون في التعقيم
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative">
      <div
        v-for="client in Clients"
        class="StrategicGoalsCard bg-white boxShadow rounded-3xl p-4 lg:p-6 flex items-center justify-start gap-4 md:gap-6 w-full"
      >
        <span
          class="rounded-2xl text-white py-2 px-[18px] flex justify-center items-center bg-Primary text-lg md:text-xl font-medium md:font-semibold h-10 md:w-12 w-10 md:h-12"
        >
          {{ client.id }}
        </span>
        <p class="text-TextMD text-base md:text-lg font-normal">
          {{ client.title }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const Clients = [
  {
    id: 1,
    title: "القضاء الفوري على الفيروسات والفطريات والجراثيم.",
  },
  {
    id: 2,
    title: "تطهير فعال لخزانات المياه وشبكات المكيّفات المركزية.",
  },
  {
    id: 3,
    title: "تعقيم شامل للخضار، الفاكهة، الملابس وغرف المرضى والعمليات.",
  },
  {
    id: 4,
    title: "تقليل العدوى والحد من انتشار الملوثات في المنشآت الحيوية.",
  },
  {
    id: 6,
    title: "خالي من المواد الكيميائية وآمن تماماً للاستخدام.",
  },
  {
    id: 6,
    title: "صديق للبيئة حيث يعود إلى أكسجين نقي بعد التعقيم.",
  },
  {
    id: 7,
    title: "موفّر اقتصادياً بتقليل تكاليف المواد المستهلكة والصيانة.",
  },
  {
    id: 8,
    title: "إزالة الروائح الكريهة وتحسين جودة الهواء الداخلي.",
  },
];
</script>

<style scoped></style>

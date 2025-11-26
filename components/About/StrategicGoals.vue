<template>
  <section class="StrategicGoals max-2xl:px-6">
    <section-title
      btnText="أهدافنا الاستراتيجية"
      description="نسعى لتحقيق الريادة بخطط واضحة وأهداف قابلة للإنجاز"
    />
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
    title: "تعزيز حصتنا في سوق الخليج وتنمية وجودنا الإقليمي المستدام.",
  },
  {
    id: 2,
    title: "ترسيخ مكانة رائدة في صناعة الأوزون بحلول مبتكرة وفعّالة.",
  },
  {
    id: 3,
    title: "تقديم خدمات بمعايير جودة عالية مع كفاءة تشغيلية متقدمة.",
  },
  {
    id: 4,
    title: "تطوير حلول أوسع وأكثر جذبًا للأسواق المتنوعة والقطاعات.",
  },
  {
    id: 5,
    title: "بناء سمعة متميزة قائمة على الثقة والشفافية الكاملة.",
  },
  {
    id: 6,
    title: "تلبية احتياجات العملاء وتعزيز فرص النمو عبر شراكات قوية.",
  },
];
</script>

<style scoped></style>

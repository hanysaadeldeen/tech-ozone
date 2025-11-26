<template>
  <div
    class="SectorsStatisticsCard glassyW boxShadow rounded-3xl p-8 flex flex-col gap-4 w-full sm:w-[272px]"
  >
    <span
      class="w-fit mx-auto text-white text-3xl md:text-5xl font-semibold flex items-center justify-center md:!leading-[72px]"
    >
      {{ number }}+
    </span>
    <div>
      <h2 class="text-TextL text-base md:text-xl font-medium text-center mb-2">
        {{ title }}
      </h2>
      <p class="text-base font-normal text-TextL text-center">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: number;
  title: string;
  description: string;
}>();
</script>

<style scoped></style>

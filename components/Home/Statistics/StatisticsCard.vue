<template>
  <div
    class="StatisticsCard bg-white boxShadow rounded-3xl p-8 flex flex-col gap-4 w-full sm:w-[272px]"
  >
    <div
      class="w-fit mx-auto text-Primary text-3xl md:text-5xl font-semibold flex items-center justify-center md:!leading-[72px]"
    >
      {{ number }}+
    </div>
    <div>
      <h3 class="text-TextMD text-base md:text-xl font-medium text-center mb-2">
        {{ title }}
      </h3>
      <p class="text-base font-normal text-TextM text-center">
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

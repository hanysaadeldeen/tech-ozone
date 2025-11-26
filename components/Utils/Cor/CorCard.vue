<template>
  <div
    class="CorCard bg-white boxShadow rounded-3xl py-6 px-4 md:py-10 md:px-8 flex flex-col gap-4 md:gap-6 max-sm:w-full md:w-1/2 lg:max-w-[376px] max-md:mx-auto relative"
  >
    <span
      class="boxShadow numberCard py-2 w-fit mx-auto px-4 rounded-2xl text-white text-xl font-semibold flex items-center justify-center"
      :style="{ background: background }"
    >
      {{ number }}
    </span>
    <div>
      <h3
        class="text-TextD text-xl md:text-2xl font-medium text-center mb-1 md:mb-2"
      >
        {{ title }}
      </h3>
      <p class="text-base md:text-lg font-normal text-TextMD text-center">
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
  background: string;
}>();
</script>

<style scoped></style>

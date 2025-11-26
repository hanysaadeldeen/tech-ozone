<template>
  <div
    class="flex boxShadow items-center justify-start rounded-3xl bg-white sm:flex-col lg:flex-row"
  >
    <div
      class="bg-BG2 p-3 lg:p-5 rounded-3xl max-sm:max-w-[156px] min-w-[156px] sm:w-full lg:max-w-[184px] flex justify-center items-center h-full relative"
    >
      <img
        :src="img"
        :alt="imgAlt"
        width="156"
        height="100"
        class="w-full h-full max-h-[100px] object-contain"
      />
    </div>
    <div class="py-5 lg:py-7 px-4 lg:px-6">
      <h3 class="text-TextD text-base lg:text-lg font-medium mb-1 md:mb-2">
        {{ title }}
      </h3>
      <p class="text-TextMD text-lg font-normal">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  img: string;
  imgAlt: string;
}>();
</script>

<style scoped></style>

<template>
  <div
    class="boxShadow flex flex-col items-center justify-start rounded-3xl bg-white"
  >
    <div
      class="bg-BG2 py-5 lg:py-8 rounded-3xl w-full flex justify-center items-center relative"
    >
      <img
        :src="img"
        :alt="imgAlt"
        loading="lazy"
        class="w-full h-full max-w-full max-h-[136px] object-contain"
      />
    </div>
    <div class="py-5 lg:py-7 px-4 lg:px-6">
      <h3
        v-if="title"
        class="text-TextD text-base lg:text-lg font-medium mb-1 md:mb-2 text-center"
      >
        {{ title }}
      </h3>
      <p v-if="description" class="text-TextMD text-lg font-normal text-center">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  img: string;
  imgAlt: string;
}>();
</script>

<style scoped></style>

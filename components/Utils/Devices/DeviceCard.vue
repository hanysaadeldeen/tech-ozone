<template>
  <div
    class="rounded-3xl bg-white boxShadow max-sm:w-full md:max-w-[376px] max-md:mx-auto"
  >
    <div
      class="rounded-3xl flex justify-center items-center bg-[#E5E9F5] py-8 px-16 md:py-12 md:px-28"
    >
      <img :src="img" :alt="title" width="160" height="160" loading="lazy" />
    </div>
    <div class="p-6 md:py-10 md:px-8">
      <div>
        <h3 class="text-TextD text-lg md:text-xl font-medium mb-1 md:mb-2">
          {{ title }}
        </h3>
        <p class="text-TextM font-normal text-sm md:text-base mb-3 md:mb-6">
          {{ description }}
        </p>
        <!-- <ul
          class="relative mb-1 md:mb-2"
          v-for="(details, index) in details"
          :class="{ 'mb-0': index === 3 }"
        >
          <span
            class="absolute top-1/2 -translate-y-1/2 right-0 bg-[#4A5568] rounded-full w-1 h-1"
          ></span>
          <li class="mr-4 text-TextMD font-normal text-sm md:text-base">
            {{ details }}
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  img: string;
}>();
</script>

<style scoped></style>

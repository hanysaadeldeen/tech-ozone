<template>
  <!-- <nuxt-link :to="`/sectors/${id}`"> -->
  <div
    class="SectorCard boxShadow rounded-3xl py-6 px-10 md:py-12 md:px-20 flex flex-col gap-4 md:gap-6 w-full sm:w-[376px]"
  >
    <div
      class="boxShadow p-3 w-fit mx-auto rounded-2xl bg-SecondaryM flex items-center justify-center"
    >
      <slot />
    </div>
    <div>
      <h3
        class="text-TextD text-base md:text-xl font-semibold text-center mb-2"
      >
        {{ title }}
      </h3>
      <p class="text-base font-normal text-TextMD text-center">
        {{ description }}
      </p>
    </div>
  </div>
  <!-- </nuxt-link> -->
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  description: string;
}>();
</script>

<style scoped></style>

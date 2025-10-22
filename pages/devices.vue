<template>
  <main class="Devices" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <WhyTechDevices />
    <div class="max-w-[1208px] mx-auto"></div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>

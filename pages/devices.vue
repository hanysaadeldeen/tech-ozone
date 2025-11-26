<template>
  <main class="Devices" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <WhyTechDevices />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>

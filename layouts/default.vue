<template>
  <div>
    <AppHeader />
    <slot />
    <CTASection />
    <AppFooter />
    <WhatsUpScroll />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const siteName = computed(() =>
  locale.value === "ar"
    ? "الشركة السعودية للأوزون :: للمشاريع والحلول البيئي والصحية"
    : "Tech Ozone"
);

useSeoMeta({
  ogSiteName: () => siteName.value,
  applicationName: () => siteName.value,
});
</script>

<style></style>

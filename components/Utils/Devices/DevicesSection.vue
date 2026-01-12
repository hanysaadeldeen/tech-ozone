<template>
  <section
    class="SectorsSection max-2xl:px-6"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <section-title
      btnText="أنظمة TechOzone"
      description="أجهزة تعقيم للمنشآت الحيوية"
    />
    <div class="mb-20 relative">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
      >
        <DeviceCard
          v-for="device in DevicesImages?.results"
          :title="device.title_ar"
          :description="device.description_ar"
          :img="device.image"
        />
      </div>
    </div>

    <a href="https://techozone.sa/" target="_blank">
      <Button title="استعرض جميع أجهزة TechOzone" background="#092892" />
    </a>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
interface Device {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  image_url: string;
  order: number;
  is_active: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}
interface DevicesResponse {
  count: number;
  next: number;
  previous: number;
  results: Device[];
}
const { data: DevicesImages } = await useFetch<DevicesResponse>(
  "https://bk.saudiozone.com.sa/api/devices"
);
</script>

<style scoped></style>

<template>
  <main>
    <AppHeader />
    <div class="py-24 md:py-[200px] flex justify-center items-center">
      <div class="relative w-full text-center sm:min-w-[400px]">
        <h1
          class="text-9xl md:text-[220px] font-extrabold text-center text-[#ddd] select-none"
        >
          {{ error.statusCode }}
        </h1>
        <p
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl font-normal text-center text-gray-700 w-full"
        >
          {{
            locale === "ar"
              ? "عذراً، الصفحة التي تبحث عنها غير موجودة"
              : "Sorry, the page you are looking for could not be found"
          }}
        </p>
        <nuxt-link :to="$localePath('/')">
          <Button title="العودة للرئيسية" background="#092892" />
        </nuxt-link>
      </div>
    </div>
    <AppFooter />
  </main>
</template>
<script setup lang="ts">
const locale = useI18n().locale;

import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const error = computed(() => props.error);
</script>

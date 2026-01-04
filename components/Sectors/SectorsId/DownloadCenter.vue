<template>
  <section class="DownloadCenter max-2xl:px-6">
    <div
      class="mb-20 md:mb-[120px] max-w-[792px] mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8"
    >
      <h2
        class="text-xl md:text-2xl lg:text-3xl text-TextD font-semibold text-center"
      >
        ملفات وتقارير قابلة للتحميل
      </h2>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative"
    >
      <div
        v-for="client in Clients"
        class="DownloadCenterCard bg-white boxShadow rounded-3xl py-5 px-6 md:py-10 md:px-12 flex flex-col items-center justify-start gap-4 md:gap-6"
      >
        <div>
          <h3 class="text-TextD text-lg md:text-xl font-medium mb-2">
            {{ client.title }}
          </h3>
          <p class="text-TextMD text-base md:text-lg font-normal"></p>
        </div>
        <Button title="تحميل" background="#ED2024">
          <img
            src="~/assets/img/Utils/download-solid-full.svg"
            alt="download-solid-full"
            loading="lazy"
            class="size-5"
          />
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const Clients = [
  {
    id: 1,
    title: "تقرير تحليل جودة المياه",
    description: "PDF – 3.1 MB",
  },
  {
    id: 3,
    title: "تقرير فحص الهواء الداخلي",
    description: "PDF – 3.1 MB",
  },
  {
    id: 2,
    title: "تقرير صيانة شبكات المكيفات",
    description: "PDF – 3.1 MB",
  },
];
</script>

<style scoped></style>

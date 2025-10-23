<template>
  <main class="MainPage overflow-hidden" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <HomeHereTwo />
    <div class="max-w-[1208px] mx-auto">
      <CoresSection />
      <SectorsSection />
      <SuccessPartenerClients />
      <DevicesSection />
    </div>
    <WhyUsSection />
    <div class="max-w-[1208px] mx-auto">
      <StatisticsSection />
      <ClientsSection />
    </div>
  </main>
  <PhotoSection />
</template>

<script setup></script>

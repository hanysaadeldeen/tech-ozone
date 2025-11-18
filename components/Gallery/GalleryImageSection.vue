<template>
  <div class="section2 galleryImage">
    <h1
      class="text-TextD text-2xl lg:text-3xl lg:!leading-[54px] font-semibold text-center mb-2 lg:mb-4"
    >
      {{ title }}
    </h1>
    <div class="flex gap-2 justify-center">
      <div
        class="rounded-full galleryImage !py-2 !px-5 text-Secondary font-normal text-base"
      >
        {{ desc }}
      </div>
      <div
        class="rounded-full galleryImage !py-2 !px-5 text-Secondary font-normal text-base"
      >
        {{ date }}
      </div>
    </div>
    <div class="flex gap-2 w-full overflow-hidden mt-8 lg:mt-10">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="overflow-hidden group cursor-pointer rounded-3xl transition-all duration-500 h-[450px]"
        @mouseenter="setActive(i)"
        :class="[
          active === i ? 'flex-[4] max-w-[600px]' : 'flex-[1] max-w-[150px]',
        ]"
      >
        <img
          :src="img"
          width="600"
          loading="lazy"
          height="450"
          class="w-full brightness-[0.7] group-hover:brightness-100 h-full object-cover transition-all duration-300"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const active = ref(0);

const setActive = (i: number) => {
  active.value = i;
};

defineProps<{
  title: string;
  desc: string;
  date: string;
  images: string[];
}>();
</script>

<style scoped>
.galleryImage {
  box-shadow: 0px 0px 16.74px 8.37px #0928920a;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
}

.section2 {
  margin-bottom: 170px;
}

@media (max-width: 768px) {
  .section2 {
    margin-bottom: 100px;
  }
}
</style>

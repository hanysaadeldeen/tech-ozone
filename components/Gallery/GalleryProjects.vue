<template>
  <div
    class="boxShadow rounded-3xl group overflow-hidden cursor-pointer relative"
  >
    <div class="absolute bottom-8 right-10 z-20">
      <h1 class="text-2xl font-medium text-white mb-2">
        تطهير الكعبة المشرفة بالكامل
      </h1>
      <div class="text-TextL text-base font-normal flex items-center gap-2">
        <span>مكة المكرمة</span>
        <span>.</span>
        <span>2020م</span>
      </div>
    </div>
    <img
      :src="img"
      alt="gallery"
      width="584"
      height="400"
      class="w-full h-full brightness-[0.25] group-hover:brightness-100 transition-all ease-in-out duration-300 rounded-3xl group-hover:scale-110"
      @click="$emit('openModalImg', img)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string;
}

defineProps<Props>();
</script>

<style scoped></style>

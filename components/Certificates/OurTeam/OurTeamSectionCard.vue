<template>
  <div
    class="boxShadow flex flex-col items-center justify-start rounded-3xl bg-white"
  >
    <div
      class="bg-BG2 py-6 rounded-3xl w-full flex justify-center items-center relative"
    >
      <img
        :src="memberData?.image_url"
        :alt="memberData?.name_ar"
        width="80"
        height="80"
        class="w-full h-full max-w-[80px] max-h-[80px] object-contain rounded-xl"
      />
    </div>
    <div class="p-4 md:py-5 lg:py-7 lg:px-6">
      <h3
        v-if="memberData?.name_ar"
        class="text-TextD text-base lg:text-lg font-medium mb-1 md:mb-2 text-center"
      >
        {{ memberData?.name_ar }}
      </h3>
      <p
        v-if="memberData?.position_ar"
        class="text-TextMD text-lg font-normal text-center"
      >
        {{ memberData?.position_ar }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamMember } from "~/types/teamMember";

defineProps<{
  memberData: TeamMember | null;
}>();
</script>

<style scoped></style>

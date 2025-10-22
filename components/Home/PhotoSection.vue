<template>
  <section class="overflow-hidden w-full">
    <div style="height: 360px" class="mt-4 mx-auto">
      <Vue3Marquee
        :duration="50"
        :pause-on-hover="false"
        :direction="locale === 'ar' ? 'reverse' : ''"
      >
        <img
          v-for="item in Bottom"
          :src="item"
          alt="bottom"
          class="object-contain inline-block mx-2 max-w-[664px] max-h-[360px] rounded-xl"
        />
      </Vue3Marquee>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();

import eight from "~/assets/img/Gallery/eight.webp";
import eighteen from "~/assets/img/Gallery/eighteen.webp";
import fivteen from "~/assets/img/Gallery/fivteen.webp";
import seven from "~/assets/img/Gallery/seven.webp";
import thrteen from "~/assets/img/Gallery/thrteen.webp";
import twenteThree from "~/assets/img/Gallery/twenteThree.webp";

const Bottom = [eight, eighteen, fivteen, seven, thrteen, twenteThree];
</script>

<style scoped></style>

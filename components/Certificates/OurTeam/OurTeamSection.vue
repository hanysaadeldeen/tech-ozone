<template>
  <section class="LocalCertificates mx-auto max-2xl:px-6">
    <section-title
      btnText="فريقنا"
      description="خبراء يقودون الابتكار في تقنية الأوزون"
    />
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 relative"
    >
      <OurTeamSectionCard
        v-for="member in data?.results"
        :key="member.id"
        :memberData="member"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TeamMember } from "~/types/teamMember";

export interface TeamResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: TeamMember[];
}

const { data } = await useFetch<TeamResponse>(
  "https://bk.saudiozone.com.sa/api/teams"
);
</script>

<style scoped></style>

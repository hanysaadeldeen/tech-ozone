<template>
  <section
    class="SectorsSection max-md:px-6"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <section-title
      btnText="القطاعات"
      description="نقود ثورة التعقيم بتقنية تك اوزون من قلب المملكة الى جميع قطاعاتها"
    />
    <div class="mb-20 relative">
      <div class="flex justify-center gap-6 md:gap-10 flex-wrap">
        <SectorCard
          v-for="(card, index) in data?.results"
          :key="card.id"
          :title="card.name_ar"
          :description="card.description_ar"
          :id="(index + 1).toString()"
        >
          <img
            :src="card.icon_url"
            :alt="card.name_ar"
            width="24"
            height="24"
          />
        </SectorCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();

export interface Sector {
  id: number;
  icon: string;
  icon_url: string;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PaginatedSectorsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Sector[];
}

const { data } = useFetch<PaginatedSectorsResponse>(
  "https://bk.saudiozone.com.sa/api/sector"
);
</script>

<style scoped></style>

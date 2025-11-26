<template>
  <section
    class="StatisticsSection max-2xl:px-6"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <div class="max-w-[912px] mx-auto">
      <section-title
        btnText="الإحصائيات"
        description="أرقام تعكس خبرتنا وإنجازاتنا"
      />
      <div class="relative">
        <div
          class="max-md:hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 w-full h-full max-w-[704px] max-h-[704px]"
        >
          <img
            src="~/assets/img/Statistics.svg"
            alt="Statistics"
            width="704"
            height="704"
            class="max-w-full mx-auto"
            loading="lazy"
          />
        </div>
        <div class="flex justify-center">
          <StatisticsCard
            :number="14"
            title="سنوات خبرة"
            description="في مجال التطهير بالأوزون"
          />
        </div>
        <div
          class="flex justify-between gap-6 md:gap-10 items-center max-md:flex-col my-6 md:my-20"
        >
          <StatisticsCard
            :number="16"
            title="قطاع نخدمه"
            description="عبر المملكة العربية السعودية"
          />
          <StatisticsCard
            :number="184"
            title="مشروع منجز"
            description="بنجاح وجودة عالية"
          />
        </div>
        <div class="flex justify-center">
          <StatisticsCard
            :number="100"
            title="عميل وشريك"
            description="من جهات حكومية وخاصة"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-[#EEF3FF] rounded-full py-4 md:py-6 px-6 md:px-8 flex items-center gap-3 mt-10 w-fit mx-auto md:mt-20"
    >
      <img
        src="~/assets/img/verify.svg"
        alt="verify"
        width="40"
        height="40"
        loading="lazy"
      />
      <h4 class="text-[#4A5568] font-normal text-base md:text-xl lg:text-2xl">
        الشركة السعودية للأوزون معتمدة ومرخصة من قبل الجهات الرسمية والتشريعة في
        المملكة العربية السعودية
      </h4>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped></style>

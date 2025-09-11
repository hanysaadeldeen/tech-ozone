<template>
    <section
        class="StatisticsSection max-2xl:px-6 py-[120px] bg-[linear-gradient(to_right,#43236A_0%,#10278C_20%,#10278C_80%,#43236A_100%)]">

        <div class="max-w-[912px] mx-auto">
            <div class="relative">
                <div
                    class="max-md:hidden absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2  z-10 w-full h-full max-w-[704px] max-h-[704px]">
                    <img src="~/assets/img/SectorStatisticShape.svg" alt="SectorStatisticShape.svg" width="704"
                        height="704" class="max-w-full mx-auto" loading="lazy">
                </div>
                <div class="flex justify-center z-20  relative">
                    <SectorsStatisticsCard :number="14" title="سنوات خبرة" description="في مجال التطهير بالأوزون" />
                </div>
                <div
                    class="flex justify-between gap-6 md:gap-10 items-center  max-md:flex-col my-6 md:my-20 z-20  relative">
                    <SectorsStatisticsCard :number="16" title="قطاع نخدمه" description="عبر المملكة العربية السعودية" />
                    <SectorsStatisticsCard :number="184" title="مشروع منجز" description="بنجاح وجودة عالية" />
                </div>
                <div class="flex justify-center z-20  relative">
                    <SectorsStatisticsCard :number="100" title="عميل وشريك" description="من جهات حكومية وخاصة" />
                </div>
            </div>


        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
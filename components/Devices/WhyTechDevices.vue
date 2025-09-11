<template>
    <section
        class="WhyTechDevices max-2xl:px-6 py-[120px] bg-[linear-gradient(to_right,#43236A_0%,#10278C_20%,#10278C_80%,#43236A_100%)]">
        <div class="max-w-[1208px] mx-auto">
            <section-title isWhite btnText=" لما أجهزة TechOzone"
                description=" أجهزة عالية الاعتمادية تلبي احتياجات القطاعات الكبرى" />
            <div class="flex flex-col gap-6 md:gap-10 relative">
                <div
                    class="max-lg:hidden absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2   z-10 w-full h-full max-w-[704px] max-h-[704px]">
                    <img src="~/assets/img/WhyShape.svg" alt="WhyShape" class="max-w-full mx-auto" loading="lazy"
                        width="580" height="380">
                </div>
                <div class="flex justify-center lg:justify-between gap-6 max-md:flex-col z-20">
                    <WhyTechDevicesCard v-for="card in CorCards.slice(0, 2)" :key="card.id" :title="card.title"
                        :description="card.description" :background="card.background">
                        <img :src="card.img" :alt="card.title" width="24" height="24">
                    </WhyTechDevicesCard>
                </div>
                <div class="flex justify-center lg:justify-between gap-6 max-md:flex-col z-20">
                    <WhyTechDevicesCard v-for="card in CorCards.slice(2, 4)" :key="card.id" :title="card.title"
                        :description="card.description" :background="card.background">
                        <img :src="card.img" :alt="card.title" width="24" height="24">
                    </WhyTechDevicesCard>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

import location from "../../../assets/img/WhyUs/location.svg"
import setting from "../../../assets/img/WhyUs/setting.svg"
import verify from "../../../assets/img/WhyUs/verify.svg"
import flask from "../../../assets/img/WhyUs/flask.svg"
const CorCards = [
    {
        id: 1,
        title: "كفاءة تشغيل عالية",
        description: "أجهزتنا مصممة لتوفير نتائج سريعة مع استهلاك أقل للموارد.",
        img: location,
        background: "#ED2024"
    },
    {
        id: 2,
        title: "استدامة وصديقة للبيئة",
        description: "نوفّر حلول تطهير دون مواد كيميائية، آمنة على الإنسان والبيئة.",
        img: setting,
        background: "#ED2024"
    },
    {
        id: 3,
        title: "حلول مخصصة للقطاعات",
        description: "نقدّم تجهيزات متنوعة تناسب احتياجات القطاعات الصناعية، الطبية، والزراعية.",
        img: verify,
        background: "#ED2024"
    },
    {
        id: 4,
        title: "تقنيات مدعومة علميًا ومعتمدة",
        description: "نستخدم أنظمة أوزونية بشهادات دولية ومعايير بيئية موثوقة.",
        img: flask,
        background: "#ED2024"
    },
]

</script>

<style scoped></style>
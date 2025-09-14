<template>
    <section class="CoreSection max-2xl:px-6 relative">
        <section-title btnText="طريقة TechOzone" description="خدمة متكاملة تبدأ بالتوريد وتنتهي بالدعم الفني" />



        <div class="flex flex-col gap-6 mb-20 relative">
            <div
                class="max-lg:hidden absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2   -z-10 w-full h-full max-w-[580px] max-h-[380px]">
                <img src="~/assets/img/CoreShape.svg" alt="CoreShape" class="max-w-full mx-auto" loading="lazy"
                    width="580" height="380">
            </div>
            <div class="flex justify-between gap-6 max-md:flex-col ">
                <CorCard v-for="card in CorCards.slice(0, 2)" :key="card.id" :number="card.number" :title="card.title"
                    :description="card.description" :background="card.background" />
            </div>
            <div class="flex justify-between gap-6 max-md:flex-col ">
                <CorCard v-for="card in CorCards.slice(2, 4)" :key="card.id" :number="card.number" :title="card.title"
                    :description="card.description" :background="card.background" />
            </div>
        </div>
        <Button title="استعرض المزيد عن TechOzone" background="#092892" link="/about-us" />
    </section>
</template>

<script setup lang="ts">


const CorCards = [
    {
        id: 1,
        number: 1,
        title: "التوريد والتركيب",
        description: "توريد أجهزة أوزونية عالية الجودة وتركيبها وفق معايير السلامة ومتطلبات الموقع.",
        background: "#ED2024"
    },
    {
        id: 2,
        number: 2,
        title: "التدريب",
        description: "تدريب الطواقم الفنية على التشغيل الآمن والصيانة اليومية للنظام.",
        background: "#092892"
    },
    {
        id: 3,
        number: 3,
        title: "التشغيل",
        description: "تشغيل الأنظمة ميدانيًا ومعايرتها بدقة لضمان الكفاءة والفعالية الفورية.",
        background: "#092892"
    },
    {
        id: 4,
        number: 4,
        title: "الصيانة والدعم الفني",
        description: "صيانة دورية واستجابة فنية سريعة لضمان استمرارية الأداء بأعلى كفاءة.",
        background: "#ED2024"
    }
]

</script>

<style scoped></style>
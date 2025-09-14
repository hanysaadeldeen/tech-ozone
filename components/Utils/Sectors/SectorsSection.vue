<template>
    <section class="SectorsSection max-md:px-6 ">
        <section-title btnText="القطاعات" description="نخدم قطاعات حساسة... بحلول أوزونية آمنة وفعالة" />
        <div class="mb-20 relative">
            <div class="flex justify-center gap-6 md:gap-10  flex-wrap">

                <SectorCard v-for="(card, index) in CorCards" :key="card.id" :title="card.title"
                    :description="card.description" :id="(index + 1).toString()">
                    <img :src="card.img" :alt="card.title" width="24" height="24">
                </SectorCard>
            </div>
        </div>
        <Button title="استعرض كل القطاعات" background="#092892" link="/sectors" />
    </section>
</template>

<script setup lang="ts">
import sectorimg from "../../../assets/img/sectorimg.svg"



const CorCards = [
    {
        id: 1,
        img: sectorimg,
        title: "الحج والعمرة",
        description: "خدمة وتعقيم المشاعر المقدسة.",
    },
    {
        id: 2,
        img: sectorimg,
        title: "القطاع الصحي",
        description: "تعقيم طبي موثوق للمنشآت.",
    },
    {
        id: 3,
        img: sectorimg,
        title: "قطاع الدواجن",
        description: "تعقيم مزارع وإنتاج الدواجن.",
    },
    {
        id: 4,
        img: sectorimg,
        title: "القطاع الزراعي",
        description: "تعقيم التربة والمياه الزراعية.",
    },
    {
        id: 5,
        img: sectorimg,
        title: "قطاع التمور",
        description: "تعقيم التمور وجودة التخزين.",
    },
    {
        id: 6,
        img: sectorimg,
        title: "قطاع الفنادق والسياحة",
        description: "تعقيم الفنادق والمرافق السياحية.",
    }
]

</script>

<style scoped></style>
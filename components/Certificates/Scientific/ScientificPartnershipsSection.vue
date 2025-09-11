<template>
    <section class="Scientific mx-auto max-2xl:px-6">
        <section-title btnText="التحالفات العلمية والبحثية"
            description="شراكات أكاديمية تدعم الابتكار والتطوير في تقنيات الأوزون" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10  relative">
            <ScientificPartnershipsSectionCard v-for="certification in Partnerships" :title="certification.description"
                :description="certification.title" :img="certification.img" :alt="certification.imgAlt" />
        </div>
    </section>
</template>


<script setup lang="ts">

import hajjUmrah from "../../../assets/img/Certificates/Scientific/hajjUmrah.webp"
import kingSaud from "../../../assets/img/Certificates/Scientific/kingSaud.webp"
import nationalResearch from "../../../assets/img/Certificates/Scientific/nationalResearch.webp"
import taifUniversity from "../../../assets/img/Certificates/Scientific/taifUniversity.webp"

const Partnerships = [
    {
        title: "Taif University",
        description: "جامعة الطائف",
        img: taifUniversity,
        imgAlt: "Taif University Logo"
    },
    {
        title: "King Saud University",
        description: "جامعة الملك سعود",
        img: kingSaud,
        imgAlt: "King Saud University Logo"
    },
    {
        title: "National Research Center",
        description: "المركز القومي للبحوث",
        img: nationalResearch,
        imgAlt: "National Research Center Logo"
    },
    {
        title: "Hajj & Umrah Research Institute",
        description: "معهد خادم الحرمين الشريفين لأبحاث الحج والعمرة",
        img: hajjUmrah,
        imgAlt: "Hajj & Umrah Research Institute Logo"
    }
];


</script>

<style scoped></style>
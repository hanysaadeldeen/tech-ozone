<template>
    <section class="InternationalCertificates mx-auto max-2xl:px-6">
        <section-title btnText="الشهادات والاعتمادات الدولية"
            description="ملتزمون بأعلى معايير الجودة، البيئة، والسلامة" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10  relative">
            <InternationalCertificatesCard v-for="certification in Certifications" :title="certification.title"
                :description="certification.description" :img="certification.img" :alt="certification.imgAlt" />
        </div>
    </section>
</template>


<script setup lang="ts">

import InternationalOzone from "../../assets/img/Certificates/International/a3.webp"
import NationalCenter from "../../assets/img/Certificates/International/alnakel.webp"
import FDA from "../../assets/img/Certificates/International/fda.webp"
import USDAOrganic from "../../assets/img/Certificates/International/organic.webp"
import USEnvironmental from "../../assets/img/Certificates/International/unitedStarte.webp"
import USDA from "../../assets/img/Certificates/International/usda.webp"

const Certifications = [
    {
        title: "US Environmental Protection Agency",
        description: "تسجيل وكالة حماية البيئة الأمريكية",
        img: USEnvironmental,
        imgAlt: "US Environmental Protection Agency Logo"
    },
    {
        title: "National Center for Palms & Dates",
        description: "اعتماد المركز الوطني للنخيل والتمور",
        img: NationalCenter,
        imgAlt: "National Center for Palms & Dates Logo"
    },
    {
        title: "FDA",
        description: "موافقة هيئة الغذاء والدواء الأمريكية",
        img: FDA,
        imgAlt: "FDA Logo"
    },
    {
        title: "International Ozone Association",
        description: "عضوية الجمعية الدولية للأوزون",
        img: InternationalOzone,
        imgAlt: "International Ozone Association Logo"
    },
    {
        title: "USDA",
        description: "اعتماد وزارة الزراعة الأمريكية",
        img: USDA,
        imgAlt: "USDA Logo"
    },
    {
        title: "USDA Organic",
        description: "اعتماد وزارة الزراعة الأمريكية للمنتجات العضوية",
        img: USDAOrganic,
        imgAlt: "USDA Organic Logo"
    }
];

</script>

<style scoped></style>
<template>
    <section class="LocalCertificates mx-auto max-2xl:px-6">
        <section-title btnText="فريقنا" description="خبراء يقودون الابتكار في تقنية الأوزون" />
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10  relative">
            <OurTeamSectionCard v-for="certification in OurTeam" :title="certification.title"
                :description="certification.description" :img="certification.img" :alt="certification.imgAlt" />
        </div>
    </section>
</template>


<script setup lang="ts">

import male from "../../../assets/img/Certificates/team/male.svg"
import femal from "../../../assets/img/Certificates/team/femal.svg"

const OurTeam = [
    {
        title: "د/صالح العامر",
        description: "استشاري جودة الغذاء والبيئة",
        img: male,
        imgAlt: "صورة د/صالح العامر"
    },
    {
        title: "حسنا عبدالله العنزي",
        description: "إخصائي كيمياء",
        img: femal,
        imgAlt: "صورة حسنا عبدالله العنزي"
    },
    {
        title: "رفقه العتيبي",
        description: "تعقيم ومكافحة العدوى",
        img: femal,
        imgAlt: "صورة رفقه العتيبي"
    },
    {
        title: "د/فهد تركستاني",
        description: "أستاذ الكيمياء (جامعة أم القرى)",
        img: male,
        imgAlt: "صورة د/فهد تركستاني"
    },
    {
        title: "د/سعد الجاسم",
        description: "أكاديمي متخصص في المياه",
        img: male,
        imgAlt: "صورة د/سعد الجاسم"
    },
    {
        title: "د/حسين أبو الريش",
        description: "صحة عامة (كلية العلوم التطبيقية)",
        img: male,
        imgAlt: "صورة د/حسين أبو الريش"
    },
    {
        title: "د/حسان كفافي",
        description: "إخصائي الطب الشرعي",
        img: male,
        imgAlt: "صورة د/حسان كفافي"
    },
    {
        title: "د/راشد باش أعيان",
        description: "استشاري مكافحة عدوى",
        img: male,
        imgAlt: "صورة د/راشد باش أعيان"
    },
    {
        title: "أحمد المالكي",
        description: "إخصائي ميكروبيولوجي",
        img: male,
        imgAlt: "صورة أحمد المالكي"
    },
    {
        title: "د/ابراهيم عبدالله",
        description: "إخصائي سلامة وصحة مهنية",
        img: male,
        imgAlt: "صورة د/ابراهيم عبدالله"
    },
    {
        title: "روان المديفع",
        description: "إخصائي الجودة والسلامة",
        img: femal,
        imgAlt: "صورة روان المديفع"
    },
    {
        title: "د/طارق الطاهري",
        description: "علوم الكيمياء (جامعة الطائف)",
        img: male,
        imgAlt: "صورة د/طارق الطاهري"
    },
    {
        title: "د/عبدالرحمن الدرمكي",
        description: "كلية الزراعة (جامعة الملك سعود)",
        img: male,
        imgAlt: "صورة د/عبدالرحمن الدرمكي"
    },
    {
        title: "شائق الجدي",
        description: "إخصائي بيئي",
        img: male,
        imgAlt: "صورة شائق الجدي"
    },
    {
        title: "سلطان صوصاوي",
        description: "إخصائي المختبر والتعقيم",
        img: male,
        imgAlt: "صورة سلطان صوصاوي"
    },
    {
        title: "أشرف نجم الدين",
        description: "أخصائي تقنيات الأوزون",
        img: male,
        imgAlt: "صورة أشرف نجم الدين"
    }
];



</script>

<style scoped></style>
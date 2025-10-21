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
        v-for="certification in OurTeam"
        :title="certification.title"
        :description="certification.description"
        :img="certification.img"
        :alt="certification.imgAlt"
        :imgAlt="certification.imgAlt"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import male from "../../../assets/img/Certificates/team/male.svg";
import femal from "../../../assets/img/Certificates/team/femal.svg";
import drSaleh from "../../../assets/img/Certificates/team/DrSalehAlamer.svg";
import hasnaAbdullahAlenzi from "../../../assets/img/Certificates/team/hasnaAbdullahAlenzi.svg";
import rufaAlOtaibi from "../../../assets/img/Certificates/team/rufaAlOtaibi.svg";
import fahdTurkistani from "../../../assets/img/Certificates/team/fahdTurkistani.svg";
import saadAlhasem from "../../../assets/img/Certificates/team/saadAlhasem.svg";
import husseinAbuAlReesh from "../../../assets/img/Certificates/team/husseinAbuAlReesh.svg";
import hassanKkafi from "../../../assets/img/Certificates/team/hassanKkafi.svg";
import ahmedAlMalki from "../../../assets/img/Certificates/team/ahmedAlMalki.svg";
import ibrahimAbdullah from "../../../assets/img/Certificates/team/ibrahimAbdullah.svg";
import rawanAlMadaf from "../../../assets/img/Certificates/team/rawanAlMadaf.svg";
import tareqAltahiri from "../../../assets/img/Certificates/team/tareqAltahiri.svg";
import sultanSosawi from "../../../assets/img/Certificates/team/sultanSosawi.svg";
import ashrafNajmAlDeen from "../../../assets/img/Certificates/team/ashrafNajmAlDeen.svg";

const OurTeam = [
  {
    title: "د/صالح العامر",
    description: "استشاري جودة الغذاء والبيئة",
    img: drSaleh,
    imgAlt: "صورة د/صالح العامر",
  },
  {
    title: "حسنا عبدالله العنزي",
    description: "إخصائي كيمياء",
    img: hasnaAbdullahAlenzi,
    imgAlt: "صورة حسنا عبدالله العنزي",
  },
  {
    title: "رفقه العتيبي",
    description: "تعقيم ومكافحة العدوى",
    img: rufaAlOtaibi,
    imgAlt: "صورة رفقه العتيبي",
  },
  {
    title: "د/فهد تركستاني",
    description: "أستاذ الكيمياء (جامعة أم القرى)",
    img: fahdTurkistani,
    imgAlt: "صورة د/فهد تركستاني",
  },
  {
    title: "د/سعد الجاسم",
    description: "أكاديمي متخصص في المياه",
    img: saadAlhasem,
    imgAlt: "صورة د/سعد الجاسم",
  },
  {
    title: "د/حسين أبو الريش",
    description: "صحة عامة (كلية العلوم التطبيقية)",
    img: husseinAbuAlReesh,
    imgAlt: "صورة د/حسين أبو الريش",
  },
  {
    title: "د/حسان كفافي",
    description: "إخصائي الطب الشرعي",
    img: hassanKkafi,
    imgAlt: "صورة د/حسان كفافي",
  },
  {
    title: "د/راشد باش أعيان",
    description: "استشاري مكافحة عدوى",
    img: male,
    imgAlt: "صورة د/راشد باش أعيان",
  },
  {
    title: "أحمد المالكي",
    description: "إخصائي ميكروبيولوجي",
    img: ahmedAlMalki,
    imgAlt: "صورة أحمد المالكي",
  },
  {
    title: "د/ابراهيم عبدالله",
    description: "إخصائي سلامة وصحة مهنية",
    img: ibrahimAbdullah,
    imgAlt: "صورة د/ابراهيم عبدالله",
  },
  {
    title: "روان المديفع",
    description: "إخصائي الجودة والسلامة",
    img: rawanAlMadaf,
    imgAlt: "صورة روان المديفع",
  },
  {
    title: "د/طارق الطاهري",
    description: "علوم الكيمياء (جامعة الطائف)",
    img: tareqAltahiri,
    imgAlt: "صورة د/طارق الطاهري",
  },
  {
    title: "د/عبدالرحمن الدرمكي",
    description: "كلية الزراعة (جامعة الملك سعود)",
    img: male,
    imgAlt: "صورة د/عبدالرحمن الدرمكي",
  },
  {
    title: "شائق الجدي",
    description: "إخصائي بيئي",
    img: male,
    imgAlt: "صورة شائق الجدي",
  },
  {
    title: "سلطان صوصاوي",
    description: "إخصائي المختبر والتعقيم",
    img: sultanSosawi,
    imgAlt: "صورة سلطان صوصاوي",
  },
  {
    title: "أشرف نجم الدين",
    description: "أخصائي تقنيات الأوزون",
    img: ashrafNajmAlDeen,
    imgAlt: "صورة أشرف نجم الدين",
  },
];
</script>

<style scoped></style>

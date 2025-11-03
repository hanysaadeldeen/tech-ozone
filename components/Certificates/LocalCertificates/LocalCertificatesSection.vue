<template>
  <section class="LocalCertificates mx-auto max-2xl:px-6">
    <section-title
      btnText="الشراكات الحكومية والمبادرات المحلية"
      description="شراكات استراتيجية تعزز ثقة عملائنا"
    />
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative"
    >
      <LocalCertificatesSectionCard
        v-for="certification in LocalCertificates"
        :title="certification.description"
        :description="certification.title"
        :img="certification.img"
        :alt="certification.imgAlt"
        :imgAlt="certification.imgAlt"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import saudiMinistry from "../../../assets/img/Certificates/LocalCertificates/saudiMinistry.webp";
import ministryEnvironment from "../../../assets/img/Certificates/LocalCertificates/ministryEnvironment.webp";
import nationalCenter from "../../../assets/img/Certificates/LocalCertificates/nationalCenter.webp";
import grandMosque from "../../../assets/img/Certificates/LocalCertificates/grandMosque.webp";
import saudiGround from "../../../assets/img/Certificates/LocalCertificates/saudiGround.webp";
import royalCommission from "../../../assets/img/Certificates/LocalCertificates/royalCommission.webp";
import shoaaAlharefa from "../../../assets/img/Certificates/LocalCertificates/shoaaAlharefa.webp";
import alQassim from "../../../assets/img/Certificates/LocalCertificates/alQassim.webp";
import kingAbdullah from "../../../assets/img/Certificates/LocalCertificates/kingAbdullah.webp";
import ministryOfHealth from "../../../assets/img/Certificates/LocalCertificates/وزارة الصحة.svg";
import Facilities from "../../../assets/img/Certificates/LocalCertificates/منشأت.svg";
import Enrichingfeelings from "../../../assets/img/Certificates/LocalCertificates/اثراء المشاعر.svg";
import BUDGET from "../../../assets/img/Certificates/LocalCertificates/BUDGET.svg";
import Medicalservices from "../../../assets/img/Certificates/LocalCertificates/الخدمات الطبية.svg";
import NationalPoultry from "../../../assets/img/Certificates/LocalCertificates/دواجن الوطنية.svg";
import AlShaqranforair from "../../../assets/img/Certificates/LocalCertificates/الشقران للتكييف.svg";
import NationalforPalms from "../../../assets/img/Certificates/LocalCertificates/المركز الوطني للنخيل  والتمور.svg";

const LocalCertificates = [
  {
    title: "وزارة الصحة",
    description: "Ministry Of Health",
    img: ministryOfHealth,
    imgAlt: "وزارة الصحة",
  },
  {
    description: "الرئاسة العامة لشؤون المسجد الحرام والمسجد النبوي",
    img: grandMosque,
    imgAlt:
      "General Presidency for the Affairs of the Grand Mosque and the Prophet's Mosque Logo",
  },
  {
    title: "Saudi Ministry of Islamic Affairs",
    description: "وزارة الشؤون الإسلامية والدعوة والإرشاد",
    img: saudiMinistry,
    imgAlt: "Saudi Ministry of Islamic Affairs Logo",
  },

  {
    title: "Ministry of Environment & Agriculture",
    description: "وزارة البيئة والمياه والزراعة",
    img: ministryEnvironment,
    imgAlt: "Ministry of Environment & Agriculture Logo",
  },
  {
    title: "الهيئة العامة للمنشآت الصغيرة والمتوسطة",
    description: "Small & Medium Enterprises General Authority",
    img: Facilities,
    imgAlt: "الهيئة العامة للمنشآت الصغيرة والمتوسطة",
  },
  {
    title: "King Abdullah Medical City",
    description: "مدينة الملك عبدالله الطبية",
    img: kingAbdullah,
    imgAlt: "King Abdullah Medical City Logo",
  },
  {
    title: "National Center for Wildlife",
    description: "المركز الوطني لتنمية الحياة الفطرية",
    img: nationalCenter,
    imgAlt: "National Center for Wildlife Logo",
  },

  {
    title: "Al-Qassim Municipality",
    description: "أمانة منطقة القصيم",
    img: alQassim,
    imgAlt: "Al-Qassim Municipality Logo",
  },
  {
    title: "اثراء المشاعر للتطوير ",
    description: "ITHRAA ALMASHAIR DEVELOPMENT",
    img: Enrichingfeelings,
    imgAlt: "اثراء المشاعر للتطوير",
  },

  {
    title: "Saudi Ground Services Company",
    description: "الشركة السعودية للخدمات الأرضية",
    img: saudiGround,
    imgAlt: "Saudi Ground Services Company Logo",
  },
  {
    title: "المركز الوطني للنخيل والتمور",
    description: "National Center for Palms and Moors",
    img: NationalforPalms,
    imgAlt: "المركز الوطني للنخيل والتمور",
  },
  {
    title: "Royal Commission for AlUla",
    description: "الهيئة الملكية لمحافظة العلا",
    img: royalCommission,
    imgAlt: "Royal Commission for AlUla Logo",
  },
  {
    title: "الخدمات الطبية للقوات المسلحة",
    description: "Armed Forces Medical Services",
    img: Medicalservices,
    imgAlt: "الخدمات الطبية للقوات المسلحة",
  },

  {
    title: "تأجير السيارات والشاحنات ",
    description: "CAR AND TRUCK RENTAL",
    img: BUDGET,
    imgAlt: "تأجير السيارات والشاحنات",
  },

  {
    title: "دواجن الوطنية",
    description: "Al Watania Poultry",
    img: NationalPoultry,
    imgAlt: "دواجن الوطنية",
  },
  {
    title: "الشقران للتكييف",
    description: "Al Shaqran for air Conditioning",
    img: AlShaqranforair,
    imgAlt: "الشقران للتكييف",
  },

  {
    title: "Shoaa Al-Harefa Private Schools",
    description: "مدارس شعاع الحرف الأهلية",
    img: shoaaAlharefa,
    imgAlt: "Shoaa Al-Harefa Private Schools Logo",
  },
];
</script>

<style scoped></style>

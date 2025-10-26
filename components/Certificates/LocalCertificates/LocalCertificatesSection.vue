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

const LocalCertificates = [
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
    title: "National Center for Wildlife",
    description: "المركز الوطني لتنمية الحياة الفطرية",
    img: nationalCenter,
    imgAlt: "National Center for Wildlife Logo",
  },
  {
    description: "الرئاسة العامة لشؤون المسجد الحرام والمسجد النبوي",
    img: grandMosque,
    imgAlt:
      "General Presidency for the Affairs of the Grand Mosque and the Prophet's Mosque Logo",
  },
  {
    title: "Saudi Ground Services Company",
    description: "الشركة السعودية للخدمات الأرضية",
    img: saudiGround,
    imgAlt: "Saudi Ground Services Company Logo",
  },
  {
    title: "Royal Commission for AlUla",
    description: "الهيئة الملكية لمحافظة العلا",
    img: royalCommission,
    imgAlt: "Royal Commission for AlUla Logo",
  },
  {
    title: "Shoaa Al-Harefa Private Schools",
    description: "مدارس شعاع الحرف الأهلية",
    img: shoaaAlharefa,
    imgAlt: "Shoaa Al-Harefa Private Schools Logo",
  },
  {
    title: "Al-Qassim Municipality",
    description: "أمانة منطقة القصيم",
    img: alQassim,
    imgAlt: "Al-Qassim Municipality Logo",
  },
  {
    title: "King Abdullah Medical City",
    description: "مدينة الملك عبدالله الطبية",
    img: kingAbdullah,
    imgAlt: "King Abdullah Medical City Logo",
  },
];
</script>

<style scoped></style>

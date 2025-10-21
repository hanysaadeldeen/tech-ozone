<template>
  <section class="SuccessPartenerClients max-2xl:px-6">
    <section-title
      btnText="شركاء النجاح"
      description="عملاء يثقون بخدماتنا المتكاملة"
    />
    <div class="relative">
      <div class="flex flex-wrap justify-center gap-6 lg:gap-10">
        <SuccessPartenerClientsCard v-for="client in Clients">
          <img
            :src="client.img"
            :alt="client.title"
            width="120"
            height="120"
            loading="lazy"
          />
        </SuccessPartenerClientsCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Imports
import AIUIA from "../../../assets/img/Utils/clients/aiuia.svg";
import ALQASEM from "../../../assets/img/Utils/clients/alqasem.svg";
import ALS from "../../../assets/img/Utils/clients/als.svg";
import FDA from "../../../assets/img/Utils/clients/FDA.svg";
import GENERAL_AUTHORITY_OF_SURVEY from "../../../assets/img/Utils/clients/generalAuthorityOfSurvey.svg";
import GENERAL_PRESIDENCY_FOR_THE_AFFAIRS_OF_THE_GRAND_MOSQUE from "../../../assets/img/Utils/clients/generalPresidencyForTheAffairsOfTheGrandMosque.svg";
import IOA from "../../../assets/img/Utils/clients/IOA.svg";
import KING_ABDULLAH_CITY from "../../../assets/img/Utils/clients/kingAbdullahCity.svg";
import KING_SAUD_UNIVERSITY from "../../../assets/img/Utils/clients/kingSaudUniversity.svg";
import MINISTRY_OF_ENVIRONMENT_WATER_AND_AGRICULTURE from "../../../assets/img/Utils/clients/ministryOfEnvironmentWaterAndAgriculture.svg";
import MINISTRY_OF_HEALTH from "../../../assets/img/Utils/clients/ministryOfHealth.svg";
import MINISTRY_OF_ISLAMIC_AFFAIRS from "../../../assets/img/Utils/clients/ministryOfIslamicAffairs.svg";
import MONSHAAT_21 from "../../../assets/img/Utils/clients/MONSHAAT.svg";
import NATIONAL_CENTER_FOR_WILD from "../../../assets/img/Utils/clients/nationalCenterForWild.svg";
import NATION_CENTER_FOR_BALM from "../../../assets/img/Utils/clients/nationlCenterForBalm.svg";
import NR from "../../../assets/img/Utils/clients/NR.svg";
import NUPCO from "../../../assets/img/Utils/clients/nupco.svg";
import SAUDI_FOOD_AND_DRUG_AUTHORITY from "../../../assets/img/Utils/clients/saudiFoodAndDrugAuthority.svg";
import SGS from "../../../assets/img/Utils/clients/SGS.svg";
import TAIF_UNIVERSITY from "../../../assets/img/Utils/clients/taifUniversity.svg";
import TUV from "../../../assets/img/Utils/clients/tuv.svg";
import UNITED_STATES from "../../../assets/img/Utils/clients/UNITEDSTATES.svg";
import USDA from "../../../assets/img/Utils/clients/USDA.svg";
import USDA_ORGANIC from "../../../assets/img/Utils/clients/USDAORGANIC.svg";
import WORLD_HEALTH from "../../../assets/img/Utils/clients/WORLDHEALTH.svg";

const Clients = [
  { id: 1, title: "WORLD_HEALTH", img: WORLD_HEALTH },
  { id: 2, title: "FDA", img: FDA },
  { id: 3, title: "AIUIA", img: AIUIA },
  { id: 4, title: "ALQASEM", img: ALQASEM },
  { id: 5, title: "ALS", img: ALS },

  // {
  //   id: 12,
  //   title: "GENERAL_AUTHORITY_OF_SURVEY",
  //   img: GENERAL_AUTHORITY_OF_SURVEY,
  // },
  // {
  //   id: 13,
  //   title: "GENERAL_PRESIDENCY_FOR_THE_AFFAIRS_OF_THE_GRAND_MOSQUE",
  //   img: GENERAL_PRESIDENCY_FOR_THE_AFFAIRS_OF_THE_GRAND_MOSQUE,
  // },
  { id: 14, title: "IOA", img: IOA },
  { id: 15, title: "KING_ABDULLAH_CITY", img: KING_ABDULLAH_CITY },
  { id: 16, title: "KING_SAUD_UNIVERSITY", img: KING_SAUD_UNIVERSITY },
  {
    id: 17,
    title: "MINISTRY_OF_ENVIRONMENT_WATER_AND_AGRICULTURE",
    img: MINISTRY_OF_ENVIRONMENT_WATER_AND_AGRICULTURE,
  },
  { id: 18, title: "MINISTRY_OF_HEALTH", img: MINISTRY_OF_HEALTH },
  {
    id: 19,
    title: "MINISTRY_OF_ISLAMIC_AFFAIRS",
    img: MINISTRY_OF_ISLAMIC_AFFAIRS,
  },
  { id: 20, title: "MONSHAAT_21", img: MONSHAAT_21 },
  { id: 21, title: "NATIONAL_CENTER_FOR_WILD", img: NATIONAL_CENTER_FOR_WILD },
  { id: 22, title: "NATION_CENTER_FOR_BALM", img: NATION_CENTER_FOR_BALM },
  // { id: 23, title: "NR", img: NR },
  { id: 24, title: "NUPCO", img: NUPCO },
  {
    id: 25,
    title: "SAUDI_FOOD_AND_DRUG_AUTHORITY",
    img: SAUDI_FOOD_AND_DRUG_AUTHORITY,
  },
  { id: 26, title: "SGS", img: SGS },
  { id: 27, title: "TAIF_UNIVERSITY", img: TAIF_UNIVERSITY },
  { id: 28, title: "TUV", img: TUV },
  { id: 29, title: "UNITED_STATES", img: UNITED_STATES },
  { id: 30, title: "USDA", img: USDA },
  { id: 31, title: "USDA_ORGANIC", img: USDA_ORGANIC },
];
</script>

<style scoped></style>

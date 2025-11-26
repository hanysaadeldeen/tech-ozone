<template>
  <section class="SuccessPartenerClients max-2xl:px-6">
    <div
      class="mb-20 md:mb-[120px] max-w-[792px] mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8"
    >
      <h2
        class="text-xl md:text-2xl lg:text-3xl text-TextD font-semibold text-center"
      >
        عملاؤنا في القطاع الصحي
      </h2>
    </div>
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
import client1 from "../../../assets/img/Utils/clients/Clients 37.svg";
import client2 from "../../../assets/img/Utils/clients/Clients 39.svg";
import client3 from "../../../assets/img/Utils/clients/Clients 40.svg";
import client4 from "../../../assets/img/Utils/clients/Clients 41.svg";
import client5 from "../../../assets/img/Utils/clients/Clients 42.svg";
import client6 from "../../../assets/img/Utils/clients/Clients 43.svg";

const Clients = [
  {
    id: 1,
    title: "client1",
    img: client1,
  },
  {
    id: 2,
    title: "client1",
    img: client2,
  },
  {
    id: 3,
    title: "client1",
    img: client3,
  },
  {
    id: 4,
    title: "client1",
    img: client4,
  },
  {
    id: 5,
    title: "client1",
    img: client5,
  },
  {
    id: 6,
    title: "client1",
    img: client6,
  },
];
</script>

<style scoped></style>

<template>
  <section class="location">
    <section-title
      btnText="موقعنا الاستراتيجي على الخريطة"
      description="تواجدنا لخدمة شركاؤنا في مختلف القطاعات"
    />
    <div class="relative w-full max-w-[708px] mx-auto">
      <div
        class="absolute left-1/2 w-full mx-auto max-w-[504px] -translate-x-1/2 top-1/2 -translate-y-1/2"
      >
        <div
          class="relative w-full rounded-xl shadow-lg p-6 md:py-10 md:px-8 bg-white flex flex-col justify-center items-center"
        >
          <h3
            class="text-TextD2 text-base font-medium mb-1 md:mb-3 text-center"
          >
            الشركة السعودية للأوزون
          </h3>
          <p
            class="text-TextD3 text-sm font-normal text-center max-w-[400px] mx-auto mb-4 md:mb-8"
          >
            المملكة العربية السعودية - جدة حي المنار امام مركز شرطة حي السامر
          </p>
          <a
            href="https://maps.app.goo.gl/R1doJaXcoE49Xfrr7"
            target="_blank"
            aria-label="Google Map Direction"
          >
            <Button title="احصل علي الاتجاهات" background="#ED2024" reverse>
              <i class="fa-solid fa-diamond-turn-right"></i>
            </Button>
          </a>
          <div
            class="bg-transparent absolute -bottom-12 left-1/2 -translate-x-1/2 border-[28px] border-white border-b-transparent border-x-transparent"
          ></div>
        </div>
        <div class="mt-9 text-center">
          <img
            src="~/assets/img/Utils/locationPin.svg"
            alt="locationPin"
            loading="lazy"
            class="w-fit mx-auto"
            width="32"
            height="32"
          />
        </div>
      </div>
      <div class="w-full max-w-full max-sm:invisible">
        <img
          src="~/assets/img/Utils/SaudiMap.svg"
          alt="SaudiMap"
          loading="lazy"
          class="w-full max-w-full"
          width="708"
          height="580"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>

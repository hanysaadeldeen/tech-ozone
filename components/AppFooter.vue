<template>
  <footer class="relative bg-BG w-full  pt-14 pb-10 md:pt-20  ">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 md:gap-10 lg:gap-20 max-w-[1208px] mx-auto pb-10 md:pb-14 max-2xl:px-6 relative border-b border-TextL">
      <div class="flex-grow">
        <nuxt-link :to="localePath('index')" class="block relative cursor-pointer">
          <img src="~/assets/img/Utils/LogoH.svg" class="h-[50px] w-fit  xl:h-[80px] relative block" alt="techOzone"
            height="80" width="186" loading="lazy" />
        </nuxt-link>
        <p class="mt-4 font-medium text-base text-TextD mb-8 max-w-[272px] w-full">
          أول شركة سعودية متخصصة في حلول التطهير والتعقيم بتقنية الأوزون، نخدم القطاعات الحيوية منذ عام 2011.
        </p>
      </div>
      <div class="max-w-[168px] md:mx-auto">
        <h1 class="text-TextD text-base font-medium mb-6">{{ locale == 'ar' ? 'عن Techozone' : "About Techozone" }}</h1>
        <nav>
          <ul>
            <li :class="{ 'active': adjustedPath === '/about-us' }">
              <nuxt-link :to="localePath('/about-us')">
                من نحن
              </nuxt-link>
            </li>
            <li :class="{ 'active': adjustedPath.includes('/sectors') }">
              <nuxt-link :to="localePath('/sectors')">
                القطاعات
              </nuxt-link>
            </li>
            <li :class="{ 'active': adjustedPath === '/products' }">
              <nuxt-link :to="localePath('/products')">
                الأجهزة
              </nuxt-link>
            </li>
            <li :class="{ 'active': adjustedPath === '/certificates-trust' }">
              <nuxt-link :to="localePath('/certificates-trust')">
                الاعتمادات والثقة
              </nuxt-link>
            </li>
            <li :class="{ 'active': adjustedPath === '/gallery' }">
              <nuxt-link :to="localePath('/gallery')">
                المعرض
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="max-w-[168px] md:mx-auto">
        <h1 class="text-TextD text-base font-medium mb-6">{{ locale == 'ar' ? 'روابط سريعة' : "Quick Links" }}</h1>
        <nav>
          <ul>
            <li :class="{ 'active': adjustedPath === '/faqs' }">
              <nuxt-link :to="localePath('/faqs')">
                الأسئلة الشائعة
              </nuxt-link>
            </li>
            <li :class="{ 'active': adjustedPath === '/privacy' }">
              <nuxt-link :to="localePath('/privacy')">
                سياسة الخصوصية
              </nuxt-link>
            </li>
            <li :class="{ 'active': adjustedPath === '/terms' }">
              <nuxt-link :to="localePath('/terms')">
                الشروط والأحكام
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="">
        <h1 class="text-TextD text-base font-medium mb-6">{{ locale == 'ar' ? 'معلومات التواصل' : "Contacts" }}</h1>
        <nav>
          <ul>
            <li class="pt-0 flex items-center gap-4 group">
              <i
                class="fa-solid fa-phone text-TextM group-hover:text-Secondary transition-all ease-in-out duration-300"></i>
              <span :dir="locale === 'ar' ? 'ltr' : ''">
                +966 50 123 4567
              </span>
            </li>
            <li class="flex items-center gap-4 group">
              <i
                class="fa-solid fa-envelope text-TextM group-hover:text-Secondary transition-all ease-in-out duration-300"></i>
              <span>
                info@techozone.sa
              </span>
            </li>
            <li class="pb-0 flex items-center gap-4 group border-none">
              <i
                class="fa-solid fa-location-dot  text-TextM group-hover:text-Secondary transition-all ease-in-out duration-300"></i>
              <span>
                الرياض، المملكة العربية السعودية
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <h1 class="px-4 text-center text-sm font-normal text-TextMD pt-6">
      حقوق النشر © ٢٠٢٥ شركة Techozone. جميع الحقوق محفوظة. | من تصميم وتطوير
      <a href="https://do.com.sa/" target="_blank" class="text-Secondary font-bold underline mx-0.5 text-base">DO</a>
    </h1>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n()

const route = useRoute();

const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join("/")}`;
  }
  return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));

</script>

<style scoped>
nav ul {
  @apply flex flex-col gap-4
}

nav ul li {
  @apply text-base font-normal w-full text-TextMD hover:text-Secondary transition-all ease-in-out duration-300 cursor-pointer
}


nav ul li.active {
  color: #092892;
}
</style>
<template>
  <footer class="relative bg-BG w-full  pt-14 pb-10 md:pt-20  ">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 md:gap-10 lg:gap-20 max-w-[1208px] mx-auto pb-10 md:pb-14 max-2xl:px-6 relative border-b border-TextL">
      <div class="md:col-span-3 lg:col-span-1">
        <nuxt-link :to="localePath('index')" class="block relative ">
          <img src="~/assets/img/Utils/LogoH.svg" class="h-[50px] w-fit  xl:h-[80px] relative block" alt="techOzone"
            height="80" width="186" loading="lazy" />
        </nuxt-link>
        <p class="mt-4 font-medium text-lg text-TextD mb-8 max-w-[272px]">
          أول شركة سعودية متخصصة في حلول التطهير والتعقيم بتقنية الأوزون، نخدم القطاعات الحيوية منذ عام 2011.
        </p>
        <nuxt-link class="w-fit  block " to="/contactUs">
          <Button title="header.contact" />
        </nuxt-link>
      </div>
      <div>
        <nav>
          <ul>
            <li :class="active && adjustedPath === '/products'">
              <nuxt-link :to="localePath('/products')">
                {{ $t("header.products") }}
              </nuxt-link>
            </li>
            <li :class="active && adjustedPath === '/suppliers'">
              <nuxt-link :to="localePath('/suppliers')">
                {{ $t("header.suppliers") }}
              </nuxt-link>
            </li>
            <li :class="active && adjustedPath === '/projects'">
              <nuxt-link :to="localePath('/projects')">
                {{ $t("header.projects") }}
              </nuxt-link>
            </li>
            <li :class="active && adjustedPath === '/company'">
              <nuxt-link :to="localePath('/company')">
                {{ $t("header.about") }}
              </nuxt-link>
            </li>
            <li :class="active && adjustedPath === '/'">
              <nuxt-link :to="localePath('/')">
                {{ $t("header.home") }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>
            <li :class="active && adjustedPath === '/contactUs'">
              <nuxt-link :to="localePath('/contactUs')">
                {{ $t("header.contact") }}
              </nuxt-link>
            </li>
            <li :class="active && adjustedPath === '/privacy'">
              <nuxt-link :to="localePath('/privacy')">
                {{ $t("header.privacy") }}
              </nuxt-link>
            </li>
            <li :class="active && adjustedPath === '/terms'">
              <nuxt-link :to="localePath('/terms')">
                {{ $t("header.terms") }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>
            <li class="pt-0 flex items-center gap-4 group">
              <i
                class="fa-solid fa-location-dot  text-TextMD hover:text-Secondary transition-all ease-in-out duration-300"></i>
              <span>
                {{
                  locale === 'ar' ? ' الفرع الرئيسي بجدة - شارع البلدية' : 'Main branch in Jeddah - Al-Baladiya Street'
                }}
              </span>
            </li>
            <li class="flex items-center gap-4 group">
              <i
                class="fa-solid fa-location-dot  text-TextMD hover:text-Secondary transition-all ease-in-out duration-300"></i>
              <span>
                {{ locale === 'ar' ?
                  'فرع الرياض - حي الياسمين - شارع أنس بن مالك - مبنى 25 سكوير' :
                  'Riyadh Branch - Al - Yasmin District - Anas Bin Malik Street - Building 25 Square' }}
              </span>
            </li>
            <li class="pb-0 flex items-center gap-4 group border-none">
              <i
                class="fa-solid fa-location-dot  text-TextMD hover:text-Secondary transition-all ease-in-out duration-300"></i>
              <span>
                الرياض، المملكة العربية السعودية
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <h1 class="px-4 text-center text-sm font-normal text-TextMD">

      حقوق النشر © ٢٠٢٥ شركة Techozone. جميع الحقوق محفوظة. | من تصميم وتطوير
      <a href="https://do.com.sa/" target="_blank" class="text-Secondary">DO</a> ©
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
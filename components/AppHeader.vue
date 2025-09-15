<template>
    <header class="relative z-20 max-2xl:px-6 py-4 md:py-6 text-primary  border-b border-[#FFFFFF1F] bg-white">
        <div class="mx-auto max-w-[1208px] ">
            <div class="relative ">
                <div class="flex items-center justify-between gap-10">
                    <nuxt-link :to="localePath('/')" class="block relative ">
                        <img src="~/assets/img/Utils/Logo.svg" class="max-w-fit xl:h-[80px] relative block"
                            alt="techOzone" height="80" width="186" loading="eager" fetchpriority="high" />
                    </nuxt-link>
                    <div class="hidden lg:block">
                        <nav class="relative  h-full ">
                            <ul class="flex  items-center">
                                <li :class="{ 'active': adjustedPath === '/' }">
                                    <nuxt-link :to="localePath('index')">
                                        الرئيسية
                                    </nuxt-link>
                                </li>
                                <li :class="{ 'active': adjustedPath.includes('/sectors') }">
                                    <nuxt-link :to="localePath('sectors')">
                                        القطاعات
                                    </nuxt-link>
                                </li>
                                <li :class="{ 'active': adjustedPath === '/about-us' }">
                                    <nuxt-link :to="localePath('about-us')">
                                        عن Techozone
                                    </nuxt-link>
                                </li>
                                <li :class="{ 'active': adjustedPath === '/certificates-trust' }">
                                    <nuxt-link :to="localePath('certificates-trust')">
                                        الاعتمادات والثقة
                                    </nuxt-link>
                                </li>
                                <li :class="{ 'active': adjustedPath.includes('/gallery') }">
                                    <nuxt-link :to="localePath('gallery')">
                                        المعرض
                                    </nuxt-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="hidden lg:flex  justify-between items-center gap-2 xl:gap-6">
                        <LanguageSwitcher />
                        <nuxt-link :to="localePath('contact-us')">
                            <Button title="تواصل معنا" background="#092892" />
                        </nuxt-link>
                    </div>
                    <div class="lg:hidden text-2xl cursor-pointer sm:text-3xl z-[35]">
                        <i class="fa-solid fa-bars-staggered " :class="{ hidden: isSideBar }" @click="toggleSidebar" />
                        <i class="fa-solid fa-xmark text-white" :class="{ hidden: !isSideBar }"
                            @click="toggleSidebar" />
                    </div>
                </div>
            </div>
            <transition :name="transitionName">
                <div v-if="isSideBar"
                    class="sideBar fixed inset-x-0 top-0 z-30 flex h-[calc(100dvh)] w-full flex-col items-start px-6 md:px-11 transition-all sm:px-7 lg:hidden"
                    :class="[
                        {
                            'right-0': locale === 'ar',
                            'left-0': locale !== 'ar',
                        },
                    ]">
                    <div class="pt-[83px] lg:pt-[100px]">
                        <nav class="mt-4 inline-block w-full">
                            <ul class="flex flex-col gap-5">
                                <li :class="[
                                    { 'active': adjustedPath === '/' },
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('index')" @click="isSideBar = !isSideBar" class="w-full">
                                        الرئيسية
                                    </nuxt-link>
                                </li>
                                <li :class="[
                                    { 'active': adjustedPath === '/about-us' },
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('about-us')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        عن Techozone
                                    </nuxt-link>
                                </li>
                                <li :class="[
                                    { 'active': adjustedPath.includes('/sectors') },
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('sectors')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        القطاعات
                                    </nuxt-link>
                                </li>
                                <li :class="[
                                    { 'active': adjustedPath === '/certificates-trust' },
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('certificates-trust')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        الاعتمادات والثقة
                                    </nuxt-link>
                                </li>
                                <li :class="[
                                    { 'active': adjustedPath === '/gallery' },
                                    'text-white hover:text-PrimaryPL3',
                                ]">
                                    <nuxt-link :to="localePath('gallery')" @click="isSideBar = !isSideBar"
                                        class="w-full">
                                        المعرض
                                    </nuxt-link>
                                </li>
                            </ul>
                        </nav>
                        <div class="mt-5 justify-between flex-col px-6">
                            <LanguageSwitcher isWhite />
                            <nuxt-link :to="localePath('contact-us')" class="block mt-5 ">
                                <Button title="تواصل معنا" background="#092892" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>

<script setup lang="ts">

// import AOS from "aos";
// import "aos/dist/aos.css";
// onMounted(() => {
//     AOS.init({
//         duration: 600,
//         once: true,
//     })
// })
import { useDebounceFn } from "@vueuse/core";
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const isSideBar = ref<boolean>(false);
const transitionName = computed(() =>
    locale.value === "ar" ? "sidebar-ar" : "sidebar-en",
);
const route = useRoute();

// Optimize sidebar toggle function
const toggleSidebar = () => {
    isSideBar.value = !isSideBar.value;
};

// Add scroll lock functionality with debounce
const debouncedScrollLock = useDebounceFn((value: boolean) => {
    document.body.style.overflow = value ? "hidden" : "";
}, 100);

watch(isSideBar, (newValue) => {
    debouncedScrollLock(newValue);
});

// Close sidebar on scroll with debounce
const debouncedScrollHandler = useDebounceFn(() => {
    if (isSideBar.value) {
        isSideBar.value = false;
    }
}, 100);

onMounted(() => {
    window.addEventListener("scroll", debouncedScrollHandler);
});


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
a {
    text-decoration: none;
}


ul li {
    font-weight: 500;
    font-size: 18px;
    display: inline-block;
    position: relative;
    list-style: none;
    width: fit-content;
    cursor: pointer;
    transition: color 0.3s ease;
    will-change: color;
    line-height: 25px;
    padding: 8px 24px;
    text-align: center;
    border-bottom: 2px solid transparent;
}


@media (min-width:1024px) and (max-width: 1280px) {
    ul li {
        font-size: 14px;
        line-height: 22.4px;
        padding: 8px 16px;
    }
}

@media (max-width:768px) {
    ul li {
        padding: 8px 0px;
    }
}

ul li a,
ul li {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul li:hover {
    color: #ED2024;
}

ul li.active {
    color: #ED2024;
    font-weight: 700;
}

.sideBar {
    background: linear-gradient(to right,
            rgba(10, 9, 17, 0.9),
            rgba(10, 9, 17, 0.96));
}


.sideBar nav ul li:hover,
.sideBar nav ul li.active {
    color: #ED2024;
}

.sidebar-en-enter-active,
.sidebar-en-leave-active,
.sidebar-ar-enter-active,
.sidebar-ar-leave-active {
    transition: all 0.3s ease;
    will-change: transform, opacity;
}

.sidebar-en-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.sidebar-en-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.sidebar-ar-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.sidebar-ar-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>

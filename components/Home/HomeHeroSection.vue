<template>
    <div class="carousel  " ref="carouselRef">

        <div class="list  relative w-full h-full ">
            <div class="item " v-for="(slide, i) in slides" :key="i">

                <img :src="slide.img" class="brightness-[0.4]" :alt="slide.title" />
                <div class=" content xl:mr-[calc((100vw-1208px)/2)]">
                    <div class="title text-white text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">{{ slide.title }}
                    </div>
                    <div class="des max-w-[480px] text-TextL text-xl font-normal">{{ slide.description }}</div>
                    <div class="buttons flex justify-start">
                        <Button title="احجز استشارة مجانية" background="#ED2024" link="contact-us" />
                    </div>
                </div>
            </div>
        </div>


        <div class="thumbnail">
            <div class="item" v-for="(slide, i) in slides" :key="'thumb-' + i">
                <img :src="slide.img" :alt="slide.title" />
            </div>
        </div>

        <div class="arrows ">
            <button ref="nextRef" class="glassyW boxShadow flex justify-center items-center">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button ref="prevRef" class="glassyW boxShadow flex justify-center items-center">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import apple from "../../assets/img/Projects/apple.webp"
import checken from "../../assets/img/Projects/checken.webp"
import desert from "../../assets/img/Projects/desert.webp"
import mosq from "../../assets/img/Projects/mosq.webp"
import hospitalProject from "../../assets/img/Projects/hospitalProject.webp"
import tamr from "../../assets/img/Projects/tamr.webp"

const slides = [
    {
        img: apple,
        title: "قطاع الزراعة",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: checken,
        title: "قطاع الدواجن",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: desert,
        title: "قطاع الفنادق والسياحة ",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: mosq,
        title: "قطاع الحج والعمرة",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: hospitalProject,
        title: "القطاع الصحي",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
    {
        img: tamr,
        title: "قطاع التمور",
        description: "نوفّر خدمات متخصصة تخدم القطاعات الحساسة في المملكة، أبرزها تطهير الكعبة المشرفة والمسجد الحرام، وتنظيف وتكييف سجاد المسجد الحرام والمسجد النبوي."
    },
];

const carouselRef = ref(null);
const nextRef = ref(null);
const prevRef = ref(null);

let runTimeOut;
let runNextAuto;
const timeRunning = 3000;
const timeAutoNext = 7000;

onMounted(() => {
    const carouselDom = carouselRef.value;
    const nextDom = nextRef.value;
    const prevDom = prevRef.value;
    const listDom = carouselDom.querySelector(".list");
    const thumbnailDom = carouselDom.querySelector(".thumbnail");

    function showSlider(type) {
        const sliderItems = listDom.querySelectorAll(".item");
        const thumbnailItems = thumbnailDom.querySelectorAll(".item");

        if (type === "next") {
            listDom.appendChild(sliderItems[0]);
            thumbnailDom.appendChild(thumbnailItems[0]);
            carouselDom.classList.add("next");
        } else {
            listDom.prepend(sliderItems[sliderItems.length - 1]);
            thumbnailDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
            carouselDom.classList.add("prev");
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove("next");
            carouselDom.classList.remove("prev");
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }

    nextDom.addEventListener("click", () => showSlider("next"));
    prevDom.addEventListener("click", () => showSlider("prev"));

    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
});

onBeforeUnmount(() => {
    clearTimeout(runTimeOut);
    clearTimeout(runNextAuto);
});
</script>

<style scoped>
/* carousel */
.carousel {
    height: 100vh;
    margin-top: -112px;
    width: 100vw;
    overflow: hidden;
    position: relative;
}


.carousel .list .item {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
}

.carousel .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel .list .item .content {
    position: absolute;
    width: 584px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    color: #fff;


}

.carousel .list .item .content .title,
.carousel .list .item .content .des,
.carousel .list .item .content .buttons {
    padding: 0 20px;
}

.carousel .list .item .buttons {
    margin-top: 40px;
}




/* thumbail */
.thumbnail {
    position: absolute;
    bottom: 50px;
    right: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
}

.thumbnail .item {
    width: 150px;
    height: 220px;
    flex-shrink: 0;
    position: relative;
}

.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}


/* arrows */
.arrows {
    position: absolute;
    bottom: 10%;
    right: 30%;
    transform: translateX(20%);
    z-index: 100;
    width: 300px;
    max-width: 30%;
    /* display: flex; */
    display: none;
    gap: 10px;
    align-items: center;
}

.arrows button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* background-color: #AFC1C5; */
    border: none;
    color: white;
    font-family: monospace;
    font-weight: bold;
    transition: .5s;
}

.arrows button:hover {
    background-color: #fff;
    color: #000;
}

/* animation */
.carousel .list .item:nth-child(1) {
    z-index: 1;
}


@media (max-width: 1024px) {

    .arrows,
    .thumbnail {
        display: none;
    }


    .carousel .list .item .content {
        width: 100%;
    }

    .carousel .list .item .content .title,
    .carousel .list .item .content .des,
    .carousel .list .item .content .buttons {
        padding: 0 24px;
    }
}


/* animation text in first item */

.carousel .list .item:nth-child(1) .content .author,
.carousel .list .item:nth-child(1) .content .title,
.carousel .list .item:nth-child(1) .content .topic,
.carousel .list .item:nth-child(1) .content .des,
.carousel .list .item:nth-child(1) .content .buttons {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent .5s 1s linear 1 forwards;
}

@keyframes showContent {
    to {
        transform: translateY(0px);
        filter: blur(0px);
        opacity: 1;
    }
}

.carousel .list .item:nth-child(1) .content .title {
    animation-delay: 1.2s !important;
}

.carousel .list .item:nth-child(1) .content .des {
    animation-delay: 1.6s !important;
}

.carousel .list .item:nth-child(1) .content .buttons {
    animation-delay: 1.8s !important;
}

/* create animation when next click */
.carousel.next .list .item:nth-child(1) img {
    width: 150px;
    height: 220px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    border-radius: 30px;
    animation: showImage .5s linear 1 forwards;
}

@keyframes showImage {
    to {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}

.carousel.next .thumbnail .item:nth-last-child(1) {
    overflow: hidden;
    animation: showThumbnail .5s linear 1 forwards;
}

.carousel.prev .list .item img {
    z-index: 100;
}

@keyframes showThumbnail {
    from {
        width: 0;
        opacity: 0;
    }
}

.carousel.next .thumbnail {
    animation: effectNext .5s linear 1 forwards;
}

@keyframes effectNext {
    from {
        transform: translateX(150px);
    }
}


/* prev click */

.carousel.prev .list .item:nth-child(2) {
    z-index: 2;
}

.carousel.prev .list .item:nth-child(2) img {
    animation: outFrame 0.5s linear 1 forwards;
    position: absolute;
    bottom: 0;
    left: 0;
}

@keyframes outFrame {
    to {
        width: 150px;
        height: 220px;
        bottom: 50px;
        left: 50%;
        border-radius: 20px;
    }
}

.carousel.prev .thumbnail .item:nth-child(1) {
    overflow: hidden;
    opacity: 0;
    animation: showThumbnail .5s linear 1 forwards;
}

.carousel.next .arrows button,
.carousel.prev .arrows button {
    pointer-events: none;
}

.carousel.prev .list .item:nth-child(2) .content .author,
.carousel.prev .list .item:nth-child(2) .content .title,
.carousel.prev .list .item:nth-child(2) .content .topic,
.carousel.prev .list .item:nth-child(2) .content .des,
.carousel.prev .list .item:nth-child(2) .content .buttons {
    animation: contentOut 1.5s linear 1 forwards !important;
}

@keyframes contentOut {
    to {
        transform: translateY(-150px);
        filter: blur(20px);
        opacity: 0;
    }
}

@media screen and (max-width: 678px) {
    .carousel .list .item .content {
        padding-right: 0;
    }

    .carousel .list .item .content .title {
        font-size: 30px;
    }
}
</style>
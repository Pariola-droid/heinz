<script setup>
import gsap from "gsap";
import $ from "jquery";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref, onUnmounted } from "@vue/runtime-core";
import LoconativeScroll from "loconative-scroll";
import { split } from "./animation/text";
import Cursor from "./lib/cursor";
import Magnetic from "./lib/magnetic";

// Component
import Loader from "./components/general/Loader.vue";
import Navbar from "./components/general/Navbar.vue";
import Hero from "./components/home/Hero.vue";
import HotSauce from "./components/home/HotSauce.vue";
import FirstCaption from "./components/home/FirstCaption.vue";
import SecondCaption from "./components/home/SecondCaption.vue";
import Subscribe from "./components/home/Subscribe.vue";
import Showcase from "./components/home/Showcase.vue";
import Testimonial from "./components/home/Testimonial.vue";
import Articles from "./components/home/Articles.vue";
import Discount from "./components/home/Discount.vue";
import Footer from "./components/general/Footer.vue";

gsap.registerPlugin(ScrollTrigger);

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

window.addEventListener("resize", updateScreenWidth);

onMounted(() => {
    split();

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    const cursor = new Cursor({
        container: "body",
        speed: 0.7,
        ease: "expo.out",
        visibleTimeout: 300,
    });

    const magnetic = new Magnetic({
        y: 0.2,
        x: 0.2,
        s: 0.2,
        rs: 0.7,
    });
    // Automatic handle magnetic elements through attribute
    $("[data-magnetic]").each(function () {
        new Magnetic(this);
    });

    const scroll = new LoconativeScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.07,
        inertia: 0.75,
        tablet: {
            breakpoint: 768,
        },
    });

    if (screenWidth.value > 1024) {
        scroll.stop();
        document.body.style.cursor = "wait";

        setTimeout(() => {
            document.body.style.cursor = "unset";
            scroll.start();
        }, 2500);
    }

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: "[data-scroll-container]" });

    setTimeout(() => {
        scroll.update();
    }, 1000);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
    <Loader />
    <Navbar />
    <Hero />
    <HotSauce />
    <FirstCaption />
    <SecondCaption />
    <Subscribe />
    <Showcase />
    <Testimonial />
    <Articles />
    <Discount />
    <Footer />
</template>

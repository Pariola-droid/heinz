<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref, onUnmounted } from "@vue/runtime-core";
import LoconativeScroll from "loconative-scroll";
import { split } from "./animation/text";

// Component
import Navbar from "./components/general/Navbar.vue";
import Hero from "./components/home/Hero.vue";
import Services from "./components/home/Services.vue";
import Why from "./components/home/Why.vue";
import ClientWrapper from "./components/home/ClientWrapper.vue";
import Footer from "./components/general/Footer.vue";

gsap.registerPlugin(ScrollTrigger);

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

window.addEventListener("resize", updateScreenWidth);

onMounted(() => {
    split();

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
        window.onload = () => {
            setTimeout(() => {
                document.body.style.cursor = "unset";
                scroll.start();
            }, 2000);
        };
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
    <Navbar />
    <Hero />
    <Services />
    <Why />
    <ClientWrapper />
    <Footer />
</template>

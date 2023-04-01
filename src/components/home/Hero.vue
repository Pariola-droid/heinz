<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref, onUnmounted } from "@vue/runtime-core";
// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
//
const services = ref([]);
const screenWidth = ref(window.innerWidth);
const head_one = ref(null);
const headAttr = ref("headerDelayed");
//
const hero = ref(null);
const skewed = ref(null);
const video_skewed = ref(null);

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

window.addEventListener("resize", updateScreenWidth);

onMounted(() => {
    services.value.push(...new Array(20).fill("Services we offer"));

    gsap.set(".header_content_btn", { autoAlpha: 0 });
    // gsap.set(".header_wrapper", { y: 75 });

    if (screenWidth.value > 1024) {
        gsap.to(".header_content_btn", {
            duration: 0.5,
            delay: 3.5,
            autoAlpha: 1,
            ease: "power2.out",
        });

        gsap.to(skewed.value, {
            scrollTrigger: {
                trigger: hero.value,
                start: "top top",
                end: "+=100",
                scrub: true,
                pin: skewed.value,
            },
            borderTopLeftRadius: "23px",
            borderTopRightRadius: "23px",
            borderBottomRightRadius: "23px",
            borderBottomLeftRadius: "277px",
            scale: 0.9,
            ease: "none",
        });

        gsap.to(video_skewed.value, {
            scale: 1.2,
            ease: "none",
            duration: 0,
        });

        // setTimeout(() => {
        //     video_skewed.value.setAttribute("data-scroll-speed", "-2");
        // }, 2000);
    }

    if (screenWidth.value < 1024) {
        head_one.value.setAttribute("data-animation", "header");

        gsap.to(".header_content_btn", {
            duration: 0.5,
            delay: 2,
            autoAlpha: 1,
            ease: "power2.out",
        });
    }
});

// Cleanup on unmount
onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
    <header ref="hero" class="header">
        <div ref="skewed" class="header_skewed">
            <video
                ref="video_skewed"
                data-scroll
                data-scroll-speed="-2"
                class="header_skewed_video"
                autoPlay
                muted
                src="/assets/components/header/illustration.mp4"
            ></video>
        </div>
        <div class="header_wrapper" data-scroll data-scroll-speed="-2" data-scroll-target=".header">
            <div class="header_content copies">
                <h1 ref="head_one" class="header_content_h1 content" :data-animation="headAttr" data-scroll>
                    Unleash Your Web3 Startup&apos;s Potential with Tailored Community and Design Solutions
                </h1>

                <button class="header_content_btn content" data-scroll>
                    <a href="https://t.me/Defi_Finestt" target="_blank" rel="noopener noreferrer">Contact us</a>
                </button>
            </div>
        </div>
    </header>

    <section class="marquee" data-scroll>
        <div class="marquee_nimeScroll" data-scroll>
            <div class="marquee_wrapper" data-scroll>
                <h2 v-for="(service, index) in services" :key="index">{{ service }}</h2>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.header {
    @include grid;
    width: 100%;
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    position: relative;
    background: $eneseewhite;

    @include media("<=tablet") {
        height: fit-content;
        background-image: url(/assets/components/header/mobile-illy.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding: toRem(190) 0 toRem(140);
    }

    &_skewed {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        background-color: #01241d;

        &_video {
            width: 100%;
            object-fit: cover;
            height: 100vh;
        }

        @include media("<=tablet") {
            display: none;
        }
    }

    &_wrapper {
        width: 100%;
        height: 100vh;
        @include grid;
        position: relative;
        padding-top: toRem(75);
        overflow: hidden;

        @include media("<=tablet") {
            padding-top: 0;
            height: 100%;
        }
    }

    &_content {
        z-index: 99;
        @include flex(center, center);
        @include flex_col;
        // visibility: hidden;

        & h1 {
            font-size: toRem(80);
            text-align: center;
            margin-bottom: toRem(32);
            color: $eneseewhite;
            line-height: toRem(92);
            font-weight: 400;
            max-width: 1216px;
            display: block;

            @include media("<=tablet") {
                max-width: 500px;
                font-size: toRem(32);
                line-height: toRem(40);
                margin-bottom: toRem(36);
            }

            @include media("<=phone") {
                max-width: 330px;
            }
        }

        & button {
            background: $eneseewhite;
            border-radius: 34px;
            cursor: pointer;
            font-weight: 500;
            font-size: toRem(20);
            line-height: toRem(32);
            color: $eneseeBlack;
            transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
            opacity: 0;

            & a {
                padding: 0 toRem(76);
                height: toRem(68);
                @include grid;

                @include media("<=tablet") {
                    padding: 0 toRem(40);
                    height: toRem(56);
                }
            }
        }
    }
}

.marquee {
    width: 100%;
    height: fit-content;
    background-color: $eneseewhite;
    padding-top: toRem(100);
    overflow: hidden;

    @include media("<=tablet") {
        padding-top: toRem(20);
        padding-bottom: toRem(12);
    }

    &_nimeScroll {
        width: 100%;
        will-change: transform;
        -webkit-animation: marquee 10s linear infinite;
        animation: marquee 10s linear infinite;
        animation-direction: alternate;
        transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    &_wrapper {
        width: fit-content;
        white-space: nowrap;
        @include flex(space-between, center);
        column-gap: 0px;
        transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        background-color: $eneseewhite;
        column-gap: 35px;

        @include media("<=tablet") {
            column-gap: toRem(12);
        }

        & h2 {
            font-weight: 400;
            font-size: toRem(80);
            line-height: toRem(102);
            transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

            @include media("<=tablet") {
                font-size: toRem(32);
                line-height: toRem(40);
            }

            &:nth-child(odd) {
                color: $eneseeGreen3;
            }

            &:nth-child(even) {
                @extend %fancyBlack;
            }
        }
    }
}
</style>

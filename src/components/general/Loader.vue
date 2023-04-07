<script setup>
import gsap from "gsap";
import HeinzLogo from "../../../public/assets/brand/heinz.json";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";

// Initialize CSSRulePlugin
gsap.registerPlugin(CSSRulePlugin);
//
const screenWidth = ref(window.innerWidth);
const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};
//
const lotSize = ref(180);

window.addEventListener("resize", updateScreenWidth);

onMounted(() => {
    const loaderDark = document.querySelector(".loader_after");
    const imageReveal = CSSRulePlugin.getRule(".loader_top-middle::after");
    const imageRevealR1 = CSSRulePlugin.getRule(".loader_top-random1::after");
    const imageRevealR2 = CSSRulePlugin.getRule(".loader_top-random2::after");
    const imageRevealR3 = CSSRulePlugin.getRule(".loader_top-random3::after");
    const imageRevealR4 = CSSRulePlugin.getRule(".loader_top-random4::after");
    const imageRevealR5 = CSSRulePlugin.getRule(".loader_top-random5::after");
    //
    gsap.set(loaderDark, { autoAlpha: 0 });
    gsap.set(".loader_bottom__progress", { width: "0%" });
    gsap.set(".loader_bottom__progress-bar", { width: "0%" });
    gsap.set(".loader_bottom", { autoAlpha: 1 });

    if (screenWidth.value > 1024) {
        gsap.to(".loader_bottom__progress", 2, {
            css: { width: "100%" },
            ease: "power2.easeIn",
        });
        gsap.to(".loader_bottom__progress-bar", 2, {
            css: { width: "100%" },
            delay: 0.5,
            ease: "power2.easeIn",
        });
        //
        gsap.to(".loader_bottom", 0.5, {
            autoAlpha: 0,
            delay: 2,
            ease: "power4.easeInOut",
        });
        gsap.to(loaderDark, 0.5, {
            ease: "power4.easeInOut",
            delay: 2,
            autoAlpha: 1,
        });
        gsap.to(".loader", 1, {
            css: { height: "0vh" },
            delay: 2.5,
            ease: "power4.easeInOut",
        });
    }

    if (screenWidth.value < 1024) {
        lotSize.value = 120;

        gsap.to(".loader_bottom__progress", 2, {
            css: { width: "100%" },
            ease: "power2.easeIn",
        });
        gsap.to(".loader_bottom__progress-bar", 2, {
            css: { width: "100%" },
            delay: 0.5,
            ease: "power2.easeIn",
        });
        //
        gsap.to(".loader_bottom", 0.5, {
            autoAlpha: 0,
            delay: 2,
            ease: "power4.easeInOut",
        });
        gsap.to(loaderDark, 0.5, {
            ease: "power4.easeInOut",
            delay: 2,
            autoAlpha: 1,
        });
        gsap.to(".loader", 1, {
            css: { height: "0vh" },
            delay: 2.5,
            ease: "power4.easeInOut",
        });
    }
});

// Cleanup on unmount
onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
    <div class="loader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="svg" fill="#f8e9d4" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <div class="loader_after"></div>

        <div class="loader_top">
            <div class="loader_top-logo">
                <Vue3Lottie :animationData="HeinzLogo" :height="lotSize" :width="lotSize" />
            </div>

            <div class="loader_top-random1">
                <img src="/assets/components/loader/loader-image-1.jpg" alt="loader image" />
            </div>

            <div class="loader_top-random3">
                <img src="/assets/components/loader/loader-image-4.jpg" alt="loader image" />
            </div>

            <div class="loader_top-middle">
                <img src="/assets/components/loader/loader-image-2.jpg" alt="loader image" />
            </div>

            <div class="loader_top-random4">
                <img src="/assets/components/loader/loader-image-5.jpg" alt="loader image" />
            </div>

            <div class="loader_top-random2">
                <img src="/assets/components/loader/loader-image-3.jpg" alt="loader image" />
            </div>

            <div class="loader_top-random5">
                <img src="/assets/components/loader/loader-image-6.jpg" alt="loader image" />
            </div>
        </div>

        <div class="loader_bottom">
            <div class="loader_bottom__progress">
                <div class="loader_bottom__progress-bar"></div>
            </div>

            <!-- <div class="loader_bottom__counter">
                <h1 class="loader_bottom__counter-int">10%</h1>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    position: fixed;
    z-index: 99999998;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    cursor: progress;

    &_after {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(hsla(220, 13%, 0%, 0.2) 50%, rgba(0, 0, 0, 0.2) 50%);
        z-index: 9999 !important;
    }

    & svg {
        position: absolute;
        top: 0;
        width: 100vw;
        height: 150vh;
    }

    &_top {
        width: 100%;
        max-width: 90%;
        height: fit-content;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15vh;
        position: relative;

        &-logo {
            height: fit-content;
            width: fit-content;
            position: absolute;
        }

        &-middle {
            width: 450px;
            height: 450px;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-radius: 10px;
            overflow: hidden;
            visibility: hidden;
            position: relative;

            &::after {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background: $creamy-brown;
                top: 0;
                right: 0;
            }

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-random1 {
            width: 200px;
            height: 200px;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-radius: 10px;
            overflow: hidden;
            visibility: hidden;
            position: absolute;
            top: -10%;
            left: 30%;
            z-index: 1;

            &::after {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background: $creamy-brown;
                bottom: 0;
                left: 0;
            }

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-random2 {
            width: 300px;
            height: 250px;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-radius: 10px;
            overflow: hidden;
            visibility: hidden;
            position: absolute;
            bottom: 10%;
            right: 20%;
            z-index: 1;

            &::after {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background: $creamy-brown;
                top: 0;
                right: 0;
            }

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-random3 {
            width: 300px;
            height: 200px;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-radius: 10px;
            visibility: hidden;
            position: absolute;
            top: -25%;
            right: 30%;
            z-index: 2;

            &::after {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background: $creamy-brown;
                top: 0;
                right: 0;
            }

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-random4 {
            width: 300px;
            height: 200px;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-radius: 10px;
            overflow: hidden;
            visibility: hidden;
            position: absolute;
            left: 20%;
            z-index: 1;

            &::after {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background: $creamy-brown;
                top: 0;
                right: 0;
            }

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-random5 {
            width: 400px;
            height: 250px;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-radius: 10px;
            overflow: hidden;
            visibility: hidden;
            position: absolute;
            bottom: -20%;
            z-index: 1;

            &::after {
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                background: $creamy-brown;
                top: 0;
                right: 0;
            }

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    &_bottom {
        width: 100%;
        max-width: 80%;
        height: fit-content;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        // column-gap: 5%;

        &__progress {
            height: 10px;
            border-radius: 10px;
            background-color: $white;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0 10px;

            &-bar {
                height: 4px;
                border-radius: 10px;
                background-color: $dark-blue;
            }
        }

        // &__counter {
        //     display: grid;
        //     place-items: center;
        //     width: 200px;

        //     &-int {
        //         font-weight: 400;
        //         font-size: 90px;
        //         color: $dark-blue;
        //     }
        // }
    }
}
</style>

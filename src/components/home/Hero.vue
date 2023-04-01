<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref, onUnmounted } from "@vue/runtime-core";
// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
//
const screenWidth = ref(window.innerWidth);
const head_one = ref(null);
const headAttr = ref("headerDelayed");

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

window.addEventListener("resize", updateScreenWidth);

onMounted(() => {
    gsap.set(".header_content_btn", { autoAlpha: 0 });

    if (screenWidth.value > 1024) {
        gsap.to(".header_content_btn", {
            duration: 0.5,
            delay: 3.5,
            autoAlpha: 1,
            ease: "power2.out",
        });
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
    <header class="header">
        <div class="header_wrapper">
            <div class="header-content">
                <h1>
                    Sholape<br />
                    what did you add to your <span>Stew?</span>
                </h1>
                <p>
                    Tired of that question? Heinz's new collection of stew sauces are made specifically for you to add flavor and a chef's touch to
                    your stew.
                </p>
                <button>Shop Now</button>
            </div>
        </div>

        <div class="header-image">
            <img src="/assets/components/header/illustration.svg" alt="Sholape illustration" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    height: fit-content;
    overflow: hidden;
    width: 100%;
    background-color: $creamy-brown;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    @include media("<=tablet") {
        padding-top: 50px;
    }

    &_wrapper {
        width: 100%;
        max-width: 90%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: toRem(150) 0 toRem(75);

        @include media("<=tablet") {
            padding: 0 0 toRem(80);
        }
    }

    &-content {
        height: fit-content;
        width: 100%;
        max-width: 640px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @include media("<=tablet") {
            max-width: 80%;
        }

        @include media("<=phone") {
            max-width: 100%;
        }

        & h1 {
            font-weight: 400;
            font-size: 106px; //
            line-height: 130px;
            color: $dark-blue;

            & span {
                color: $bloody-red;
            }

            @include media("<=tablet") {
                font-weight: 400;
                font-size: 64px;
                line-height: 81px;
            }
        }

        & p {
            font-family: "Athletics";
            font-weight: 400;
            font-size: 24px;
            line-height: 30px;
            margin-top: 40px;
            color: $dark-blue;

            @include media("<=tablet") {
                font-size: 16px;
                line-height: 20px;
                margin-top: 24px;
            }
        }

        & button {
            margin-top: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            height: 55px;
            background: $dark-blue;
            border-radius: 100px;
            font-weight: 600;
            font-size: 28px;
            line-height: 35px;
            cursor: pointer;

            @include media("<=tablet") {
                height: 32px;
                padding: 0 12px;
                margin-top: 32px;
                font-size: 16px;
                line-height: 20px;
                font-weight: 700;
            }
        }
    }

    &-image {
        max-height: 100vh;
        max-width: 50vw;
        position: absolute;
        right: 0;
        bottom: 0;

        @include media("<=tablet") {
            position: relative;
            max-height: 600px;
            max-width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;
        }

        @include media("<=phone") {
            max-width: 100%;
            max-height: 400px;
        }

        & img {
            height: 100%;
            width: 100%;

            @include media("<=tablet") {
                object-fit: contain;
            }

            @include media("<=phone") {
                object-fit: cover;
            }
        }
    }
}
</style>

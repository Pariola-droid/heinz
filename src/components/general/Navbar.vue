<script setup>
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";
import Logo from "../assets/Logo.vue";
//
// const burgerBtn = ref(null);
const barOne = ref(null);
const barTwo = ref(null);
const barThree = ref(null);
const navLogo = ref(null);
const navDrawer = ref(null);
//
const screenWidth = ref(window.innerWidth);
const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

window.addEventListener("resize", updateScreenWidth);

onMounted(() => {
    if (screenWidth.value > 1024) {
        gsap.set(".navbar", { y: -50, autoAlpha: 0 });
        gsap.to(".navbar", {
            duration: 1,
            delay: 3.5,
            y: 0,
            autoAlpha: 1,
            ease: "power2.out",
        });
    }

    if (screenWidth.value < 1024) {
        gsap.set(".navbar", { y: -50, autoAlpha: 0 });
        gsap.set(navDrawer.value, { y: -100, autoAlpha: 0 });
        //
        const burgerBtns = document.querySelectorAll("#navbar_burger");

        gsap.to(".navbar", {
            duration: 1,
            delay: 2,
            y: 0,
            autoAlpha: 1,
            ease: "power2.out",
        });

        const navDrop = gsap.from(navDrawer.value, {
            duration: 0.5,
            y: 0,
            autoAlpha: 1,
            ease: "ease-in-out",
        });

        Array.from(burgerBtns).forEach(function (burgerBtn) {
            burgerBtn.addEventListener("click", () => {
                barOne.value.classList.toggle("toggle");
                barTwo.value.classList.toggle("toggle");
                barThree.value.classList.toggle("toggle");
                //
                navLogo.value.classList.toggle("toggle");
                //
                navDrop.reversed() ? navDrop.play() : navDrop.reverse();

                if (navLogo.value.classList.contains("toggle")) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "auto";
                }
            });
        });
    }
});

// Cleanup on unmount
onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
    <nav class="navbar">
        <div class="navbar_wrapper">
            <div ref="navLogo" class="navbar_logo">
                <a href="/"><Logo /></a>
            </div>

            <ul class="navbar_list">
                <li>
                    <a href="#who-we-are" data-scroll-to>About Us</a>
                </li>
                <li>
                    <a href="#what-we-do" data-scroll-to>What We Do</a>
                </li>
                <li>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScyZFhrmHARCB5Ls55Wn7wxR4uZjvXUNEu0VKHISxYp_NsgZQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Start a Project</a
                    >
                </li>
            </ul>

            <!-- Hamburger -->
            <button class="navbar_hamburger" id="navbar_burger">
                <div class="navbar_hamburger__bars">
                    <div ref="barOne" class="navbar_hamburger__bars_bar1"></div>
                    <div ref="barTwo" class="navbar_hamburger__bars_bar2"></div>
                    <div ref="barThree" class="navbar_hamburger__bars_bar3"></div>
                </div>
                <span class="navbar_hamburger__text-inner">Menu</span>
            </button>

            <!-- Drawer -->
            <div ref="navDrawer" class="navbar_drawer">
                <ul class="navbar_drawer-inner">
                    <li id="navbar_burger">
                        <a href="#who-we-are">About Us</a>
                    </li>
                    <li id="navbar_burger">
                        <a href="#what-we-do">What We Do</a>
                    </li>
                    <li>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScyZFhrmHARCB5Ls55Wn7wxR4uZjvXUNEu0VKHISxYp_NsgZQ/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Start a Project</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    @include grid;
    z-index: 99;
    padding: 45px 0 0;

    @include media("<=phone") {
        padding: 32px 0 0;
    }

    &_wrapper {
        width: 90%;
        max-width: toRem(1300);
        height: fit-content;
        @include flex(space-between, center);

        @include media("<=tablet") {
            max-width: 90%;
        }
    }

    &_logo {
        cursor: pointer;
        color: $eneseewhite;
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        z-index: 9999;

        &.toggle {
            color: #033027 !important;
        }

        & a {
            & svg {
                height: 30px;
                width: 270px;

                @include media("<=tablet") {
                    width: 150px;
                    height: 17px;
                }
            }
        }
    }

    &_list {
        @include flex(flex-start, center);
        column-gap: 80px;
        color: $eneseewhite;
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

        @include media("<=tablet") {
            display: none;
        }

        & > li {
            font-weight: 400;
            font-size: 20px;
            line-height: 32px;
            color: currentColor;

            & > a {
                color: currentColor;
            }
        }
    }

    &_hamburger {
        border: 0;
        outline: none;
        display: grid;
        place-items: center;
        height: 16px;
        width: 22px;
        z-index: 9999;
        display: none;

        @include media("<=tablet") {
            display: grid;
        }

        &__bars {
            display: grid;
            place-items: center;
            height: 1px;
            width: 100%;
            position: relative;

            &_bar1 {
                height: 1px;
                width: 24px;
                background-color: $eneseewhite;
                position: absolute;
                bottom: 8px;
                transition: 0.4s ease-in;

                &.toggle {
                    transform: rotate(45deg);
                    background-color: #033027 !important;
                    bottom: unset;
                }
            }

            &_bar2 {
                height: 1px;
                width: 24px;
                background-color: $eneseewhite;
                position: absolute;
                transition: 0.4s ease-in;

                &.toggle {
                    transform: scaleX(0);
                }
            }

            &_bar3 {
                height: 1px;
                width: 24px;
                background-color: $eneseewhite;
                position: absolute;
                top: 8px;
                transition: 0.4s ease-in;

                &.toggle {
                    transform: rotate(-45deg);
                    background-color: #033027 !important;
                    top: unset;
                }
            }
        }

        &__text-inner {
            opacity: 0;
            display: none;
        }
    }

    &_drawer {
        height: auto;
        width: 100%;
        display: none;
        align-items: flex-start;
        flex-direction: column;
        background-color: $eneseewhite;
        padding: toRem(80) 5% toRem(33);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;

        @include media("<=tablet") {
            display: flex;
        }

        &-inner {
            width: 100%;
            height: fit-content;

            & li {
                color: #03211b;
                font-weight: 400;
                font-size: toRem(16);
                line-height: toRem(24);

                &:not(:last-of-type) {
                    margin-bottom: toRem(24);
                }

                &:last-of-type {
                    color: #09846b !important;
                    text-decoration-line: underline;
                    text-underline-offset: 2px;
                }

                & a {
                    color: currentColor;
                }
            }
        }
    }
}
</style>

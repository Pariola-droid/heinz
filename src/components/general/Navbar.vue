<script setup>
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";
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
            delay: 3,
            y: 0,
            autoAlpha: 1,
            ease: "power2.out",
        });
    }

    if (screenWidth.value < 1024) {
        gsap.set(".navbar", { y: -50, autoAlpha: 0 });
        const burgerBTN = document.querySelector(".navbar-hamburger");
        const sideNav = document.querySelector(".sideNav");
        const skrim = document.querySelector(".sideNav_skrim");
        const sideWrap = document.querySelector(".sideNav_navContent");
        const sideNavContent = document.querySelector(".sideNav_navContent-wrapper");
        const sideNavContentLine = document.querySelectorAll(".sideNav_navContent-top_line");
        const barOne = document.querySelector(".navbar-hamburger__bars_bar1");
        const barTwo = document.querySelector(".navbar-hamburger__bars_bar2");
        const barThree = document.querySelector(".navbar-hamburger__bars_bar3");

        gsap.to(".navbar", {
            duration: 1,
            delay: 3.5,
            y: 0,
            autoAlpha: 1,
            ease: "power2.out",
        });

        burgerBTN.addEventListener("click", () => {
            skrim.classList.toggle("toggle");
            sideWrap.classList.toggle("toggle");
            sideNav.classList.toggle("toggle");
            sideNavContent.classList.toggle("toggle");

            sideNavContentLine.forEach((sideNavContentL) => {
                sideNavContentL.classList.toggle("toggle");
            });

            barOne.classList.toggle("toggle");
            barTwo.classList.toggle("toggle");
            barThree.classList.toggle("toggle");

            if (sideNav.classList.contains("toggle")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
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
            <button class="navbar-hamburger">
                <div class="navbar-hamburger__bars">
                    <div class="navbar-hamburger__bars_bar1"></div>
                    <div class="navbar-hamburger__bars_bar2"></div>
                    <div class="navbar-hamburger__bars_bar3"></div>
                </div>
                <span class="navbar-hamburger__text-inner">Menu</span>
            </button>

            <!--  -->
            <ul class="navbar-left">
                <li data-magnetic data-cursor="-opaque">
                    <a href="#0">Products</a>
                </li>
                <li data-magnetic data-cursor="-opaque">
                    <a href="#0">Eco Farm</a>
                </li>
                <li data-magnetic data-cursor="-opaque">
                    <a href="#0">Recipes</a>
                </li>
            </ul>

            <div class="navbar-logo">
                <img src="/assets/brand/heinz-logo.svg" alt="Heinz Logo" />
            </div>

            <ul class="navbar-right">
                <li data-magnetic data-cursor="-opaque">
                    <a href="#0">about</a>
                </li>
                <li data-magnetic data-cursor="-opaque">
                    <a href="#0">EN</a>
                </li>
                <li data-magnetic data-cursor="-opaque">
                    <a href="#0">Log in</a>
                </li>
                <li data-magnetic data-cursor="-opaque">
                    <a href="#0">CART(0)</a>
                </li>
            </ul>

            <!--  -->
            <button class="navbar-navCart">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.66774 25.6668V7.00016H9.33441C9.33441 5.71683 9.79135 4.61822 10.7052 3.70433C11.6191 2.79044 12.7177 2.3335 14.0011 2.3335C15.2844 2.3335 16.383 2.79044 17.2969 3.70433C18.2108 4.61822 18.6677 5.71683 18.6677 7.00016H23.3344V25.6668H4.66774ZM11.6677 7.00016H16.3344C16.3344 6.3585 16.1061 5.80939 15.6496 5.35283C15.1922 4.8955 14.6427 4.66683 14.0011 4.66683C13.3594 4.66683 12.8103 4.8955 12.3537 5.35283C11.8964 5.80939 11.6677 6.3585 11.6677 7.00016ZM7.00107 23.3335H21.0011V9.3335H18.6677V12.8335H16.3344V9.3335H11.6677V12.8335H9.33441V9.3335H7.00107V23.3335ZM7.00107 23.3335V9.3335V23.3335Z"
                        fill="#1E344F"
                    />
                </svg>
            </button>
        </div>
    </nav>

    <!-- == SideNav == -->
    <div class="sideNav">
        <div class="sideNav_skrim"></div>
        <div class="sideNav_navContent">
            <div class="sideNav_navContent-wrapper">
                <div class="sideNav_navContent-top">
                    <small>Menu</small>
                    <span class="sideNav_navContent-top_line"></span>
                </div>
                <!--  -->
                <div class="sideNav_navContent-middle">
                    <h4 data-magnetic data-cursor="-opaque" class="active-route">
                        <a href="/">Home</a>
                    </h4>
                </div>
                <!--  -->
                <div class="sideNav_navContent-bottom">
                    <div class="sideNav_navContent-bottom-up">
                        <small>Follow Us on all Socials</small>
                        <span class="sideNav_navContent-top_line"></span>
                    </div>
                    <div class="sideNav_navContent-bottom-down">
                        <small data-magnetic data-cursor="-opaque"
                            ><a href="https://dribbble.com/Swift007" target="_blank" rel="noopener noreferrer">...</a></small
                        >
                        <small data-magnetic data-cursor="-opaque"
                            ><a href="https://www.linkedin.com/in/maurice-victor-869aa8175/" target="_blank" rel="noopener noreferrer">...</a></small
                        >
                        <small data-magnetic data-cursor="-opaque"
                            ><a href="https://www.behance.net/mauriceswift" target="_blank" rel="noopener noreferrer">...</a></small
                        >
                        <small data-magnetic data-cursor="-opaque"
                            ><a href="https://twitter.com/Maur1ce007" target="_blank" rel="noopener noreferrer">...</a></small
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    width: 100%;
    display: grid;
    place-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $creamy-brown;
    padding: 26px 0 12px;
    border-bottom: 1px solid $dark-blue;
    z-index: 9999;

    @include media("<=tablet") {
        padding: 20px 0 12px;
    }

    &-hamburger {
        border: 0;
        outline: none;
        display: grid;
        place-items: center;
        height: fit-content;
        width: 22px;
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
                height: 3px;
                width: 22px;
                background-color: $dark-blue;
                position: absolute;
                bottom: 4px;
                transition: 0.4s ease-in;

                &.toggle {
                    transform: rotate(45deg);
                    bottom: unset;
                }
            }

            &_bar2 {
                height: 3px;
                width: 22px;
                background-color: $dark-blue;
                position: absolute;
                transition: 0.4s ease-in;

                &.toggle {
                    transform: scaleX(0);
                }
            }

            &_bar3 {
                height: 3px;
                width: 22px;
                background-color: $dark-blue;
                position: absolute;
                top: 4px;
                transition: 0.4s ease-in;

                &.toggle {
                    transform: rotate(-45deg);
                    top: unset;
                }
            }
        }

        &__text-inner {
            opacity: 0;
            display: none;
        }
    }

    &_wrapper {
        width: 100%;
        max-width: 90%;
        // max-width: 1383px;
        height: fit-content;
        max-height: 110px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include media("<=tablet") {
            max-height: 80px;
        }
    }

    &-left {
        width: max-content;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        @include media("<=tablet") {
            display: none;
        }

        & li {
            text-transform: uppercase;
            font-weight: 400;
            font-size: 24px;
            line-height: 30px;
            position: relative;
            display: grid;
            place-items: center;

            & a {
                color: $dark-blue;
            }

            &::before {
                content: "";
                position: absolute;
                bottom: -5%;
                width: 0%;
                height: 5%;
                background-color: currentColor;
                transition: 0.5s ease-in;
            }

            &:hover {
                &::before {
                    width: 100%;
                }
            }

            &:not(:last-of-type) {
                margin-right: 60px;
            }
        }
    }

    &-logo {
        height: fit-content;
        width: max-content;

        & img {
            max-width: 136px;
            max-height: 69.63px;

            @include media("<=tablet") {
                max-width: 75px;
                max-height: 33px;
            }
        }
    }

    &-right {
        width: max-content;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        @include media("<=tablet") {
            display: none;
        }

        & li {
            text-transform: uppercase;
            font-weight: 400;
            font-size: 24px;
            line-height: 30px;
            position: relative;
            display: grid;
            place-items: center;

            & a {
                color: $dark-blue;
            }

            &::before {
                content: "";
                position: absolute;
                bottom: -5%;
                width: 0%;
                height: 5%;
                background-color: currentColor;
                transition: 0.5s ease-in;
            }

            &:hover {
                &::before {
                    width: 100%;
                }
            }

            &:not(:last-of-type) {
                margin-right: 60px;
            }
        }
    }

    &-navCart {
        height: fit-content;
        width: fit-content;
        display: none;

        @include media("<=tablet") {
            display: initial;
        }
    }
}

.sideNav {
    width: 0%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 98;
    transition: transform 0.5s cubic-bezier(0.36, 0, 0.66, 0);
    display: none;

    @include media("<=tablet") {
        display: initial;
    }

    &.toggle {
        width: 100%;
    }

    &_skrim {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(to right, hsla(220, 13%, 0%, 0.3) 40%, hsla(220, 13%, 0%, 1) 80%);
        z-index: 99;
        transition: opacity 0.8s cubic-bezier(0.7, 0, 0.2, 1);
        z-index: -1;
        opacity: 0;
        will-change: opacity;

        &.toggle {
            opacity: 0.3;
        }
    }

    &_navContent {
        width: 656px;
        height: 100vh;
        position: fixed;
        transform: translate(calc(100% + 6vw), 0) rotate(0.001deg);
        transition: transform 0.8s cubic-bezier(0.7, 0, 0.2, 1);
        background-color: $creamy-brown;
        right: 0;
        top: 0;
        bottom: 0;
        will-change: transform;
        display: grid;
        place-items: center;

        padding-left: 143px;
        padding-right: 162px;

        @include media("<=desktop") {
            padding-top: 118px;
            padding-bottom: 145px;
            padding-left: 95px;
            padding-right: 59px;
        }

        @include media("<=tablet") {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 0 32px;
        }

        &.toggle {
            transform: translate(0, 0) rotate(0.001deg);
        }

        &-wrapper {
            height: fit-content; //100%
            width: 100%;
            max-width: 351px;
            display: flex;
            align-items: center;
            flex-direction: column;
            opacity: 0;
            will-change: opacity;
            transition: 0.8s ease-in;

            &.toggle {
                opacity: 1;
            }

            @include media("<=tablet") {
                height: fit-content;
                max-width: 100%;
            }
        }

        &-top {
            width: 100%;
            max-height: 50px;
            height: fit-content;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            position: relative;
            padding-bottom: 40px;
            margin-bottom: 40px;

            @include media("<=phone") {
                padding-bottom: 16px;
            }

            & small {
                font-weight: 400;
                font-size: 16px;
                line-height: 160%;
                color: $bloody-red;
            }

            &_line {
                height: 1px;
                width: 0%;
                opacity: 0.3;
                background-color: $dark-blue;
                position: absolute;
                bottom: 0;
                right: 0;
                will-change: opacity;
                transition: 1s ease-in;

                &.toggle {
                    width: 100%;
                    opacity: 1;
                }
            }
        }

        &-middle {
            width: 100%;
            max-height: 370px;
            height: fit-content;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            row-gap: 32px;

            @include media("<=phone") {
                row-gap: 8px;
            }

            & h4 {
                font-weight: 500;
                font-size: 40px;
                line-height: 48px;
                text-transform: lowercase;
                color: $dark-blue;
                position: relative;

                @include media("<=phone") {
                    font-size: 28px;
                    font-weight: 400;
                    line-height: 160%;
                }

                &::before {
                    content: "";
                    position: absolute;
                    bottom: 40%;
                    right: 0;
                    width: 0%;
                    height: 5%;
                    background-color: currentColor;
                    transition: 0.5s ease-in;
                }

                &:hover {
                    &::before {
                        width: 100%;
                    }
                }
            }
        }

        &-bottom {
            margin-top: 60px;
            width: 100%;
            max-height: 120px;
            height: fit-content;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            row-gap: 40px;

            @include media("<=phone") {
                row-gap: 24px;
            }

            &-up {
                width: 100%;
                height: 50px;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                position: relative;
                padding-bottom: 40px;

                & small {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 160%;
                    color: $bloody-red;
                }
            }

            &-down {
                width: 100%;
                height: fit-content;
                max-height: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                & small {
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 160%;
                    text-transform: capitalize;
                    color: $black-secondary;
                    position: relative;
                    display: grid;
                    place-items: center;

                    @include media("<=phone") {
                        font-size: 16px;
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        bottom: -5%;
                        width: 0%;
                        height: 5%;
                        background-color: currentColor;
                        transition: 0.5s ease-in;
                    }

                    &:hover {
                        &::before {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>

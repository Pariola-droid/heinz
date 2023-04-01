<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref, onUnmounted } from "@vue/runtime-core";
import { IO } from "../../animation/observe";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const serv_1 = ref(null);
const serv_2 = ref(null);
const serv_3 = ref(null);
const screenWidth = ref(window.innerWidth);
// Paragraph nime...
const para_one = ref(null);
const para_two = ref(null);
const para_three = ref(null);
// Attributes
const attrVal1 = ref("paragraphMO");
const attrVal2 = ref("paragraphMO1");
const attrVal3 = ref("paragraphMO2");

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

window.addEventListener("resize", updateScreenWidth);

onMounted(() => {
    if (screenWidth.value > 1024) {
        gsap.set(serv_1.value, { autoAlpha: 0, y: 500, transformStyle: "preserve-3d" });
        gsap.set(serv_2.value, { autoAlpha: 0, y: 300, transformStyle: "preserve-3d" });
        gsap.set(serv_3.value, { autoAlpha: 0, y: 100, transformStyle: "preserve-3d" });

        gsap.to(serv_1.value, {
            scrollTrigger: {
                trigger: ".header_content_btn",
                start: "top center",
                end: "=+200",
                scrub: true,
            },
            delay: 2,
            duration: 1,
            stagger: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: "ease-in-out",
        });

        gsap.to(serv_2.value, {
            scrollTrigger: {
                trigger: ".services",
                start: "top top",
                end: "=+300",
                scrub: true,
            },
            duration: 1,
            stagger: 0.2,
            delay: 1,
            autoAlpha: 1,
            y: 0,
            ease: "ease-in-out",
        });

        gsap.to(serv_3.value, {
            scrollTrigger: {
                trigger: ".services",
                start: "top top",
                end: "=+300",
                scrub: true,
            },
            duration: 1,
            stagger: 0.4,
            delay: 2,
            autoAlpha: 1,
            y: 0,
            ease: "ease-in-out",
        });
    }

    if (screenWidth.value < 1024) {
        para_one.value.setAttribute("data-animation", "paragraph");
        para_two.value.setAttribute("data-animation", "fade");
        para_three.value.setAttribute("data-animation", "paragraph");
    }
});

ScrollTrigger.refresh();

// Cleanup on unmount
onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
    <section class="services" id="what-we-do">
        <div ref="services_wrapper" class="services_wrapper">
            <div class="services-top services-content-nime" ref="serv_1">
                <img src="/assets/components/services/service-illy1.png" alt="illustration" />
                <div class="services_copies-abs1">
                    <p ref="para_one" :data-animation="attrVal1">
                        We specialize in community management for Web3 companies and projects, providing tailored services such as content creation,
                        community moderation, and analytics on platforms like Telegram and Discord.
                    </p>
                </div>
                <div class="services_copies">
                    <h4 data-animation="header">Community Management</h4>
                    <div class="services_copies-small">
                        <small>Telegram MODs</small> | <small>Twitter Shilling</small> |
                        <small>Discord Admins</small>
                    </div>
                </div>
            </div>
            <div class="services-bottom">
                <div class="services-bottom_bum services-content-nime1" ref="serv_2">
                    <div class="services_copies-abs2">
                        <p ref="para_two" :data-animation="attrVal2">
                            From crafting the perfect introduction to keeping the conversation flowing, we&apos;re able to create an engaging and
                            informative AMA that your audience won't soon forget.
                        </p>
                    </div>
                    <div class="services_copies">
                        <h4 data-animation="header">AMA Hosting</h4>
                        <div class="services_copies-small">
                            <small>Twitter Space Host</small> |
                            <small>AMA Speaker</small>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="services-bottom_bum services-content-nime2" ref="serv_3">
                    <div class="services_copies-abs2">
                        <p ref="para_three" :data-animation="attrVal3">
                            Our experienced team of designers collaborate closely with clients to create effective and aesthetically pleasing designs
                            that align with the Web3 ethos of decentralization, transparency, and security.
                        </p>
                    </div>
                    <div class="services_copies">
                        <h4 data-animation="header">Design Solutions</h4>
                        <div class="services_copies-small">
                            <small>Branding</small> | <small>UI/UX</small> |
                            <small>Motion Design</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.services {
    height: fit-content;
    width: 100%;
    @include grid;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease-in;
    padding: toRem(62) 0 toRem(62);

    @include media("<=tablet") {
        padding: toRem(45) 0 toRem(35);
    }

    &_wrapper {
        width: 90%;
        max-width: toRem(1300);
        height: fit-content;
        @include flex(center, center);
        @include flex_col;
        row-gap: toRem(40);
        z-index: 99;
        transition: all 0.4s ease-in;
        overflow: hidden;

        @include media("<=tablet") {
            max-width: 90%;
            row-gap: toRem(12);
        }
    }

    &_copies {
        @include flex(unset, flex-start);
        @include flex_col;
        width: max-content;
        height: fit-content;

        & h4 {
            font-weight: 400;
            font-size: 32px;
            line-height: 44px;
            text-align: left;
            color: $eneseewhite;
            margin-bottom: 7px;

            @include media("<=tablet") {
                font-size: toRem(20);
                line-height: toRem(32);
                margin-bottom: 0;
            }
        }

        &-small {
            @include flex(flex-start, center);
            column-gap: toRem(24);

            @include media("<=tablet") {
                column-gap: toRem(12);
            }

            & small {
                font-weight: 400;
                font-size: 16px;
                line-height: 32px;
                color: $eneseewhite;
                text-align: left;

                @include media("<=tablet") {
                    font-size: toRem(12);
                    line-height: toRem(24);
                }
            }
        }

        &-abs1 {
            padding-top: toRem(108);
            padding-right: toRem(52);

            @include media("<=tablet") {
                padding-top: toRem(36);
                padding-right: toRem(32);
            }

            @media screen and (max-width: 350px) {
                padding-right: 0;
            }
        }

        &-abs2 {
            padding-top: toRem(85);
            padding-right: toRem(46);

            @include media("<=tablet") {
                padding-top: toRem(36);
                padding-right: toRem(32);
            }

            @media screen and (max-width: 350px) {
                padding-right: 0;
            }
        }

        &-abs2,
        &-abs1 {
            width: 100%;
            height: fit-content;
            position: absolute;
            top: 0;
            right: 0;
            @include flex(flex-end, flex-start);
            overflow: hidden;

            @media screen and (max-width: 350px) {
                @include flex(center, center);
            }

            & p {
                font-weight: 400;
                font-size: toRem(24);
                line-height: toRem(32);
                color: $eneseewhite;
                max-width: toRem(407);

                @include media("<=tablet") {
                    font-size: toRem(16);
                    line-height: toRem(24);
                    max-width: toRem(300);
                }

                @media screen and (max-width: 350px) {
                    max-width: 90%;
                    font-size: toRem(14);
                    line-height: toRem(18);
                }
            }
        }
    }

    &-top {
        width: 100%;
        height: 520px;
        position: relative;
        border-radius: 25px;
        border: 1px solid $borderLCG;
        overflow: hidden;
        padding-left: toRem(65);
        padding-bottom: toRem(58);
        @include flex(flex-start, flex-end);
        background-image: url(/assets/components/services/service-illy1.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        cursor: pointer;

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(40.2deg, rgba(3, 33, 27, 0.53) -4.5%, rgba(3, 33, 27, 0) 102.08%);
            z-index: -1;
            left: 0;
            bottom: 0;
            transition: all 0.4s ease-out;
            opacity: 0;

            @include media("<=tablet") {
                display: none;
            }
        }

        & > div > p {
            opacity: 0;
            transition: all 0.4s ease-in;
            transform: translateY(20px);
            z-index: 9;

            @include media("<=tablet") {
                opacity: 1;
                transform: translateY(0);
                transition: unset;
            }
        }

        &:hover {
            & p {
                opacity: 1;
                transform: translateY(0);
            }

            &::before {
                opacity: 1;
            }
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            display: none;

            @include media("<=tablet") {
                display: none;
            }
        }

        @include media("<=tablet") {
            height: 455px;
            padding-left: toRem(32);
            padding-bottom: toRem(32);
            background-image: url(/assets/components/services/m-service-illy1.svg);
        }
    }

    &-bottom {
        width: 100%;
        position: relative;
        border-radius: 25px;
        column-gap: toRem(40);
        display: grid;
        grid-template-columns: 1fr 1fr;

        @include media("<=tablet") {
            grid-template-columns: 1fr;
            row-gap: toRem(12);
        }

        &_bum {
            width: 100%;
            height: 520px;
            position: relative;
            border-radius: 25px;
            border: 1px solid rgba(18, 183, 161, 1);
            overflow: hidden;
            padding-left: toRem(45);
            padding-bottom: toRem(58);
            @include flex(flex-start, flex-end);
            cursor: pointer;

            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(40.2deg, rgba(3, 33, 27, 0.53) -4.5%, rgba(3, 33, 27, 0) 102.08%);
                z-index: -1;
                left: 0;
                bottom: 0;
                transition: all 0.4s ease-out;
                opacity: 0;

                @include media("<=tablet") {
                    display: none;
                }
            }

            & > div > p {
                opacity: 0;
                transition: all 0.4s ease-in;
                transform: translateY(20px);
                z-index: 9;

                @include media("<=tablet") {
                    opacity: 1;
                    transform: translateY(0);
                    transition: unset;
                }
            }

            &:hover {
                & p {
                    opacity: 1;
                    transform: translateY(0);
                }

                &::before {
                    opacity: 1;
                }
            }

            @include media("<=tablet") {
                height: 455px;
                padding-left: toRem(32);
                padding-bottom: toRem(32);
            }

            &:nth-child(1) {
                background-image: url(/assets/components/services/service-illy2.png);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;

                @include media("<=tablet") {
                    background-image: url(/assets/components/services/m-service-illy2.svg);
                }
            }

            &:nth-child(2) {
                background-image: url(/assets/components/services/service-illy3.png);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;

                @include media("<=tablet") {
                    background-image: url(/assets/components/services/m-service-illy3.svg);
                }
            }
        }
    }
}
</style>

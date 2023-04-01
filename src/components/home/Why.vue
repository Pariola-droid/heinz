<script setup>
import { onMounted, ref } from "@vue/runtime-core";
const whyText = ref([]);

onMounted(() => {
    whyText.value.push(...new Array(20).fill("Why go with us"));
});
</script>

<template>
    <section class="why" id="who-we-are">
        <div class="why_wrapper">
            <div class="why_marquee" data-scroll>
                <div class="why_marquee_nimeScroll" data-scroll>
                    <div class="why_marquee_wrapper" data-scroll data-scroll-direction="horizontal" data-scroll-delay="1" data-scroll-speed="-8">
                        <h2 v-for="(whyT, index) in whyText" :key="index">{{ whyT }}</h2>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="why_bottom" data-scroll>
                <div class="why_bottom-item">
                    <p data-animation="paragraph">
                        We pride ourselves on our ability to think creatively and strategically, helping our CLIENTS stand out in a crowded market.
                    </p>
                </div>
                <div class="why_bottom-item">
                    <p data-animation="paragraph">
                        With a history of serving numerous clients, our experienced team of community managers possess a deep understanding of the
                        Web3 landscape.
                    </p>
                </div>
                <div class="why_bottom-item">
                    <p data-animation="paragraph">
                        We take a collaborative and customized approach to our services, tailoring our solutions to meet the specific needs of your
                        business.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.why {
    width: 100%;
    height: fit-content;
    @include grid;
    overflow: hidden;

    &_wrapper {
        width: 90%;
        max-width: toRem(1300);
        height: fit-content;
        background-color: #033027;
        border-radius: 25px;
        padding: toRem(50) 0 toRem(20);
        @include flex(unset, center);
        @include flex_col;
        overflow: hidden;

        @include media("<=tablet") {
            width: 100%;
            max-width: 95%;
            padding: toRem(50) 0 toRem(15);
            margin-bottom: toRem(25);
        }
    }

    &_marquee {
        width: 100%;
        height: fit-content;
        overflow: hidden;
        margin-bottom: toRem(40);

        @include media("<=tablet") {
            margin-bottom: toRem(30);
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
            column-gap: 35px;

            & h2 {
                font-weight: 400;
                font-size: toRem(72);
                line-height: toRem(102);
                transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

                @include media("<=tablet") {
                    font-size: toRem(32);
                    line-height: toRem(44);
                }

                &:nth-child(odd) {
                    @extend %fancyGreen;
                }

                &:nth-child(even) {
                    @extend %fancyWhite;
                }
            }
        }
    }

    &_bottom {
        width: 100%;
        height: fit-content;
        padding: 0 toRem(20);
        @include grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: toRem(12);

        @include media("<=tablet") {
            grid-template-columns: repeat(1, 1fr);
            padding: 0 toRem(12);
            row-gap: toRem(12);
        }

        &-item {
            width: 100%;
            height: 358px;
            border-radius: 25px;
            @include flex(unset, center);
            @include flex_col;
            padding: 0 toRem(42);
            padding-top: toRem(80);
            position: relative;
            overflow: hidden;

            @include media("<=tablet") {
                padding: 0;
                // padding-left: toRem(40);
                padding-top: toRem(50);
                @include flex(unset, center);
                height: 252px;
            }

            &:nth-child(1) {
                background-image: url(/assets/components/why/whyIlly1.png);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;

                @include media("<=tablet") {
                    background-image: url(/assets/components/why/m-whyIlly1.svg);
                }

                &::after {
                    content: "01";
                    position: absolute;
                    bottom: -3%;
                    right: 0;
                    z-index: 1;
                    font-weight: 700;
                    font-size: toRem(128);
                    line-height: toRem(144);
                    color: transparent;
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: rgba(18, 240, 196, 0.5);

                    @supports (-webkit-text-stroke: 1px rgba(18, 240, 196, 0.5)) {
                        -webkit-text-stroke: 1px rgba(18, 240, 196, 0.5);
                        -webkit-text-fill-color: transparent;
                    }

                    @include media("<=tablet") {
                        font-size: toRem(90);
                        line-height: toRem(100);
                        bottom: 0;
                        right: toRem(12);
                    }
                }
            }

            &:nth-child(2) {
                background-image: url(/assets/components/why/whyIlly2.png);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;

                @include media("<=tablet") {
                    background-image: url(/assets/components/why/m-whyIlly2.svg);
                }

                &::after {
                    content: "02";
                    position: absolute;
                    bottom: -3%;
                    right: 1%;
                    z-index: 1;
                    font-weight: 700;
                    font-size: toRem(128);
                    line-height: toRem(144);
                    color: transparent;
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: rgba(18, 240, 196, 0.5);

                    @supports (-webkit-text-stroke: 1px rgba(18, 240, 196, 0.5)) {
                        -webkit-text-stroke: 1px rgba(18, 240, 196, 0.5);
                        -webkit-text-fill-color: transparent;
                    }

                    @include media("<=tablet") {
                        font-size: toRem(90);
                        line-height: toRem(100);
                        bottom: 0;
                        right: toRem(12);
                    }
                }
            }

            &:nth-child(3) {
                background-image: url(/assets/components/why/whyIlly3.png);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;

                @include media("<=tablet") {
                    background-image: url(/assets/components/why/m-whyIlly3.svg);
                }

                &::after {
                    content: "03";
                    position: absolute;
                    bottom: -3%;
                    right: 1%;
                    z-index: 1;
                    font-weight: 700;
                    font-size: toRem(128);
                    line-height: toRem(144);
                    color: transparent;
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: rgba(18, 240, 196, 0.5);

                    @supports (-webkit-text-stroke: 1px rgba(18, 240, 196, 0.5)) {
                        -webkit-text-stroke: 1px rgba(18, 240, 196, 0.5);
                        -webkit-text-fill-color: transparent;
                    }

                    @include media("<=tablet") {
                        font-size: toRem(90);
                        line-height: toRem(100);
                        bottom: 0;
                        right: toRem(12);
                    }
                }
            }

            & p {
                font-weight: 400;
                font-size: toRem(20);
                line-height: toRem(28);
                color: $eneseeGreen1;
                z-index: 1;

                @include media("<=tablet") {
                    font-size: toRem(16);
                    line-height: toRem(24);
                    max-width: toRem(267);
                }
            }
        }
    }
}
</style>

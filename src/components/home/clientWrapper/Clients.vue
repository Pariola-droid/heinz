<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import { cBrand } from "../../../data/clients";

const state = reactive({
    brands: [{}],
});

onMounted(() => {
    state.brands = cBrand;
});
</script>

<template>
    <section class="client">
        <div class="client_wrapper">
            <div class="client_top iw">
                <h2 data-animation="header">Meet our Clients</h2>
                <div class="client_playground" data-scroll>
                    <div class="client_playground_guide">
                        <div class="client_playground_nime">
                            <div class="client_playground_wrapper">
                                <img src="/assets/components/client/c-brands/horsefi.svg" alt="" />
                                <img src="/assets/components/client/c-brands/nerfbot.svg" alt="" />
                                <img src="/assets/components/client/c-brands/inverted.svg" alt="" />
                                <img src="/assets/components/client/c-brands/optimus.svg" alt="" />
                                <img src="/assets/components/client/c-brands/bowl.svg" alt="" />
                                <img src="/assets/components/client/c-brands/tayarra.svg" alt="" />
                                <img src="/assets/components/client/c-brands/newton.svg" alt="" />
                            </div>
                            <!--  -->
                            <div aria-hidden="true" class="client_playground_wrapper">
                                <img src="/assets/components/client/c-brands/horsefi.svg" alt="" />
                                <img src="/assets/components/client/c-brands/nerfbot.svg" alt="" />
                                <img src="/assets/components/client/c-brands/inverted.svg" alt="" />
                                <img src="/assets/components/client/c-brands/optimus.svg" alt="" />
                                <img src="/assets/components/client/c-brands/bowl.svg" alt="" />
                                <img src="/assets/components/client/c-brands/tayarra.svg" alt="" />
                                <img src="/assets/components/client/c-brands/newton.svg" alt="" />
                            </div>
                            <!--  -->
                            <div aria-hidden="true" class="client_playground_wrapper">
                                <img src="/assets/components/client/c-brands/horsefi.svg" alt="" />
                                <img src="/assets/components/client/c-brands/nerfbot.svg" alt="" />
                                <img src="/assets/components/client/c-brands/inverted.svg" alt="" />
                                <img src="/assets/components/client/c-brands/optimus.svg" alt="" />
                                <img src="/assets/components/client/c-brands/bowl.svg" alt="" />
                                <img src="/assets/components/client/c-brands/tayarra.svg" alt="" />
                                <img src="/assets/components/client/c-brands/newton.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="client_bottom iw">
                <h2 data-animation="header">and Partners</h2>
                <div class="client_playground bordered" data-scroll>
                    <div class="client_playground_guide">
                        <div class="client_playground_nime">
                            <div class="client_playground_wrapper bordered_nime">
                                <img src="/assets/components/client/p-brands/pinksale.svg" alt="" />
                                <img src="/assets/components/client/p-brands/centurify.svg" alt="" />
                                <img src="/assets/components/client/p-brands/newton.svg" alt="" />
                            </div>
                            <!--  -->
                            <div data-hide="this" class="client_playground_wrapper bordered_nime">
                                <img src="/assets/components/client/p-brands/pinksale.svg" alt="" />
                                <img src="/assets/components/client/p-brands/centurify.svg" alt="" />
                                <img src="/assets/components/client/p-brands/newton.svg" alt="" />
                            </div>
                            <!--  -->
                            <div data-hide="this" class="client_playground_wrapper bordered_nime">
                                <img src="/assets/components/client/p-brands/pinksale.svg" alt="" />
                                <img src="/assets/components/client/p-brands/centurify.svg" alt="" />
                                <img src="/assets/components/client/p-brands/newton.svg" alt="" />
                            </div>
                            <!--  -->
                            <div data-hide="this" class="client_playground_wrapper bordered_nime">
                                <img src="/assets/components/client/p-brands/pinksale.svg" alt="" />
                                <img src="/assets/components/client/p-brands/centurify.svg" alt="" />
                                <img src="/assets/components/client/p-brands/newton.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
$gap: 32px;

[data-hide="this"] {
    display: none !important;

    @include media("<=tablet") {
        display: flex !important;
    }
}

.client {
    width: 100%;
    height: fit-content;
    @include grid;

    &_wrapper {
        @include flex("center", "center");
        @include flex_col;
        row-gap: toRem(20);
        height: fit-content;
        width: 90%;
        max-width: toRem(1300);

        @include media("<=tablet") {
            max-width: 90%;
            row-gap: toRem(32);
        }
    }

    & .iw {
        width: 100%;
        height: fit-content;
        @include flex("center", "center");
        @include flex_col;

        h2 {
            font-weight: 400;
            font-size: toRem(80);
            line-height: toRem(102);
            @include media("<=tablet") {
                font-size: toRem(32);
                line-height: toRem(44);
                margin-bottom: toRem(16);
            }
        }

        &:nth-child(1) > h2 {
            margin-right: auto;
            text-align: left;
        }

        &:nth-child(2) > h2 {
            margin-left: auto;
            text-align: right;
        }
    }

    &_playground {
        width: 100%;
        height: 160px;
        background: rgba(3, 48, 39, 0.27);
        border-radius: 19px;
        @include grid;
        padding: 0 toRem(40);
        overflow: hidden;

        @include media("<=tablet") {
            height: 138px;
            padding: 0;
        }

        &_guide {
            @include grid;
            width: 100%;
            overflow: hidden;
        }

        &_nime {
            display: flex;
            column-gap: $gap;
            overflow: hidden;
        }

        &_wrapper {
            @include flex(center, center);
            column-gap: $gap;
            white-space: nowrap;
            -webkit-animation: marquee 20s linear infinite;
            animation: marquee 20s linear infinite;

            @include media("<=tablet") {
                height: fit-content;
                width: 100%;
            }

            & img {
                @include media("<=tablet") {
                }
            }
        }
    }

    & .bordered {
        background: $eneseeGreen0 !important;
        border: 1px solid $borderLCG;

        &_nime {
            animation: none;
            will-change: unset;
            @include flex(center, center);

            @include media("<=tablet") {
                will-change: transform;
                -webkit-animation: marqueeOpp 10s linear infinite;
                animation: marqueeOpp 10s linear infinite;
            }
        }
    }
}
</style>

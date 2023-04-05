<script setup>
import { onMounted, ref } from "@vue/runtime-core";

onMounted(() => {});
</script>

<template>
    <section class="featuredSauce">
        <div class="featuredSauce-text"><h1>Our Hottest Sauce</h1></div>
        <!--  -->
        <div class="featuredSauce_border">
            <div class="featuredSauce_wrapper">
                <div class="featuredSauce-sauce">
                    <div class="featuredSauce-sauce-img">
                        <div class="featuredSauce-sauce-img__abs">
                            <img src="/assets/components/hot-sauce/sauce-bg.jpg" alt="sauce_bg" />
                        </div>

                        <div class="featuredSauce-sauce-img__main">
                            <img src="/assets/components/hot-sauce/sauce-1.svg" alt="sauce 1" />
                        </div>
                    </div>

                    <div class="featuredSauce-sauce-text">
                        <h3>Heinz Chili Sauce</h3>
                        <small><b>$20</b></small>
                    </div>
                </div>

                <div class="featuredSauce-sauce">
                    <div class="featuredSauce-sauce-img">
                        <div class="featuredSauce-sauce-img__abs">
                            <img src="/assets/components/hot-sauce/sauce-bg.jpg" alt="sauce_bg" />
                        </div>

                        <div class="featuredSauce-sauce-img__main">
                            <img src="/assets/components/hot-sauce/sauce-2.svg" alt="sauce 2" />
                        </div>
                    </div>
                    <div class="featuredSauce-sauce-text">
                        <h3>Heinz Chili Sauce</h3>
                        <small><b>$20</b></small>
                    </div>
                </div>

                <div class="featuredSauce-sauce">
                    <div class="featuredSauce-sauce-img">
                        <div class="featuredSauce-sauce-img__abs">
                            <img src="/assets/components/hot-sauce/sauce-bg.jpg" alt="sauce_bg" />
                        </div>

                        <div class="featuredSauce-sauce-img__main">
                            <img src="/assets/components/hot-sauce/sauce-3.svg" alt="sauce 3" />
                        </div>
                    </div>
                    <div class="featuredSauce-sauce-text">
                        <h3>Heinz Chili Sauce</h3>
                        <small><b>$20</b></small>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="featuredSauce-btn">
            <button>View More</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.featuredSauce {
    height: fit-content;
    overflow: hidden;
    width: 100%;
    background-color: $dark-blue;
    padding: 80px 0 80px;
    display: grid;
    place-items: center;

    @include media("<=tablet") {
        padding: 25px 0 8px;
    }

    &-text {
        width: max-content;
        height: fit-content;
        margin-bottom: 40px;

        @include media("<=tablet") {
            margin-bottom: 0;
        }

        & h1 {
            font-weight: 400;
            font-size: 90px;
            line-height: 113px;
            color: $creamy-brown;

            @include media("<=tablet") {
                font-size: 50px;
                line-height: 62px;
            }
        }
    }

    &_border {
        width: 100%;
        height: fit-content;
        max-height: 550px;
        display: grid;
        place-items: center;
        border: 0.8px solid $creamy-brown;
        border-left: 0;
        border-right: 0;

        @include media("<=tablet") {
            max-height: unset;
            border: 0;
        }
    }

    &_wrapper {
        width: 100%;
        max-width: 95%;
        height: fit-content;
        max-height: 580px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border: 0.8px solid $creamy-brown;
        border-top: 0;
        border-bottom: 0;

        @include media("<=tablet") {
            grid-template-columns: repeat(1, 1fr);
            max-height: unset;
            border: 0;
            max-width: 100%;
        }
    }

    &-sauce {
        height: fit-content;
        width: 100%;
        padding: 30px 25px 20px;

        @include media("<=phone") {
            padding: 25px 16px 16px;
        }

        &:not(:last-of-type) {
            border-right: 1px solid $creamy-brown;

            @include media("<=tablet") {
                border-right: 0;
                border-bottom: 0.5px solid $creamy-brown;
            }
        }

        &-img {
            width: 100%;
            height: 440px;
            display: grid;
            place-items: center;
            margin-bottom: 22px;
            background-color: $creamy-brown;
            position: relative;
            border-radius: 10px;
            overflow: hidden;

            @include media("<=tablet") {
                height: 390px;
            }

            &__abs {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                & img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &__main {
                position: relative;
                width: 334px;
                height: 334px;

                @include media("<=phone") {
                    width: 276px;
                    height: 276px;
                }

                & img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        &-text {
            width: 100%;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;

            & h3 {
                font-family: "Athletics";
                font-weight: 700;
                font-size: 28px;
                line-height: 35px;
                color: $white;

                @include media("<=tablet") {
                    font-size: 20px;
                    line-height: 25px;
                }
            }

            & small {
                font-family: "Athletics";
                font-weight: 700;
                font-size: 28px;
                line-height: 35px;
                color: $white;

                @include media("<=tablet") {
                    font-size: 20px;
                    line-height: 25px;
                }
            }
        }
    }

    &-btn {
        width: max-content;
        height: fit-content;
        display: grid;
        place-items: center;
        margin-top: 80px;

        & button {
            height: 55px;
            width: max-content;
            padding: 0 20px;
            background: $grinch-green;
            border-radius: 100px;
            display: grid;
            place-items: center;
            font-weight: 700;
            font-size: 28px;
            line-height: 35px;
            cursor: pointer;
        }

        @include media("<=tablet") {
            display: none;
        }
    }
}
</style>

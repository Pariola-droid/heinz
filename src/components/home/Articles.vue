<script setup>
import { onMounted, ref } from "@vue/runtime-core";

onMounted(() => {});
</script>

<template>
    <section class="articles">
        <div class="articles-text"><h1 data-animation="header">Enjoy Our Articles</h1></div>
        <div class="articles_border">
            <div class="articles_wrapper">
                <div class="articles-blog">
                    <div class="articles-blog-img">
                        <img src="/assets/components/articles/article1.jpg" alt="article image" />
                    </div>

                    <div class="articles-blog-text">
                        <h3>Learn How Heinz are Empowering Farmers in nigeria</h3>
                        <p>Farmers in Africa are beign empowered by heinz, we&apos;ve just launched our 2 day summit, to help improve the...</p>
                        <small data-magnetic data-cursor="-opaque"
                            ><b><a href="/">Read Article</a></b></small
                        >
                    </div>
                </div>

                <div class="articles-blog">
                    <div class="articles-blog-img">
                        <img src="/assets/components/articles/article2.jpg" alt="article image" />
                    </div>

                    <div class="articles-blog-text">
                        <h3>Learn How Heinz are Empowering Farmers in nigeria</h3>
                        <p>Farmers in Africa are beign empowered by heinz, we&apos;ve just launched our 2 day summit, to help improve the...</p>
                        <small data-magnetic data-cursor="-opaque"
                            ><b><a href="/">Read Article</a></b></small
                        >
                    </div>
                </div>

                <div class="articles-blog">
                    <div class="articles-blog-img">
                        <img src="/assets/components/articles/article3.jpg" alt="article image" />
                    </div>

                    <div class="articles-blog-text">
                        <h3>Learn How Heinz are Empowering Farmers in nigeria</h3>
                        <p>Farmers in Africa are beign empowered by heinz, we&apos;ve just launched our 2 day summit, to help improve the...</p>
                        <small data-magnetic data-cursor="-opaque"
                            ><b><a href="/">Read Article</a></b></small
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.articles {
    height: fit-content;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    &-text {
        width: max-content;
        height: fit-content;
        margin-bottom: 40px;

        @include media("<=tablet") {
            margin-bottom: 25px;
        }

        & h1 {
            font-weight: 400;
            font-size: 90px;
            line-height: 113px;
            color: $creamy-brown;

            @include media("<=tablet") {
                font-size: 48px;
                line-height: 60px;
            }
        }
    }

    &_border {
        width: 100%;
        height: fit-content;
        max-height: 750px;
        display: grid;
        place-items: center;
        border: 0.8px solid $creamy-brown;
        border-left: 0;
        border-right: 0;

        @include media("<=tablet") {
            border: 0.5px 0 0.5px solid $creamy-brown;
            max-height: unset;
        }
    }

    &_wrapper {
        width: 100%;
        max-width: 95%;
        height: fit-content;
        max-height: 750px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border: 0.8px solid $creamy-brown;
        border-top: 0;
        border-bottom: 0;

        @include media("<=tablet") {
            grid-template-columns: 1fr;
            border: 0;
            max-height: unset;
            max-width: 100%;
            padding-bottom: 8px;
        }
    }

    &-blog {
        height: fit-content;
        width: 100%;
        padding: 30px 25px 30px;

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
            margin-bottom: 30px;
            border-radius: 10px;
            overflow: hidden;

            @include media("<=tablet") {
                height: 355px;
                margin-bottom: 16px;
            }

            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-text {
            width: 100%;
            height: fit-content;
            display: flex;
            align-items: flex-start;
            flex-direction: column;

            & h3 {
                font-weight: 400;
                font-size: 28px;
                line-height: 35px;
                color: $white;
                margin-bottom: 12px;

                @include media("<=tablet") {
                    font-size: 24px;
                    line-height: 30px;
                    margin-bottom: 16px;
                }
            }

            & p {
                font-family: "Athletics";
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                color: $white;
                opacity: 0.7;

                @include media("<=tablet") {
                    font-size: 14px;
                    line-height: 17px;
                }
            }

            & small {
                font-family: "Athletics";
                font-size: 24px;
                line-height: 30px;
                margin-top: 20px;
                color: $brown-orange;

                & a {
                    color: currentColor;
                }

                @include media("<=tablet") {
                    margin-top: 16px;
                    font-size: 18px;
                    line-height: 22px;
                }
            }
        }
    }
}
</style>

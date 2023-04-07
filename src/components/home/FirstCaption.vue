<script setup>
import { onMounted, ref } from "@vue/runtime-core";

onMounted(() => {});
</script>

<template>
    <section class="captionOne">
        <div class="captionOne_wrapper">
            <div class="captionOne-content">
                <h1>Freshly made from Our Eco Farm</h1>
                <div class="p">
                    We are proud to see every spicy sauce being created deep within the farms of Lagos Nigeria, crafted with the best local ball
                    peppers to help create a world class sauce and deliver spiceness to the ingredient.
                </div>
                <button>Read more</button>
            </div>

            <div class="captionOne-image">
                <div class="captionOne-image__img">
                    <img src="/assets/components/caption/caption-image-1.jpg" alt="caption image 1" data-speed="0.5" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.captionOne {
    height: fit-content;
    overflow: hidden;
    width: 100%;
    background-color: $creamy-brown;
    display: grid;
    place-items: center;

    &_wrapper {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include media("<=tablet") {
            flex-direction: column;
        }
    }

    &-content {
        width: 50%;
        padding-left: 5%;
        padding-right: 5%;
        height: fit-content;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;

        @include media("<=tablet") {
            width: 100%;
            padding-top: 25px;
        }

        & h1 {
            font-weight: 400;
            font-size: 88px;
            line-height: 111px;
            color: $dark-blue;
            margin-bottom: 60px;
            max-width: 95%;

            @include media("<=tablet") {
                max-width: 100%;
                font-size: 48px;
                line-height: 60px;
                margin-bottom: 25px;
            }
        }

        & .p {
            font-family: "Athletics";
            font-weight: 400;
            font-size: 24px;
            line-height: 30px;
            color: $dark-blue;
            margin-bottom: 60px;
            max-width: 90%;
            overflow: hidden;

            @include media("<=tablet") {
                max-width: 100%;
                font-size: 16px;
                line-height: 20px;
                margin-bottom: 40px;
            }
        }

        & button {
            display: grid;
            place-items: center;
            padding: 0 20px;
            width: max-content;
            height: 55px;
            background: $grinch-green;
            border-radius: 100px;
            font-weight: 700;
            font-size: 28px;
            line-height: 35px;

            @include media("<=tablet") {
                height: 32px;
                padding: 0 12px;
                font-size: 16px;
                line-height: 20px;
            }
        }
    }

    &-image {
        padding: 80px 5% 80px;
        height: fit-content;
        width: 50%;
        display: grid;
        place-items: center;
        border-bottom: 0.8px solid $dark-blue;
        border-left: 0.8px solid $dark-blue;

        @include media("<=tablet") {
            width: 100%;
            padding: toRem(40) 5% toRem(40);
            border-left: 0;
            border-bottom: 0.5px solid $dark-blue;
        }

        &__img {
            width: 100%;
            height: 675px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            overflow: hidden;

            @include media("<=tablet") {
                height: 385px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>

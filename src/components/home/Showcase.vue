<script setup>
import { onMounted, ref } from "@vue/runtime-core";

onMounted(() => {});
</script>

<template>
    <section class="showcase">
        <div class="showcase_wrapper" data-speed="1.05">
            <div class="showcase-sc1" data-speed="1.05">
                <img src="/assets/components/showcase/sc1.jpg" alt="showcase image" />
            </div>
            <div class="showcase-sc2" data-speed="1.05">
                <img src="/assets/components/showcase/sc2.jpg" alt="showcase image" />
            </div>

            <h1>Used by the Best Chefs Around The world</h1>

            <div class="showcase-sc3" data-speed="0.95">
                <img src="/assets/components/showcase/sc3.jpg" alt="showcase image" />
            </div>
            <div class="showcase-sc4" data-speed="1.05">
                <img src="/assets/components/showcase/sc4.jpg" alt="showcase image" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.showcase {
    width: 100%;
    height: fit-content;
    background-color: $creamy-brown;
    display: grid;
    place-items: center;
    overflow: hidden;

    &_wrapper {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        position: relative;
        padding-top: 290px;
        padding-bottom: 700px;
        max-height: 1200px;
        height: 100vh;

        @include media("<=tablet") {
            padding: 210px 0 160px;
            height: fit-content;
        }
    }

    & h1 {
        max-width: 620px;
        height: 162px;
        font-weight: 400;
        font-size: 64px;
        line-height: 81px;
        text-align: center;
        color: $dark-blue;
        z-index: 1;

        @include media("<=tablet") {
            font-size: 40px;
            line-height: 50px;
            max-width: 400px;
        }

        @include media("<=phone") {
            max-width: 290px;
        }
    }

    &-sc1 {
        position: absolute;
        top: 120px;
        left: 90px;
        max-width: 420px;
        max-height: 365px;
        overflow: hidden;
        border-radius: 8.93119px;

        @include media("<=tablet") {
            max-width: 190px;
            max-height: 150px;
            top: 14.5%;
            left: -8%;
            border-radius: 5px;
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-sc2 {
        position: absolute;
        top: 180px;
        right: 95px;
        max-width: 380px;
        max-height: 420px;
        overflow: hidden;
        border-radius: 9.78899px;

        @include media("<=tablet") {
            max-width: 170px;
            max-height: 175px;
            top: 3%;
            right: -3%;
            border-radius: 5px;
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-sc3 {
        position: absolute;
        bottom: 120px;
        left: 220px;
        max-width: 610px;
        max-height: 350px;
        overflow: hidden;
        border-radius: 13.6326px;

        @include media("<=tablet") {
            max-width: 235px;
            max-height: 130px;
            bottom: 13%;
            left: -16%;
            border-radius: 5px;
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-sc4 {
        position: absolute;
        bottom: 45px;
        right: 245px;
        max-width: 320px;
        max-height: 300px;
        overflow: hidden;
        border-radius: 7.07122px;

        @include media("<=tablet") {
            max-width: 150px;
            max-height: 145px;
            bottom: -8%;
            right: 0%;
            border-radius: 5px;
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>

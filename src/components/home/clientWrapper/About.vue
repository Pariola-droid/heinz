<script setup>
import { onMounted, ref, onUnmounted } from "@vue/runtime-core";
//
const screenWidth = ref(window.innerWidth);
// Paragraph nime...
const para_one = ref(null);
const para_two = ref(null);

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

window.addEventListener("resize", updateScreenWidth);

onMounted(() => {
    if (screenWidth.value < 1024) {
        para_one.value.setAttribute("data-animation", "fade");
        para_two.value.setAttribute("data-animation", "paragraph");
    }
});

// Cleanup on unmount
onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
    <section class="about" data-scroll data-sticky data-scroll-delay="1">
        <p ref="para_one" class="p1" data-scroll data-scroll-speed="8" data-scroll-delay="1" data-scroll-direction="horizontal">
            Our team of experts are passionate about exploring new technologies and trends, and we leverage our knowledge to deliver innovative
            solutions to our clients.
        </p>
        <p ref="para_two" class="p2" data-scroll data-scroll-speed="10" data-scroll-direction="horizontal">
            We believe in building long-term partnerships with our clients, and we are dedicated to helping them succeed in the competitive Web3
            landscape.
        </p>
    </section>
</template>

<style lang="scss" scoped>
.about {
    width: 100%;
    height: 150vh;
    max-height: 850px;
    position: relative;
    @include grid;

    @include media("<=tablet") {
        max-height: unset;
        height: fit-content;
        padding: toRem(45) 5% toRem(85);
        row-gap: toRem(75);
    }

    & p {
        font-weight: 400;
        font-size: toRem(64);
        line-height: toRem(72);
        color: $eneseewhite;
        max-width: toRem(985);
        position: absolute;

        @include media("<=tablet") {
            position: unset;
            font-size: toRem(24);
            line-height: toRem(32);
            max-width: unset;
        }

        &:nth-child(1) {
            margin-right: auto;
            @include media("<=tablet") {
                max-width: toRem(500);
            }

            @include media("<=phone") {
                max-width: 100%;
            }
        }

        &:nth-child(2) {
            margin-left: auto;
            @include media("<=tablet") {
                max-width: toRem(400);
            }

            @include media("<=phone") {
                max-width: 80%;
            }
        }
    }

    & .p1 {
        top: 132px;
        left: toRem(-150);
    }

    & .p2 {
        top: 320px;
        right: toRem(-300);
    }
}
</style>

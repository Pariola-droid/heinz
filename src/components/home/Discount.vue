<script setup>
import { onMounted, ref } from "@vue/runtime-core";

onMounted(() => {});
</script>

<template>
    <section class="discount">
        <div class="discount-text">
            <h1 data-animation="header">BE PART OF OUR CLUB FOR DISCOUNT</h1>
        </div>

        <form action="" class="discount-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" data-magnetic>Enter</button>
        </form>
    </section>
</template>

<style lang="scss" scoped>
.discount {
    height: fit-content;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 190px 0 210px;

    @include media("<=tablet") {
        padding: 85px 0 90px;
    }

    &-text {
        width: max-content;
        height: fit-content;
        margin-bottom: 55px;

        & h1 {
            font-weight: 400;
            font-size: 90px;
            line-height: 113px;
            text-align: center;
            color: $creamy-brown;
            max-width: 895px;

            @include media("<=tablet") {
                max-width: 400px;
                font-size: 41.0991px;
                line-height: 52px;
            }

            @include media("<=phone") {
                max-width: 300px;
            }
        }
    }

    &-form {
        width: 620px;
        height: 80px;
        display: grid;
        place-items: center;
        background-color: $white;
        border-radius: 85px;
        overflow: hidden;
        position: relative;

        @include media("<=tablet") {
            width: 500px;
            height: 50px;
            border-radius: 50px;
        }

        @include media("<=phone") {
            width: 90%;
        }

        & input {
            width: 100%;
            height: 100%;
            padding: 0 20px;
            border: none;
            border-radius: 85px;
            font-weight: 400;
            font-size: 32px;
            line-height: 40px;
            color: $dark-blue;
            caret-color: $dark-blue;

            @include media("<=tablet") {
                width: 500px;
                height: 40px;
                border-radius: 50px;
                padding-left: 20px;
                font-size: 16px;
                line-height: 20px;
            }

            @include media("<=phone") {
                width: 90%;
            }

            &::placeholder {
                font-family: "Athletics";
                font-style: normal;
                font-weight: 400;
                font-size: 32px;
                line-height: 40px;
                color: rgba(30, 52, 79, 0.3);

                @include media("<=tablet") {
                    font-size: 16px;
                    line-height: 20px;
                }
            }
        }

        & button {
            position: absolute;
            right: 20px;
            z-index: 1;
            padding: 0px 20px;
            height: 50px;
            background: $grinch-green;
            border-radius: 68px;
            font-family: "Athletics";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            color: $white;

            @include media("<=tablet") {
                font-size: 14px;
                line-height: 17px;
                height: 30px;
                border-radius: 35px;
                padding: 0px 10px;
                right: 10px;
            }
        }
    }
}
</style>

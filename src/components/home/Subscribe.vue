<script setup>
import { onMounted, ref } from "@vue/runtime-core";

onMounted(() => {});
</script>

<template>
    <section class="subscribe">
        <div class="subscribe-image">
            <img src="/assets/components/caption/subscribe-image.jpg" alt="subscribe bg image" data-speed="0.8" />
        </div>

        <div class="subscribe-form">
            <h1>Subscribe to Heinz Premium to Get 20% Off</h1>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.subscribe {
    width: 100%;
    max-height: 760px;
    height: 100vh;
    overflow: hidden;
    background-color: $dark-blue;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include media("<=tablet") {
        height: fit-content;
        max-height: unset;
        flex-direction: column-reverse;
    }

    &-image {
        width: 50%;
        height: 100%;
        max-height: 760px;
        overflow: hidden;

        @include media("<=tablet") {
            width: 100%;
            height: 400px;
            max-height: unset;
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            @include media(">=tablet") {
                width: 105%;
                height: 105%;
            }
        }
    }

    &-form {
        width: 50%;
        height: 100%;
        max-height: 760px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 5% 0;

        @include media("<=tablet") {
            width: 100%;
            max-height: unset;
            height: fit-content;
            padding: toRem(40) 5% toRem(40);
        }

        & h1 {
            font-style: normal;
            font-weight: 400;
            font-size: 64px;
            line-height: 81px;
            color: $creamy-brown;
            max-width: 95%;

            @include media("<=tablet") {
                max-width: 100%;
                font-size: 48px;
                line-height: 60px;
            }
        }

        & form {
            margin-top: 50px;
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            max-width: 95%;

            @include media("<=tablet") {
                max-width: 100%;
                margin-top: 30px;
            }

            & input {
                width: 100%;
                height: 80px;
                background: $creamy-brown;
                border-radius: 85px;
                outline: 0;
                border: 0;
                padding-left: 40px;
                font-family: "Athletics";
                font-style: normal;
                font-weight: 400;
                font-size: 32px;
                line-height: 40px;
                color: rgba(30, 52, 79, 0.3);

                @include media("<=tablet") {
                    height: 50px;
                    padding-left: 20px;
                    font-size: 16px;
                    line-height: 20px;
                    border-radius: 50px;
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

                &:not(:last-of-type) {
                    margin-bottom: 50px;

                    @include media("<=tablet") {
                        margin-bottom: 25px;
                    }
                }
            }

            & button {
                margin-top: 40px;
                width: 100%;
                height: 80px;
                background: $grinch-green;
                border-radius: 44px;
                font-weight: 700;
                font-size: 36px;
                line-height: 45px;
                color: $white;

                @include media("<=tablet") {
                    font-size: 16px;
                    line-height: 20px;
                    height: 50px;
                    margin-top: 25px;
                }
            }
        }
    }
}
</style>

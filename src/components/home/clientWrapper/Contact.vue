<script setup></script>

<template>
    <section class="contact">
        <div class="contact_wrapper">
            <div class="contact_wrapper-copiesC">
                <h2 data-animation="header" data-scroll data-scroll-speed="1">Have a project in mind?</h2>
                <h2 data-animation="header" data-scroll data-scroll-speed="1">Let&apos;s get to work.</h2>
                <p data-animation="fade">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScyZFhrmHARCB5Ls55Wn7wxR4uZjvXUNEu0VKHISxYp_NsgZQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Start a Project</a
                    >
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.contact {
    height: fit-content;
    width: 100%;
    padding: toRem(105) 0 toRem(60);
    @include grid;

    @include media("<=tablet") {
        padding: toRem(25) 0 toRem(25);
    }

    &_wrapper {
        width: 90%;
        max-width: toRem(1300);
        height: 535px;
        border-radius: 25px 25px 25px 227px;
        position: relative;
        overflow: hidden;
        @include grid;
        background-image: url(/assets/components/client/contact-bg.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @include media("<=tablet") {
            max-width: 90%;
            border-radius: 25px;
            height: fit-content;
            padding: toRem(120) 0 toRem(120);
            background-image: url(/assets/components/client/m-contact-bg.svg);
        }

        &-copiesC {
            width: max-content;
            height: max-content;
            position: absolute;
            @include flex(center, flex-start);
            @include flex_col;

            @include media("<=tablet") {
                position: unset;
                width: 100%;
                @include flex(center, center);
            }

            & h2 {
                font-weight: 400;
                font-size: toRem(96);
                line-height: toRem(102);
                color: $eneseewhite;
                max-width: toRem(950);
                text-align: left;

                @include media("<=tablet") {
                    font-size: toRem(28);
                    line-height: toRem(32);
                    text-align: center;
                }

                &:last-of-type {
                    margin-bottom: toRem(24);
                }
            }

            & p {
                text-align: left;

                @include media("<=tablet") {
                    text-align: center;
                }

                & a {
                    font-weight: 400;
                    font-size: toRem(72);
                    line-height: toRem(102);
                    color: $eneseeGreen1;
                    position: relative;
                    transition: all 0.4s ease-in;

                    @include media("<=tablet") {
                        font-size: toRem(32);
                        line-height: toRem(32);
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 4px;
                        background: currentColor;
                        left: 0;
                        bottom: 4px;
                        -webkit-transform: scaleX(1);
                        transform: scaleX(1);
                        -webkit-transform-origin: bottom right;
                        transform-origin: bottom right;
                        -webkit-transition: -webkit-transform 0.4s ease-out;
                        transition: -webkit-transform 0.4s ease-out;
                        transition: transform 0.4s ease-out;
                        transition: transform 0.4s ease-out, -webkit-transform 0.4s ease-out;

                        @include media("<=tablet") {
                            height: 2px;
                            bottom: 2px;
                        }
                    }

                    &:hover {
                        &::before {
                            -webkit-transform: scaleX(0);
                            transform: scaleX(0);
                            -webkit-transform-origin: bottom left;
                            transform-origin: bottom left;
                        }
                    }
                }
            }
        }
    }
}
</style>

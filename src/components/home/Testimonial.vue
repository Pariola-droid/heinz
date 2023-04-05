<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import Splide from "@splidejs/splide";

onMounted(() => {
    // Splide JS
    new Splide(".splide", {
        type: "loop",
        perPage: 3,
        rewind: true,
        focus: "center",
        pagination: false,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
    }).mount();
});
</script>

<template>
    <section class="testimonial">
        <div class="testimonial_wrapper">
            <div class="testimonial_slider splide">
                <!-- Lib - Customized arrows -->
                <div class="splide__arrows splide__arrows--ltr">
                    <button class="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide" aria-controls="splide01-track">
                        <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_13860)">
                                <path
                                    d="M19.6839 0.883179L0.517303 20.0498L19.6839 39.2164C19.6839 39.2164 13.8922 29.6331 13.8922 20.0498C13.8922 10.4665 19.6839 0.883179 19.6839 0.883179V0.883179Z"
                                    fill="#F8E9D4"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_13860">
                                    <rect width="20" height="38.8438" fill="white" transform="translate(0 0.625)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>

                    <button class="splide__arrow splide__arrow--next" type="button" aria-label="Go to first slide" aria-controls="splide01-track">
                        <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_13863)">
                                <path
                                    d="M0.31543 39.2113L19.482 20.0448L0.31543 0.878174C0.31543 0.878174 6.1071 10.4615 6.1071 20.0448C6.1071 29.6281 0.31543 39.2113 0.31543 39.2113Z"
                                    fill="#F8E9D4"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_13863">
                                    <rect width="20" height="38.8438" fill="white" transform="translate(0 0.625)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <!-- Lib - Customized arrows -->
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <div class="testimonial-testimony">
                                <small>Hot sauce</small>
                                <!--  -->
                                <svg width="97" height="17" viewBox="0 0 97 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_13763)">
                                        <path
                                            d="M9.45552 0.953125L7.37398 7.00844H0.662476L6.09531 10.7582L4.01773 16.8125L9.45552 13.0677L14.8884 16.8125L12.8068 10.7572L18.2396 7.00745H11.5291L9.45552 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M29.0449 0.953125L26.9633 7.00844H20.2568L25.6896 10.7582L23.612 16.8125L29.0449 13.0677L34.4876 16.8125L32.4061 10.7582L37.8379 7.00844H31.1274L29.0449 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M48.6381 0.953125L46.5566 7.00844H39.85L45.2829 10.7582L43.2053 16.8125L48.6381 13.0677L54.0759 16.8125L51.9944 10.7572L57.4272 7.00745H50.7167L48.6381 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M68.2374 0.953125L66.1558 7.00844H59.4453L64.8772 10.7582L62.7996 16.8125L68.2374 13.0687L73.6702 16.8125L71.5887 10.7572L77.0215 7.00745H70.31L68.2374 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M87.8257 0.953125L85.7442 7.00844H79.0337L84.4665 10.7582L82.3929 16.8125L87.8257 13.0677L93.2635 16.8125L91.182 10.7572L96.6148 7.00745H89.9033L87.8257 0.953125Z"
                                            fill="#FF5700"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_13763">
                                            <rect width="96" height="15.8594" fill="white" transform="translate(0.640625 0.953125)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <!--  -->
                                <p>
                                    "This is absolutely awesome. It&apos;s going with me on every trip. Used it for omelette, fried yam and baked
                                    chicken. All delicious. Add the final ummmmph factor to the food. Love! Love! Love!"
                                </p>
                                <h6>Nguyiman Makurdi</h6>
                            </div>
                        </li>

                        <li class="splide__slide">
                            <div class="testimonial-testimony">
                                <small>Hot sauce</small>
                                <!--  -->
                                <svg width="97" height="17" viewBox="0 0 97 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_13763)">
                                        <path
                                            d="M9.45552 0.953125L7.37398 7.00844H0.662476L6.09531 10.7582L4.01773 16.8125L9.45552 13.0677L14.8884 16.8125L12.8068 10.7572L18.2396 7.00745H11.5291L9.45552 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M29.0449 0.953125L26.9633 7.00844H20.2568L25.6896 10.7582L23.612 16.8125L29.0449 13.0677L34.4876 16.8125L32.4061 10.7582L37.8379 7.00844H31.1274L29.0449 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M48.6381 0.953125L46.5566 7.00844H39.85L45.2829 10.7582L43.2053 16.8125L48.6381 13.0677L54.0759 16.8125L51.9944 10.7572L57.4272 7.00745H50.7167L48.6381 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M68.2374 0.953125L66.1558 7.00844H59.4453L64.8772 10.7582L62.7996 16.8125L68.2374 13.0687L73.6702 16.8125L71.5887 10.7572L77.0215 7.00745H70.31L68.2374 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M87.8257 0.953125L85.7442 7.00844H79.0337L84.4665 10.7582L82.3929 16.8125L87.8257 13.0677L93.2635 16.8125L91.182 10.7572L96.6148 7.00745H89.9033L87.8257 0.953125Z"
                                            fill="#FF5700"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_13763">
                                            <rect width="96" height="15.8594" fill="white" transform="translate(0.640625 0.953125)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <!--  -->
                                <p>"I can’t get enough honestly, probably one of the best I have had in my life no cap 🧢"</p>
                                <h6>Damilola Laguda</h6>
                            </div>
                        </li>

                        <li class="splide__slide">
                            <div class="testimonial-testimony">
                                <small>Hot sauce</small>
                                <!--  -->
                                <svg width="97" height="17" viewBox="0 0 97 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_13763)">
                                        <path
                                            d="M9.45552 0.953125L7.37398 7.00844H0.662476L6.09531 10.7582L4.01773 16.8125L9.45552 13.0677L14.8884 16.8125L12.8068 10.7572L18.2396 7.00745H11.5291L9.45552 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M29.0449 0.953125L26.9633 7.00844H20.2568L25.6896 10.7582L23.612 16.8125L29.0449 13.0677L34.4876 16.8125L32.4061 10.7582L37.8379 7.00844H31.1274L29.0449 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M48.6381 0.953125L46.5566 7.00844H39.85L45.2829 10.7582L43.2053 16.8125L48.6381 13.0677L54.0759 16.8125L51.9944 10.7572L57.4272 7.00745H50.7167L48.6381 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M68.2374 0.953125L66.1558 7.00844H59.4453L64.8772 10.7582L62.7996 16.8125L68.2374 13.0687L73.6702 16.8125L71.5887 10.7572L77.0215 7.00745H70.31L68.2374 0.953125Z"
                                            fill="#FF5700"
                                        />
                                        <path
                                            d="M87.8257 0.953125L85.7442 7.00844H79.0337L84.4665 10.7582L82.3929 16.8125L87.8257 13.0677L93.2635 16.8125L91.182 10.7572L96.6148 7.00745H89.9033L87.8257 0.953125Z"
                                            fill="#FF5700"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_13763">
                                            <rect width="96" height="15.8594" fill="white" transform="translate(0.640625 0.953125)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <!--  -->
                                <p>
                                    "Delicious. Very rich and well flavored. I was really impressed. When I started to see the bottom of the container
                                    I got so sad. Honestly it’s so good you don’t ever want to run out. 10/10 for sure."
                                </p>
                                <h6>Damilola Laguda</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.testimonial {
    width: 100%;
    height: fit-content;
    padding: 35px 0 50px;
    display: grid;
    place-items: center;
    overflow: hidden;

    @include media("<=tablet") {
        padding: 30px 0 40px;
    }

    &_wrapper {
        width: 100%;
        max-width: 90%;
        height: fit-content;
        max-height: 550px;
        padding: 110px 0 110px;

        @include media("<=tablet") {
            padding: 20px 0 25px;
        }
    }

    &_slider {
        width: 100%;
        height: fit-content;
    }

    &-testimony {
        max-width: 445px;
        height: fit-content;
        display: flex;
        align-items: center;
        flex-direction: column;

        & small {
            font-family: "Athletics";
            font-weight: 700;
            font-size: 22px;
            line-height: 31px;
            text-align: center;
            color: $creamy-brown;
            margin-bottom: 28px;

            @include media("<=tablet") {
                margin-bottom: 22px;
            }
        }

        & p {
            font-family: "Athletics";
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: $creamy-brown;
            margin-top: 36px;
            max-width: 345px;

            @include media("<=tablet") {
                margin-top: 30px;
            }
        }

        & h6 {
            font-family: "Athletics";
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
            text-align: center;
            text-transform: uppercase;
            margin-top: 38px;
            color: $creamy-brown;
        }
    }
}

// Splide Slider Lib Customization

.splide {
    @include media("<=tablet") {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto;
    }

    @include media("<=phone") {
        max-width: 350px !important;
    }
}

.splide__slide {
    cursor: grab;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.splide__arrow--prev {
    left: -1em !important;

    // @include media('<=phone') {
    //   left: -12% !important;
    // }

    & svg {
        transform: scaleX(1) !important;
    }
}

.splide__arrow--next {
    right: -1em !important;
}

.splide__arrow svg {
    height: unset !important;
    width: unset !important;

    @include media("<=tablet") {
        height: 25px !important;
    }

    @include media("<=phone") {
        height: 20px !important;
    }
}

.splide__arrow {
    height: fit-content !important;
    opacity: 1 !important;
    width: fit-content !important;
    background: transparent !important;
    border-radius: unset !important;
}
</style>

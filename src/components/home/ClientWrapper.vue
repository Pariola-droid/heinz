<script setup>
import About from "./clientWrapper/About.vue";
import Clients from "./clientWrapper/Clients.vue";
import Contact from "./clientWrapper/Contact.vue";
</script>

<template lang="">
    <section class="clientWrap">
        <About />
        <Clients />
        <Contact />
    </section>
</template>

<style lang="scss" scoped>
.clientWrap {
    height: auto;
    width: 100%;
    background-image: url(/assets/components/client/bg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @include media("<=tablet") {
        background-position: top;
        background-image: url(/assets/components/client/m-bg.svg);
    }
}
</style>

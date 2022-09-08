<template>
    <div class="hero">
        <h1 class="hero_title">
            <span class="hero_title_letter">C</span>
            <span class="hero_title_letter">o</span>
            <span class="hero_title_letter">r</span>
            <span class="hero_title_letter">e</span>
            <span class="hero_title_letter">n</span>
            <span class="hero_title_letter">t</span>
            <span class="hero_title_letter">i</span>
            <span class="hero_title_letter">n</span>
            <span class="hero_title_letter">&nbsp;</span>
            <span class="hero_title_letter">R</span>
            <span class="hero_title_letter">o</span>
            <span class="hero_title_letter">y</span>
            <br>
            Developpeur Web
        </h1>
    </div>

    <ScrollDown/>
</template>

<script>
    import ScrollDown from '@/components/ScrollDown.vue'

    export default {
        components: {
            ScrollDown,
        }
    }
</script>

<style lang="scss">
    .hero{
        &_title{
            @include absolute-vertical-center;
            top: 45%;
            left: 5rem;
            position: absolute;
            font-size: 7rem;
            color: $primary-color;

            &_letter{
                font-size: 8rem;
                display: inline-block;
                color: $text-color;
                transition: .2s;

                &:hover{
                    color: $primary-color;
                    transition: .4s;
                }
            }
        }
    }
</style>
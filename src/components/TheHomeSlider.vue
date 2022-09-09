<template>
    <div class="swiper-container">
        <swiper
            :direction="'vertical'"
            :slides-per-view="1"
            :modules="modules" 
            :mousewheel="true"
            :navigation="navigation"
            :pagination="{ clickable: true }"
            effect="fade"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="swiper"
        >
            <swiper-slide class="swiper_slide">
                <TheHeroSection/>
                <ThreeCanvas/>
            </swiper-slide>
            <swiper-slide class="swiper_slide">Slide 2</swiper-slide>
            <swiper-slide class="swiper_slide">Slide 3</swiper-slide>

            <!-- <div class="swiper_navigation">
                <button class="swiper_navigation_prev">PREV</button>
                <button class="swiper_navigation_next">NEXT</button>
            </div> -->
        </swiper>
    </div>
</template>

<script>
    import { Navigation, EffectFade, Mousewheel, Pagination } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import ThreeCanvas from '@/components/ThreeCanvas.vue';
    import TheHeroSection from '@/components/TheHeroSection.vue';


    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    import 'swiper/css/effect-fade';
    import 'swiper/css/mousewheel';

    export default {
        components: {
            Swiper,
            SwiperSlide,
            ThreeCanvas,
            TheHeroSection
        },

        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Mousewheel, EffectFade, Pagination],
                navigation: {
                    nextEl: '.swiper_navigation_next',
                    prevEl: '.swiper_navigation_prev',
                },
            };
        },
    };
</script>

<style lang="scss">
    .swiper-container{
        width: 100vw;
        height: 100vh;
        background: salmon;

        .swiper{
            height: 100%;

            &_slide{
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;

                &:first-child{
                    background: red;
                }

                &:nth-child(2){
                    background: darkcyan;
                }

                &:nth-child(3){
                    background: lightcoral;
                }
            }

            &-pagination{
                display: flex;
                flex-direction: column;
                gap: 4rem;
                right: 3rem;

                &-bullet{
                    background-color: #ddd;
                    opacity: 1;
                    position: relative;
                    overflow: visible;

                    &-active:after{
                        content: " ";
                        width: 24px;
                        height: 24px;
                        border: 2px solid #ddd;
                        border-radius: 50%;
                        position: absolute;
                        top: -10px;
                        left: -10px;
                    }
                }
            }
        }

    }
</style>

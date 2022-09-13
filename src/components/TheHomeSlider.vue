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
                <ThreeCanvasHero customRef="canvas1" color="rgba(0, 0, 0)"/>
            </swiper-slide>
            <swiper-slide class="swiper_slide">
                <HomeSliderSection/>
                <ThreeCanvasMatui customRef="canvas2" color="rgba(0, 122, 204)"/>
            </swiper-slide>
            <swiper-slide class="swiper_slide">
                <ThreeCanvasPhotobox customRef="canvas2" color="rgba(130, 74, 167)"/>
            </swiper-slide>

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
    import ThreeCanvasHero from '@/components/ThreeCanvas/ThreeCanvasHero.vue';
    import ThreeCanvasMatui from '@/components/ThreeCanvas/ThreeCanvasMatui.vue';
    import ThreeCanvasPhotobox from '@/components/ThreeCanvas/ThreeCanvasPhotobox.vue';
    import TheHeroSection from '@/components/TheHeroSection.vue';
    import HomeSliderSection from '@/components/HomeSliderSection.vue';


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
            ThreeCanvasHero,
            ThreeCanvasMatui,
            ThreeCanvasPhotobox,
            TheHeroSection,
            HomeSliderSection
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
                    background-color: transparent;
                    opacity: 1;
                    position: relative;
                    overflow: visible;
                    padding: 1em;

                    &:before{
                        content: " ";
                        width: 8px;
                        height: 8px;
                        background-color: #ddd;
                        border-radius: 50%;
                        @include absolute-center;
                        opacity: .7;
                    }

                    &:after{
                        content: " ";
                        width: 24px;
                        height: 24px;
                        border: 2px solid #ddd;
                        border-radius: 50%;
                        @include absolute-center;
                        opacity: 0;
                        transition: .3s ease;
                    }

                    &:hover:after{
                        opacity: .7;
                    }

                    &-active{
                        &:after, &:before{
                            opacity: 1;
                        }
                    }
                }
            }
        }

    }
</style>

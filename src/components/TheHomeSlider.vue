<template>
    <div class="swiper-container">
        <swiper
            :direction="'vertical'"
            :slides-per-view="1"
            :modules="modules" 
            :mousewheel="true"
            :navigation="navigation"
            :keyboard="true"
            :allowTouchMove="false"
            :pagination="{ clickable: true }"
            effect="fade"
            class="swiper"
        >
            <swiper-slide class="swiper_slide">
                <TheHeroSection/>
                <ThreeCanvasHero customRef="canvas1" color="rgba(0, 0, 0)"/>
            </swiper-slide>
            <swiper-slide class="swiper_slide">
                <HomeSliderSection :infos="infosMatui" primaryColor="#007ACC" secondaryColor="#add8e6" :content="contentMatui" :screens="screenMatui">
                    <template v-slot:image>
                        <img :src="imageMatui">
                    </template>
                </HomeSliderSection>
                <ThreeCanvasMatui customRef="canvas2" color="rgba(0, 122, 204)"/>
            </swiper-slide>
            <swiper-slide class="swiper_slide">
                <HomeSliderSection :infos="infosMatui" primaryColor="#8340af" secondaryColor="#e1bbfa" :content="contentPhotobox" :screens="screenPhotobox">
                    <template v-slot:image>
                        <img :src="imagePhotobox">
                    </template>
                </HomeSliderSection>
                <ThreeCanvasPhotobox customRef="canvas2" color="rgba(131, 64, 175)"/>
            </swiper-slide>
            <swiper-slide class="swiper_slide">
                <HomeSliderSection :infos="infosMatui" primaryColor="#059C80" secondaryColor="#B5FFD2" :content="contentHerobrine" :screens="screenHerobrine">
                    <template v-slot:image>
                        <img :src="imageHerobrine">
                    </template>
                </HomeSliderSection>
                <ThreeCanvasHerobrine customRef="canvas2" color="rgba(5, 166, 135)"/>
            </swiper-slide>
            <!-- <div class="swiper_navigation">
                <button class="swiper_navigation_prev">PREV</button>
                <button class="swiper_navigation_next">NEXT</button>
            </div> -->
        </swiper>
    </div>
</template>

<script>
    import { EffectFade, Mousewheel, Pagination, Keyboard } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import ThreeCanvasHero from '@/components/ThreeCanvas/ThreeCanvasHero.vue';
    import ThreeCanvasMatui from '@/components/ThreeCanvas/ThreeCanvasMatui.vue';
    import ThreeCanvasPhotobox from '@/components/ThreeCanvas/ThreeCanvasPhotobox.vue';
    import ThreeCanvasHerobrine from '@/components/ThreeCanvas/ThreeCanvasHerobrine.vue';
    import TheHeroSection from '@/components/TheHeroSection.vue';
    import HomeSliderSection from '@/components/HomeSliderSection.vue';

    import imageMatui from "@/assets/MATUI_MockUp.png"
    import imagePhotobox from "@/assets/Photobox_MockUp.png"
    import imageHerobrine from "@/assets/Herobrine_MockUp.png"

    import imagePhotobox1 from "@/assets/Photobox_1.png"
    import imagePhotobox2 from "@/assets/Photobox_2.png"
    import imagePhotobox3 from "@/assets/Photobox_3.png"
    import imagePhotobox4 from "@/assets/Photobox_4.png"
    import imagePhotobox5 from "@/assets/Photobox_5.png"

    import imageMatui1 from "@/assets/MATUI_1.png"
    import imageMatui2 from "@/assets/MATUI_2.png"
    import imageMatui3 from "@/assets/MATUI_3.png"
    import imageMatui4 from "@/assets/MATUI_4.png"
    import imageMatui5 from "@/assets/MATUI_5.png"
    import imageMatui6 from "@/assets/MATUI_6.png"

    import imageHerobrine1 from "@/assets/Herobrine_1.png"
    import imageHerobrine2 from "@/assets/Herobrine_2.png"
    import imageHerobrine3 from "@/assets/Herobrine_3.png"


    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    import 'swiper/css/effect-fade';
    import 'swiper/css/mousewheel';

    export default {
        data: function () {
            return {
                imageMatui: imageMatui,
                imagePhotobox: imagePhotobox,
                imageHerobrine: imageHerobrine,
                infosMatui: {title: "ANNEE", description: "2021"},
                contentMatui : {
                    num: ".01",
                    title: "MATIU",
                    subtitle : "Un outil d'aide à la décision",
                    description : "Implémentation du diagramme MATUI, un arbre de décision développé par des chercheurs du LIG (Laboratoire d'informatique de Grenoble) dont le but est d'aider les chercheurs en informatique à concevoir leurs expérimentations centrées humain."
                },
                contentPhotobox : {
                    num: ".02",
                    title: "Photobox",
                    subtitle : "Une application de partage de photos",
                    description : "Développement d'une application de partage de photos en direct dans le cadre d'un projet d'étude. Ce service propose à ses utilisateurs de partager l'instant présent lors d'événements et de les partager aux autres utilisateurs par l'intermédiaire d'un flux en direct."
                },
                contentHerobrine : {
                    num: ".03",
                    title: "Herobrine",
                    subtitle : "Une copie de Twitter",
                    description : "Conception d'un site reprenant les fonctionnalités phares de Twitter. Développement de l'aspect front-end uniquement, l'objectif est de découvrir de nouvelles technologies (ici Svelte). Le produit comporte les fonctionnalités premières des réseaux sociaux actuels."
                },
                screenPhotobox: [imagePhotobox1, imagePhotobox2, imagePhotobox3, imagePhotobox4, imagePhotobox5],
                screenMatui: [imageMatui1, imageMatui2, imageMatui3, imageMatui4, imageMatui5, imageMatui6],
                screenHerobrine: [imageHerobrine1, imageHerobrine2, imageHerobrine3]


            }
        },

        components: {
            Swiper,
            SwiperSlide,
            ThreeCanvasHero,
            ThreeCanvasMatui,
            ThreeCanvasPhotobox,
            ThreeCanvasHerobrine,
            TheHeroSection,
            HomeSliderSection
        },

        setup() {
            return {
                modules: [Mousewheel, EffectFade, Pagination, Keyboard],
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

        .swiper{
            height: 100%;

            &_slide{
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;
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
